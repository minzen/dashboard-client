/**
 * JiraWidget
 *
 * @author Feetu Nyrhinen <feetu.nyrhinen@gmail.com>
 * @since 0.0.1
 */
import Widget from '../widget/WidgetMetadata';
import * as Dashboard from '../widget/AbstractWidget';
import JiraWidgetUpdate from '../../common/JiraWidgetUpdate';

@Widget({
    author: 'Feetu Nyrhinen <feetu.nyrhinen@gmail.com>',
    designation: 'Jira',
    version: '0.0.1',
    updateInterval: 2500,
})
class JiraWidget extends Dashboard.AbstractWidget {
    private message: string;

    public onUpdate(): void {
        this.updateView();
    }

    public updateView(): void {
        super.emitUpdate(new JiraWidgetUpdate('update: ' +new Date()));
    }
}
