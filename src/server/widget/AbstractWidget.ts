/**
 * AbstractWidget
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */
import WidgetInterface from './WidgetInterface';

export abstract class AbstractWidget implements WidgetInterface {

    protected configuration: any;
    protected designation: string;
    private sockets: Array<SocketIO.Socket> = new Array<SocketIO.Socket>();

    public addSocket(socket: SocketIO.Socket) {
        this.sockets.push(socket);
    }

    public setDesignation(designation: string) {
        this.designation = designation;
    }

    public setConfiguration(configuration: any): void {
        this.configuration = configuration;
    }

    public getConfiguration(): any {
        return this.configuration;
    }

    public updateSockets(updateObject: any): void {
        console.log('update client ' + this.designation);
        this.sockets.forEach((socket: SocketIO.Socket) => {
            socket.emit(this.designation, updateObject);
        });
    }

    public abstract onUpdate(): void;

    public onInit(): void {
    };

}
