import { MonitorController } from './controller/Monitor';
import { AlarmPolicyController } from './controller/AlarmPolicy';
import { AliveMonitorController } from './controller/AliveMonitor';
import { BaseMonitorController } from './controller/BaseMonitor';
import { CustomMonitorController } from './controller/CustomMonitor';
import { HistoryMonitorController } from './controller/HistoryMonitor';
import { LogMonitorController } from './controller/LogMonitor';
export default angular
    .module('IMonitor.Monitor', ['ui.bootstrap'])
    .controller('MonitorCtrl', MonitorController)
    .controller('AlarmPolicyCtrl', AlarmPolicyController)
    .controller('AliveMonitorCtrl', AliveMonitorController)
    .controller('BaseMonitorCtrl', BaseMonitorController)
    .controller('CustomMonitorCtrl', CustomMonitorController)
    .controller('HistoryMonitorCtrl', HistoryMonitorController)
    .controller('LogMonitorCtrl', LogMonitorController)