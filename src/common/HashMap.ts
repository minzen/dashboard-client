/**
 * stuff.
 *
 * @author johannes diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

'use strict'

export default class HashMap<V> {

    private map: {[designation: string] : V};

    constructor() {
        this.map = {};
    }

    public put(key: string, value: V): void {
        this.map[key] = value;
    }

    public get(key: string): V {
        return this.map[key] ? this.map[key] : null;
    }

    public remove(key: string): void {
        delete this.map[key];
    }

    public clear(): void {
        this.map = {};
    }

    public containsKey(key: string): boolean {
        return this.map.hasOwnProperty(key);
    }

    public containsValue(value: V): boolean {
        for(let x in this.map) {
            if(this.map[x] == value) {
                return true;
            }
        }
        return false;
    }

    public getAllKeys(): Array<string> {
        let keys: Array<string> = new Array<string>();

        for(let x in this.map) {
            keys.push(x);
        }

        return keys;
    }

    public size(): number {
        let count: number = 0;

        for(let x in this.map) {
            count++;
        }

        return count;
    }

}
