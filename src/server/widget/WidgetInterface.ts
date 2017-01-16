/**
 * WidgetMetaDataInterface
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

interface WidgetInterface {
    onInit(): void;
    onUpdate(): void;
    setDesignation(designation: string): void;
    updateView(): void;
    addSocket(socket: SocketIO.Socket): void;
    setConfiguration(configuration: any): void;
}

export default WidgetInterface;
