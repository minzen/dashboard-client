/**
 * PluginRegistry
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

'use strict'

import WidgetConstructor from './widget/WidgetConstructor';
import HashMap from '../common/HashMap';

export default class PluginRegistry {

    private static instance: PluginRegistry = null;
    private registredWidgets: HashMap<WidgetConstructor>;

    private constructor() {
        this.registredWidgets = new HashMap<WidgetConstructor>();
    }

    public static getInstance(): PluginRegistry {
        if (!PluginRegistry.instance) {
            PluginRegistry.instance = new PluginRegistry();
        }
        return PluginRegistry.instance;
    }

    public add(designation: string, widget: WidgetConstructor): void {
        this.registredWidgets.put(designation, widget);
    }

    public get(designation: string): WidgetConstructor {
        return this.registredWidgets.get(designation);
    }

}
