/**
 * GreetingsWidget
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

import Widget from '../widget/WidgetMetadata';
import * as Dashboard from '../widget/AbstractWidget';
import GreetingsWidgetUpdate from '../../common/GreetingsWidgetUpdate';

@Widget({
    author: 'Johannes Diemke <johannes.diemke@eventim.de>',
    designation: 'greetings',
    version: '0.0.1',
    updateInterval: 2500
})
class GreetingsWidget extends Dashboard.AbstractWidget {

    private static greetings: Array<string> = [
        'Good morning!',
        'Eat my shorts!',
        'Damn, I\'m good!'
    ];

    public onUpdate(): GreetingsWidgetUpdate {
        let index: number = Math.floor(Math.random() * GreetingsWidget.greetings.length);
        let selection: string = GreetingsWidget.greetings[index];
        return new GreetingsWidgetUpdate(selection);
    }

}
