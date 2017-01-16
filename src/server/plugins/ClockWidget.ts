/**
 * ClockWidget
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */
import Widget from '../widget/WidgetMetadata';
import * as Dashboard from '../widget/AbstractWidget';
import ClockWidgetUpdate from '../../common/ClockWidgetUpdate';

@Widget({
    author: 'Johannes Diemke <johannes.diemke@eventim.de>',
    designation: 'clock',
    version: '0.0.1',
    updateInterval: 1000
})
class ClockWidget extends Dashboard.AbstractWidget {

    public onUpdate(): void {
        this.updateView();
    }

    public updateView(): void {
        super.emitUpdate(new ClockWidgetUpdate(new Date()));
    }
}
