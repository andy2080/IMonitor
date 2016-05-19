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
import { DiskSpaceController } from './controller/DiskSpaceChart';
import { DiskIOController } from './controller/DiskIOChart';
import { DrawCpuUsageRateChartFactory } from './service/DrawCpuUsageRateChartFactory';
import { DrawAvgOfOneMinuteChartFactory } from './service/DrawAvgOfOneMinuteChartFactory';
import { DrawNumOfRunningProcessChartFactory } from './service/DrawNumOfRunningProcessChartFactory';
import { DrawNumOfBlockProcessChartFactory } from './service/DrawNumOfBlockProcessChartFactory';
import { DrawMemoryUsageRateChartFactory } from './service/DrawMemoryUsageRateChartFactory';
import { DrawEthernetFlowChartFactory } from './service/DrawEthernetFlowChartFactory';
import { DrawDiskSpaceChartFactory } from './service/DrawDiskSpaceChartFactory';
import { DrawDiskIOChartFactory } from './service/DrawDiskIOChartFactory';
import { AddServerUserFactory } from './service/AddServerUserFactory';
import { GetUsersListFactory } from './service/GetUsersListFactory';
import { EditServerUserFactory } from './service/EditServerUserFactory';

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
  .controller('DistSpaceCtrl', DiskSpaceController)
  .controller('DiskIOCtrl', DiskIOController)
  .factory('drawCpuUsageRateChart', DrawCpuUsageRateChartFactory)
  .factory('drawAvgOfOneMinuteChart', DrawAvgOfOneMinuteChartFactory)
  .factory('drawNumOfRunningProcessChart', DrawNumOfRunningProcessChartFactory)
  .factory('drawNumOfBlockProcessChart', DrawNumOfBlockProcessChartFactory)
  .factory('drawMemoryUsageRateChart', DrawMemoryUsageRateChartFactory)
  .factory('drawEthernetFlowChart', DrawEthernetFlowChartFactory)
  .factory('drawDiskSpaceChart', DrawDiskSpaceChartFactory)
  .factory('drawDiskIOChart', DrawDiskIOChartFactory)
  .factory('addServerUser', AddServerUserFactory)
  .factory('editServerUser', EditServerUserFactory)
  .factory('getUsersList', GetUsersListFactory)