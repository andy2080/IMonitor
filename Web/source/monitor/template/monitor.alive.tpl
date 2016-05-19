<!--
    存活监控
    AliveMonitorVm
-->
<style>
    .component-panel {
        border-left: none;
        border-right: none;
        border-radius: 0;
        box-shadow: 0 0 4px 2px rgba(0,0,0,.1);
    }
    .component-panel > .panel-heading {
        background-color: #FFFFFF;
    }
    .component-panel > .panel-heading .iconfont {
        font-size: 12px;
    }
    .component-panel-table {
        border-bottom: 1px solid #ddd;
    }
    .component-panel-table > thead > tr > th, .component-panel-table > tbody > tr > td {
        text-align: center;
        vertical-align: middle;
    }
</style>
<div class="panel panel-default component-panel">
    <div class="panel-heading clearfix">
        存活监控
    </div>
    <div class="panel-body">
        <p>存活监控是测试主机是否存活。</p>
    </div>
    <table class="table table-hover component-panel-table">
        <thead>
        <tr>
            <th>名称</th>
            <th>别名</th>
            <th>采集周期</th>
            <th>监控策略(启用/禁用)</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr ng-repeat="data in AliveMonitorVm.table.data track by $index">
            <td>PING</td>
            <td>存活监控</td>
            <td>{{data.period}}</td>
            <td>{{data.policy}}</td>
            <td>
                <button class="btn btn-sm btn-default" ng-click="AliveMonitorVm.addPolicy(data.id)">增加策略</button>
            </td>
        </tr>
        </tbody>
    </table>
</div>