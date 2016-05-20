<div class="modal-header">
  <button type="button" class="close"  ng-click="AddAlarmPolicyWindowVm.cancel()"><span aria-hidden="true">&times;</span></button>
  <h4 class="modal-title" id="exampleModalLabel">添加报警策略</h4>
</div>
<div class="modal-body">
  <form class="form-horizontal">
    <div class="form-group">
      <label for="input1" class="col-sm-2 control-label">
        <span class="text-danger">*</span>监控类型:
      </label>
      <div class="col-sm-10">
        <select name="monitor_name" id="input1" class="form-control">
          <option value="常用监控项">常用监控项</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label for="input2" class="col-sm-2 control-label">
        <span class="text-danger">*</span>监控项:
      </label>
      <div class="col-sm-10">
        <select name="monitor_item" id="input2" class="form-control">
          <option value="一分钟平均负载">一分钟平均负载</option>
          <option value="物理内存使用率">物理内存使用率</option>
          <option value="运行进程数">运行进程数</option>
          <option value="阻塞进程数">阻塞进程数</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label for="input3" class="col-sm-2 control-label">
        <span class="text-danger">*</span>策略名称:
      </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="input3">
      </div>
    </div>
    <div class="form-group">
      <label for="input4" class="col-sm-2 control-label">
        <span class="text-danger">*</span>报警组:
      </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="input4">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">
        <span class="text-danger">*</span>报警条件:
      </label>
      <div class="col-sm-10">
        当您选择监控项值持续
        <input type="text" class="form-control" style="width: 50px; display: inline-block;">秒
        <select name="condition" id="" class="form-control" style="width: 50px; display: inline-block;">
          <option value="1">&gt;</option>
          <option value="0">=</option>
          <option value="-1">&lt;</option>
        </select>
        <input type="text" class="form-control" style="width: 50px; display: inline-block;">
        就发出报警
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">例子:</label>
      <div class="col-sm-10" style="height: 34px; line-height: 34px;">
        当您选择监控项值持续60秒大于80MB就发出报警.
      </div>
    </div>
  </form>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-default" ng-click="AddAlarmPolicyWindowVm.cancel()">关闭</button>
  <button type="button" class="btn btn-primary" ng-click="AddAlarmPolicyWindowVm.ok()">确定</button>
</div>