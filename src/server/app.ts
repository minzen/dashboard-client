/**
 *
 */

import * as express from "express";
import * as http from "http";
import * as serveStatic from "serve-static";
import * as path from "path";
import * as socketIo from "socket.io";

import DynamicModuleLoader from './DynamicModuleLoader';
import PluginRegistry from './PluginRegistry';
import WidgetConstructor from './widget/WidgetConstructor';
import WidgetInterface from './widget/WidgetInterface';

declare var process, __dirname;

class Server {

    public app: any;
    private server: any;
    private io: any;
    private root: string;
    private port: number;

    private pluginRegistry: PluginRegistry = PluginRegistry.getInstance();

    // Bootstrap the application.
    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        console.log('Starting Dashboard Server ...');

        this.loadWidgetPlugins();
        this.app = express();
        this.config();
        this.routes();
        this.server = http.createServer(this.app);
        this.sockets();
        this.listen();
    }

    /**
     * load all widgets from the plugin directory.
     */
    private loadWidgetPlugins(): void {
        let dynamicModuleLoader = new DynamicModuleLoader();
        dynamicModuleLoader.addDirectory('plugins');
        dynamicModuleLoader.load();
    }

    // Configuration
    private config(): void {
        // By default the port should be 5000
        this.port = process.env.PORT || 5000;

        // root path is under ../../target
        this.root = path.join(path.resolve(__dirname, '../../dist/client'));

    }

    // Configure routes
    private routes(): void {
        let router: express.Router;
        router = express.Router();

        // Static assets
        //  this.app.use('/assets', serveStatic(path.resolve(this.root, 'assets')));

        this.app.use(express.static(this.root));

        // Set router to serve index.html (e.g. single page app)
        router.get('/', (request: express.Request, result: express.Response) => {
            result.sendFile(path.join(this.root, '/index.html'));
        });

        // Set app to use router as the default route
        this.app.use('*', router);
    }

    // Configure sockets
    private sockets(): void {
        // TODO: read plugin type from dashboard configuration and create instances dynamically
        let constructor: WidgetConstructor = this.pluginRegistry.get('clock');

        if (constructor != null) {
            let widget: WidgetInterface = new constructor({});

            // Get socket.io handle
            this.io = socketIo(this.server);
            this.io.on('connection', (socket: SocketIO.Socket) => {
                setInterval(() => {
                    socket.emit('message', widget.onUpdate());
                }, constructor.metadata.updateInterval);
            });
        } else {
            console.log('constructor does not exist');
        }
    }

    // Start HTTP server listening
    private listen(): void {
        //listen on provided ports
        this.server.listen(this.port);

        //add error handler
        this.server.on("error", error => {
            console.log("ERROR", error);
        });

        //start listening on port
        this.server.on("listening", () => {
            console.log('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', this.port, this.port);
        });

    }
}

// Bootstrap the server
let server = Server.bootstrap();
