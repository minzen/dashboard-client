/**
 * WidgetMetaDataInterface
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

'use strict'

interface WidgetMetaDataInterface {
    designation: string;        // name of the plugin
    author: string;             // author name and email
    version: string;            // version of the plugin
    updateInterval: number;     // update intervall in milli seconds
}

export default WidgetMetaDataInterface;
