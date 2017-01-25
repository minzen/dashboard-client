/**
 * JenkinsBuildStatusWidget
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */
import Widget from '../widget/WidgetMetadata';
import * as Dashboard from '../widget/AbstractWidget';
import * as RequestPromise from 'request-promise';
import JenkinsBuildStatusWidgetUpdate from '../../common/JenkinsBuildStatusWidgetUpdate';

@Widget({
    author: 'Johannes Diemke <johannes.diemke@eventim.de>',
    designation: 'jenkinsbuildstatus',
    version: '0.0.1',
    updateInterval: 60000,
})
class JenkinsBuildStatusWidget extends Dashboard.AbstractWidget {

    private update: JenkinsBuildStatusWidgetUpdate;

    public onUpdate(): void {
        this.getNewsUpdate()
            .then((response) => {
                let estimatedDuration: number = response.estimatedDuration;
                let result: string = response.result;
                let timestamp: number = response.timestamp;
                this.update = new JenkinsBuildStatusWidgetUpdate(this.getConfiguration().caption, result, estimatedDuration, timestamp);
                this.updateView();
            });
    }

    public onInit(): void {
        let newsWidgetConfiguration: any = this.getConfiguration();
    }

    public updateView(): void {
        super.emitUpdate(this.update);
    }

    private getNewsUpdate() {
        let config = this.getConfiguration();
        let options = {
            uri: `${config.server}/job/${config.jobName}/lastBuild/api/json?tree=result,timestamp,estimatedDuration`,
            json: true,
            rejectUnauthorized: false,
        };
        return RequestPromise(options);
    }

}
