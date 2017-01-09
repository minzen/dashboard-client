/**
 * DashboardConfiguration
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

import WidgetConfiguration from './WidgetConfiguration';

export default class DashboardConfiguration {

    private name: string;
    private widgetConfigurations: Array<WidgetConfiguration> = new Array<WidgetConfiguration>();

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setWidgetConfigurations(widgets: Array<WidgetConfiguration>): void {
        this.widgetConfigurations = widgets;
    }

    public getWidgetConfigurations(): Array<WidgetConfiguration> {
        return this.widgetConfigurations;
    }

    public addWidgetConfiguration(widget: WidgetConfiguration): void {
        this.widgetConfigurations.push(widget);
    }

}
