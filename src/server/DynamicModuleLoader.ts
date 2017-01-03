/**
 * DynamicModuleLoader
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

'use strict'

declare function require(name: string);
declare var __dirname: string;

import fs = require("fs");

export default class DynamicModuleLoader {

    private directories: Array<string> = new Array<string>();

    public addDirectory(directory: string): void {
        this.directories.push(directory);
    }

    public load(): void {
        for (let directory of this.directories) {
            this.loadModule(directory);
        }
    }

    private loadModule(directory: string): void {
        let normalizedPath = require("path").join(__dirname, directory);
        require("fs").readdirSync(normalizedPath).forEach((file) => {
            if (this.endsWith(file, '.js')) {
                console.log("Loading module " + normalizedPath + "\\" + file);
                require("./" + directory + "/" + file);
            }
        });
    }

    private endsWith(str, suffix): boolean {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

}
