/**
 * AbstractWidget
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

import WidgetInterface from './WidgetInterface';
import WidgetMetaDataInterface from './WidgetMetaDataInterface';
import WidgetConstructor from './WidgetConstructor';

export abstract class AbstractWidget implements WidgetInterface {

    protected configuration: any;

    public setConfiguration(configuration: any): void {
        this.configuration = configuration;
    }

    public getConfiguration(): any {
        return this.configuration;
    }

    public onInit(): void {

    }

    public abstract onUpdate(): any;

}
