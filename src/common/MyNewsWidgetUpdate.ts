/**
 * NewsWidgetUpdate
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de
 * @since 0.0.1
 */

export default class MyNewsWidgetUpdate {

   public imagePath: string;
 public headline: string;
  public  content: string;

    constructor(headline: string, content: string, imagePath: string) {
        this.headline = headline;
        this.content = content;
        this.imagePath = imagePath;
    }



}
