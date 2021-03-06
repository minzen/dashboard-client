/**
 * GreetingsWidget
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */
import Widget from '../widget/WidgetMetadata';
import * as Dashboard from '../widget/AbstractWidget';
import NewsWidgetUpdate from '../../common/NewsWidgetUpdate';

@Widget({
    author: 'Johannes Diemke <johannes.diemke@eventim.de>',
    designation: 'news',
    version: '0.0.1',
    updateInterval: 2500,
})
class NewsWidget extends Dashboard.AbstractWidget {
    private greetings: Array<string>;
    private newsWidgetUpdate: NewsWidgetUpdate;

    public onUpdate(): void {
        let index: number = Math.floor(Math.random() * this.greetings.length);
        let selection: string = this.greetings[index];
        this.newsWidgetUpdate = new NewsWidgetUpdate(selection);
        this.updateView();
    }

    public onInit(): void {
        let newsWidgetConfiguration: any = this.getConfiguration();

        if (newsWidgetConfiguration.news) {
            this.greetings = newsWidgetConfiguration.news;
        } else {
            this.greetings = ['missing configuration'];
        }
    }

    public updateView(): void {
        super.emitUpdate(this.newsWidgetUpdate);
    }
}
