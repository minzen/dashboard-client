/**
 * NewsWidgetUpdate
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de
 * @since 0.0.1
 */

export default class MyNewsWidgetUpdate {

    public imagePath: string;
    public headline: string;
    public content: string;
    public author: string;
    public publishedAt: string;
    public url: string;

    constructor(headline: string, author: string, publishedAt: string, content: string, imagePath: string, url: string) {
        this.headline = headline;
        this.author = author;
        this.publishedAt = publishedAt;
        this.content = content;
        this.imagePath = imagePath;
        this.url = url;
    }

}
