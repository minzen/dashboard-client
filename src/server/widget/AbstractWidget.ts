/**
 * AbstractWidget
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

'use strict'

import WidgetInterface from './WidgetInterface';
import WidgetMetaDataInterface from './WidgetMetaDataInterface';
import WidgetConstructor from './WidgetConstructor';

export abstract class AbstractWidget implements WidgetInterface {

    private configuration: any;

    constructor(configuration: any) {
        this.configuration = configuration;
    }

    public onInit(): void {

    }

    public abstract onUpdate(): any;

}
