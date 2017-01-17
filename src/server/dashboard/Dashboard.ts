import WidgetInterface from '../widget/WidgetInterface';

/**
 * Created by dbrandt on 16.01.2017.
 */
export default class Dashboard {
    private _name: string;
    private _widgets: Array<WidgetInterface> = new Array<WidgetInterface>();

    constructor(name: string) {
        this.name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get widgets(): Array<WidgetInterface> {
        return this._widgets;
    }

    public addWidget(widget: WidgetInterface): void {
        this._widgets.push(widget);
    }
}
