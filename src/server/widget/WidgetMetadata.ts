/**
 * Widget
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de
 * @since 0.0.1
 */

import * as Dashboard from './AbstractWidget';
import WidgetMetaDataInterface from './WidgetMetaDataInterface';
import WidgetConstructor from './WidgetConstructor';
import PluginRegistry from '../PluginRegistry';
import DecoratorIncompatibilityException from './DecoratorIncompatibilityException';

function Widget(metadata: WidgetMetaDataInterface): any {

    return function (constructor: Function) {
        // Check if the decorator is compatible to the decorated class
        if (!(constructor.prototype instanceof Dashboard.AbstractWidget)) {
            console.error("Illegal use of WidgetMetaData Decorator on class " + constructor.prototype.constructor.name + "!");
            throw new DecoratorIncompatibilityException("Wrong use of Decorator!");
        }

        // Attach metadata to constructor
        let widgetConstructor: WidgetConstructor = constructor as WidgetConstructor;
        widgetConstructor.metadata = metadata;

        // Add constructor to registry
        PluginRegistry.getInstance().add(metadata.designation, widgetConstructor);

        return widgetConstructor;
    }

}

export default Widget;
