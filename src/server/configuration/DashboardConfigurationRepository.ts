/**
 * DashboardConfigurationRepository
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

import DashboardConfiguration from './DashboardConfiguration';

interface DashboardConfigurationRepository {
     findByName(name: string): DashboardConfiguration;
}

export default DashboardConfigurationRepository;
