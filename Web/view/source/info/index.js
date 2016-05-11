import { InfoController } from './controller/Info';
import { AuthorityInfoController } from './controller/AuthorityInfo';
import { ServerInfoController } from './controller/ServerInfo';
import { UsersInfoController } from './controller/UsersInfo';
import { AvgOfOneMinuteLoadController } from './controller/AvgOfOneMinuteLoadChart';
import { IMonitorChartDirective } from './directive/IMonitorChart';
import { NumOfRunningProcessController } from './controller/NumOfRunningProcessChart';
import { NumOfBlockProcessController } from './controller/NumOfBlockProcessChart';
import { MemoryUsageRateController } from './controller/MemoryUsageRateChart';
import { CpuUsageRateController } from './controller/CpuUsageRateChart';
import { EthernetFlowController } from './controller/EthernetFlowChart';
import { DistSpaceController } from './controller/DistSpaceChart';
import { DiskIOController } from './controller/DiskIOChart';

export default angular
    .module('IMonitor.Info', ['ui.bootstrap'])
    .controller('InfoCtrl', InfoController)
    .controller('AuthorityInfoCtrl', AuthorityInfoController)
    .controller('ServerInfoCtrl', ServerInfoController)
    .controller('UsersInfoCtrl', UsersInfoController)
    // Directive Of charts
    .directive('iMonitorChart', () => new IMonitorChartDirective())
    // 服务器信息
    .controller('AvgOfOneMinuteLoadCtrl', AvgOfOneMinuteLoadController)
    .controller('NumOfRunningProcessCtrl', NumOfRunningProcessController)
    .controller('NumOfBlockProcessCtrl', NumOfBlockProcessController)
    .controller('MemoryUsageRateCtrl', MemoryUsageRateController)
    .controller('CpuUsageRateCtrl', CpuUsageRateController)
    .controller('EthernetFlowCtrl', EthernetFlowController)
    .controller('DistSpaceCtrl', DistSpaceController)
    .controller('DiskIOCtrl', DiskIOController)