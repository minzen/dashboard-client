/**
 * WidgetMetaDataInterface
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

'use strict'

import WidgetMetaDataInterface from './WidgetMetaDataInterface';

interface WidgetInterface {
    onInit: Function;
    onUpdate: Function;
}

export default WidgetInterface;
