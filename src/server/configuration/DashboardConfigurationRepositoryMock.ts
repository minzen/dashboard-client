/**
 * DashboardConfigRepositoryMock
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */
import DashboardConfiguration from './DashboardConfiguration';
import WidgetConfiguration from './WidgetConfiguration';
import DashboardConfigurationRepository from './DashboardConfigurationRepository';

export default class DashboardConfigurationRepositoryMock implements DashboardConfigurationRepository {

    public findByName(name: string): DashboardConfiguration {
        return this.getMockedDashboardConfig();
    }

    private getMockedDashboardConfig(): DashboardConfiguration {
        let newsWidgetConfig: WidgetConfiguration = new WidgetConfiguration();
        newsWidgetConfig.setType('news');
        newsWidgetConfig.setConfiguration({
            news: ['Good morning!',
                'Eat my shorts!',
                'Damn, I\'m good!']
        });

        let clockWidgetConfig: WidgetConfiguration = new WidgetConfiguration();
        clockWidgetConfig.setType('clock');
        clockWidgetConfig.setConfiguration({});

        let weatherWidgetConfig: WidgetConfiguration = new WidgetConfiguration();
        weatherWidgetConfig.setType('weather');
        weatherWidgetConfig.setConfiguration({
            appid: '815048e6bb5778bc52d19ee3cb768553',
            language: 'en',
            location: 'Bremen,DE'
        });

        let myNewsWidgetConfig: WidgetConfiguration = new WidgetConfiguration();
        myNewsWidgetConfig.setType('headlines');
        myNewsWidgetConfig.setConfiguration({
            apiKey: '1262e2f6806440bb84135a7bdb2580f5',
            source: 'google-news',
            sortBy: 'top',
        });

        let dashboardConfig: DashboardConfiguration = new DashboardConfiguration();
        dashboardConfig.setName('MyDashboard');
        dashboardConfig.addWidgetConfiguration(newsWidgetConfig);
        dashboardConfig.addWidgetConfiguration(clockWidgetConfig);
        dashboardConfig.addWidgetConfiguration(weatherWidgetConfig);
        dashboardConfig.addWidgetConfiguration(myNewsWidgetConfig);

        return dashboardConfig;
    }

}
