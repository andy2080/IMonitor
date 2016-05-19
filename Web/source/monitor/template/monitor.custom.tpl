<!--
    自定义监控
    CustomMonitorVm
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
        自定义监控
        <div class="pull-right">
            <button class="btn btn-sm btn-success" ng-click="CustomMonitorVm.addCustomMonitor()"><i class="iconfont icon-add"></i>添加自定义监控</button>
        </div>
    </div>
    <div class="panel-body">
        <p>介绍文字.</p>
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
            <th>监控项名称</th>
            <th>脚本执行全路径</th>
            <th>脚本运行账号</th>
            <th>脚本运行周期</th>
            <th>监控项状态</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr ng-repeat="data in CustomMonitorVm.table.data track by $index">
            <td>{{data.name}}</td>
            <td>{{data.shell_path}}</td>
            <td>{{data.account}}</td>
            <td>{{data.period}}秒</td>
            <td>
                <button class="btn btn-sm btn-default" ng-click="CustomMonitorVm.toggleApply(data.id)">{{data.status == '1' ? '启用' : '取消' }}</button>
            </td>
            <td>
                <button class="btn btn-sm btn-default" ng-click="CustomMonitorVm.editMonitor(data.id)">编辑</button>
                <button class="btn btn-sm btn-default" ng-click="CustomMonitorVm.deleteMonitor(data.id)">删除</button>
                <button class="btn btn-sm btn-default" ng-click="CustomMonitorVm.downloadShell(data.id)">下载脚本</button>
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