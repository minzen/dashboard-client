/**
 * GreetingsWidget
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */
import Widget from "../widget/WidgetMetadata";
import * as Dashboard from "../widget/AbstractWidget";
import NewsWidgetUpdate from "../../common/NewsWidgetUpdate";

@Widget({
    author: 'Johannes Diemke <johannes.diemke@eventim.de>',
    designation: 'news',
    version: '0.0.1',
    updateInterval: 2500
})
class NewsWidget extends Dashboard.AbstractWidget {

    private static greetings: Array<string> = [
        'Good morning!',
        'Eat my shorts!',
        'Damn, I\'m good!'
    ];

    public onUpdate(): NewsWidgetUpdate {
        let index: number = Math.floor(Math.random() * NewsWidget.greetings.length);
        let selection: string = NewsWidget.greetings[index];
        return new NewsWidgetUpdate(selection);
    }

}
