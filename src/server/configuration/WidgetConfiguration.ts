/**
 * WidgetConfiguration
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

export default class WidgetConfiguration {

    private type: string;
    private configuration: any;

    public setType(type: string): void {
        this.type = type;
    }

    public getType(): string {
        return this.type;
    }

    public setConfiguration(configuration: any): void {
        this.configuration = configuration;
    }

    public getConfiguration(): any {
        return this.configuration;
    }

}
