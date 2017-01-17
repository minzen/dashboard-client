import Dashboard from './Dashboard';

/**
 * Created by dbrandt on 16.01.2017.
 */
export default class DashboardRepository {

    private dashboards: {
        [name: string]: Dashboard;
    } = {};

    public addDashboard(name: string, dashboard: Dashboard): void {
        this.dashboards[name] = dashboard;
    }

    public findByName(name: string): Dashboard {
        return this.dashboards[name];
    };
}
