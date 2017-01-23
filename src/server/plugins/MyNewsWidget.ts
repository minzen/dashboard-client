/**
 * MyNewsWidget
 *
 * API Website:
 * https://newsapi.org/
 *
 * API KEY:
 * 1262e2f6806440bb84135a7bdb2580f5
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

import Widget from '../widget/WidgetMetadata';
import * as Dashboard from '../widget/AbstractWidget';
import MyNewsWidgetUpdate from '../../common/MyNewsWidgetUpdate';
import * as RequestPromise from 'request-promise';

@Widget({
    author: 'Johannes Diemke <johannes.diemke@eventim.de>',
    designation: 'headlines',
    version: '0.0.1',
    updateInterval: 30000
})
class MyNewsWidget extends Dashboard.AbstractWidget {

    private static ONE_HOUR_IN_MS: number = 60 * 60 * 1000; // ms

    private model: MyNewsWidgetUpdate;
    private lastUpdate: Date = null;
    private response: any;
    private index: number = 0;

    public onUpdate(): void {
        if (this.lastUpdate == null || ((new Date().getTime() - this.lastUpdate.getTime()) > MyNewsWidget.ONE_HOUR_IN_MS)) {
            this.getNewsUpdate()
                .then((response) => {
                    console.log('Requesting News from REST API.');
                    this.response = response;
                    this.index = 0;
                    this.selectNews();
                    this.lastUpdate = new Date();
                });
        } else {
            this.selectNews();
        }
    }

    private selectNews(): void {
        console.log('Sending news with index ' + this.index + 'to socket.');

        let index: number = this.index;
        this.index = (this.index + 1) % this.response.articles.length;

        let content: string = this.response.articles[index].description;
        let imagePath: string = this.response.articles[index].urlToImage;
        let headline: string = this.response.articles[index].title;
        let author: string = this.response.articles[index].author;
        let publishedAt: string = this.response.articles[index].publishedAt;
        let url: string = this.response.articles[index].url;

        this.setModel(new MyNewsWidgetUpdate(headline, author, publishedAt, content, imagePath, url));
    }

    private setModel(model: MyNewsWidgetUpdate): void {
        this.model = model;
        super.emitUpdate(this.model);
    }

    public updateView(): void {
        super.emitUpdate(this.model);
    }

    private getNewsUpdate() {
        let config = this.getConfiguration();
        let options = {
            uri: 'https://newsapi.org/v1/articles',
            qs: {
                apiKey: config.apiKey,
                source: config.source,
                sortBy: config.sortBy
            },
            json: true
        };
        return RequestPromise(options);
    }

}
