/**
 * JenkinsBuildStatusWidgetUpdate
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de
 * @since 0.0.1
 */

export default class JenkinsBuildStatusWidgetUpdate {

    public caption: string;
    public result: string;
    public estimatedDuration: number;
    public timestamp: number;

    constructor(caption: string, result: string, estimatedDuration: number, timestamp: number) {
        this.caption = caption;
        this.result = result;
        this.estimatedDuration = estimatedDuration;
        this.timestamp = timestamp;
    }

}
