<!--
    报警策略
    AlarmPolicyVm
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
        报警策略
        <div class="pull-right">
            <button class="btn btn-sm btn-success" ng-click="AlarmPolicyVm.addAlarmPolicy()"><i class="iconfont icon-add"></i>添加报警策略</button>
        </div>
    </div>
    <div class="panel-body">
        <p>报警策略管理是防止集群中的服务器某个压力值过高或者过低而造成集群性能的降低，通过报警策略的设定，管理可以及时的察觉每个服务器的故障并进行及时修正，保证集群最有效的工作状态。管理员可以根据服务器的不同应用，通过报警策略的类型、极限参数和警告内容的设置，将报警策略赋予服务器，并产生报警日志。</p>
        <div class="row">
            <div class="col-md-4 form-inline">
                <div class="form-group">
                    <label for="_display_num">显示条数</label>
                    <select name="display_num" id="_display_num" class="form-control">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
            <div class="col-md-4 col-md-offset-4 form-inline">
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputName2" placeholder="请输入关键字">
                    <button class="btn btn-primary">搜索</button>
                </div>
            </div>
        </div>
    </div>
    <table class="table table-hover component-panel-table">
        <thead>
        <tr>
            <th>策略名称</th>
            <th>报警组</th>
            <th>监控项</th>
            <th>阈值比较方法</th>
            <th>报警条件</th>
            <th>最大报警次数</th>
            <th>状态</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr ng-repeat="data in AlarmPolicyVm.table.data track by $index">
            <td ng-bind="data.policyName"></td>
            <td ng-bind="data.alarmGroup"></td>
            <td ng-bind="data.monitorItem"></td>
            <td ng-bind="data.compare"></td>
            <td ng-bind="'持续'+data.during+'秒'"></td>
            <td ng-bind="data.maxAlarmTime"></td>
            <td>
                <button class="btn btn-sm btn-default" ng-click="AlarmPolicyVm.toggleApply(data.id)">{{data.isApply == '1' ? '启用' : '取消' }}</button>
            </td>
            <td>
                <button class="btn btn-sm btn-default" ng-click="AlarmPolicyVm.editAlarmPolicy(data.id)">编辑</button>
                <button class="btn btn-sm btn-default" ng-click="AlarmPolicyVm.deleteItem(data.id)">删除</button>
            </td>
        </tr>
        </tbody>
    </table>
    <div class="clearfix">
        <ul class="pagination pull-right">
            <li>
                <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li><a href="#">1</a></li>
            <li>
                <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </div>
</div>