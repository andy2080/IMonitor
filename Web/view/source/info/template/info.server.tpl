<!--
    view controller: ServerInfoVm
-->
<style>
    .server-info {
        display: table;
        width: 100%;
        border-radius: 10px;
        background-color: #FFFFFF;
        box-sizing: border-box;
    }
    .server-info > div {
        display: table-cell;
        padding: 15px;
        vertical-align: middle;
    }
    .server-info > div:first-child {
        width: 10%;
        border-right: 1px solid #eee;
    }
</style>
<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title">服务器信息</h3>
    </div>
    <div class="panel-body">
        <ul>
            <li>机器外网主机名:</li>
            <li>机器内网主机名:</li>
            <li>机器内网IP:</li>
            <li>机器类型:</li>
            <li>品牌:</li>
            <li>型号:</li>
            <li>操作系统:</li>
            <li>创建时间:</li>
            <li>修改时间:</li>
            <li>状态:</li>
        </ul>
    </div>
</div>

<uib-accordion close-others="false">

    <uib-accordion-group is-open="status.openA" class="panel-info">
        <uib-accordion-heading>
            负载/系统进程/内存<i class="iconfont" ng-class="{'icon-moreunfold': status.openA, 'icon-more': !status.openA}"></i>
        </uib-accordion-heading>
        <div class="row">
            <div class="col-md-6" ng-controller="AvgOfOneMinuteLoadCtrl as AvgOfOneMinuteLoadVm">
                <div i-monitor-chart option="AvgOfOneMinuteLoadVm.option" is-updated="AvgOfOneMinuteLoadVm.isUpdated"></div>
            </div>
            <div class="col-md-6" ng-controller="NumOfRunningProcessCtrl as NumOfRunningProcessVm">
                <div i-monitor-chart option="NumOfRunningProcessVm.option" is-updated="NumOfRunningProcessVm.isUpdated"></div>
            </div>
            <div class="col-md-6" ng-controller="MemoryUsageRateCtrl as MemoryUsageRateVm">
                <div i-monitor-chart option="MemoryUsageRateVm.option" is-updated="MemoryUsageRateVm.isUpdated"></div>
            </div>
            <div class="col-md-6" ng-controller="NumOfBlockProcessCtrl as NumOfBlockProcessVm">
                <div i-monitor-chart option="NumOfBlockProcessVm.option" is-updated="NumOfBlockProcessVm.isUpdated"></div>
            </div>
        </div>
    </uib-accordion-group>

    <uib-accordion-group is-open="status.openB" class="panel-info">
        <uib-accordion-heading>
            CPU<i class="iconfont" ng-class="{'icon-moreunfold': status.openB, 'icon-more': !status.openB}"></i>
        </uib-accordion-heading>
        <div class="row">
            <div class="col-md-6" ng-controller="CpuUsageRateCtrl as CpuUsageRateVm">
                <div i-monitor-chart option="CpuUsageRateVm.option" is-updated="CpuUsageRateVm.isUpdated"></div>
            </div>
        </div>
    </uib-accordion-group>

    <uib-accordion-group is-open="status.openC" class="panel-info">
        <uib-accordion-heading>
            网卡流量<i class="iconfont" ng-class="{'icon-moreunfold': status.openC, 'icon-more': !status.openC}"></i>
        </uib-accordion-heading>
        <div class="row">
            <div class="col-md-12" ng-controller="EthernetFlowCtrl as EthernetFlowVm">
                <div i-monitor-chart option="EthernetFlowVm.option" is-updated="EthernetFlowVm.isUpdated" chart-width="1000px" chart-height="600px"></div>
            </div>
        </div>
    </uib-accordion-group>

    <uib-accordion-group is-open="status.openD" class="panel-info">
        <uib-accordion-heading>
            磁盘空间<i class="iconfont" ng-class="{'icon-moreunfold': status.openD, 'icon-more': !status.openD}"></i>
        </uib-accordion-heading>
        <div class="row">
            <div class="col-md-12" ng-controller="DistSpaceCtrl as DistSpaceVm">
                <div i-monitor-chart option="DistSpaceVm.option" is-updated="DistSpaceVm.isUpdated"></div>
            </div>
        </div>
    </uib-accordion-group>

    <uib-accordion-group is-open="status.openE" class="panel-info">
        <uib-accordion-heading>
            磁盘IO<i class="iconfont" ng-class="{'icon-moreunfold': status.openE, 'icon-more': !status.openE}"></i>
        </uib-accordion-heading>
        <div class="row">
            <div class="col-md-12" ng-controller="DiskIOCtrl as DiskIOVm">
                <div i-monitor-chart option="DiskIOVm.option" is-updated="DiskIOVm.isUpdated" chart-width="1000px" chart-height="600px"></div>
            </div>
        </div>
    </uib-accordion-group>

</uib-accordion>