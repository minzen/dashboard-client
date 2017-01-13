export class MessageSocket {
    nsp: any;
    name: string;
    data: any;
    socket: any;

    constructor(io: any) {
        this.nsp = io.of('/messages/');
        this.nsp.on('connection', (socket: any) => {
            this.socket = socket;
            this.listen();
        });
    }

    // Add signal
    private listen(): void {
        this.socket.on('disconnect', () => this.disconnect());
    }

    // Handle disconnect
    private disconnect(): void {
        console.log('Client disconnected');
    }

}
