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
    updateInterval: 5000
})
class MyNewsWidget extends Dashboard.AbstractWidget {

    private model: MyNewsWidgetUpdate;

    public onUpdate(): MyNewsWidgetUpdate {

        this.getWeatherWidgetUpdate()
            .then((response) => {
                console.log("source: " + response.source);
                console.log("source: " + JSON.stringify(response.articles));

                let index: number = Math.floor(Math.random() * response.articles.length);

                let content: string = response.articles[index].description;
                let imagePath: string = response.articles[index].urlToImage;
                let headline: string = response.articles[index].title;

                this.model = new MyNewsWidgetUpdate(headline, content, imagePath);
            });
        return this.model;
    }

    private getWeatherWidgetUpdate() {
        // let config = this.getConfiguration();
        let options = {
            uri: 'https://newsapi.org/v1/articles',
            qs: {
                apiKey: '1262e2f6806440bb84135a7bdb2580f5',
                source: 'techcrunch'
            },
            json: true // Automatically parses the JSON string in the response
        };
        return RequestPromise(options);
    }

}
