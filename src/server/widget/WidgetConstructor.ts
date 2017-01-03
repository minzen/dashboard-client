/**
 * WidgetConstructor
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

import WidgetInterface from './WidgetInterface';
import WidgetMetaDataInterface from './WidgetMetaDataInterface';

interface WidgetConstructor {
    new(configuration: any) : WidgetInterface;
    metadata: WidgetMetaDataInterface;
}

export default WidgetConstructor;
