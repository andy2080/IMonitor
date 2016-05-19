<div class="modal-header">
  <button type="button" class="close"  ng-click="EditUserWindowVm.cancel()"><span aria-hidden="true">&times;</span></button>
  <h4 class="modal-title" id="exampleModalLabel">添加新用户</h4>
</div>
<div class="modal-body">
  <form class="form-horizontal">
    <div class="form-group">
      <label for="input1" class="col-sm-2 control-label">
        <span class="text-danger">*</span>登录名:
      </label>
      <div class="col-sm-10">
        <input type="text" id="input1" class="form-control">
      </div>
    </div>
    <div class="form-group">
      <label for="input2" class="col-sm-2 control-label">
        中文名:
      </label>
      <div class="col-sm-10">
        <input type="text" id="input2" class="form-control">
      </div>
    </div>
    <div class="form-group">
      <label for="input3" class="col-sm-2 control-label">
        <span class="text-danger">*</span>邮箱:
      </label>
      <div class="col-sm-10">
        <input type="text" id="input3" class="form-control">
      </div>
    </div>
    <div class="form-group">
      <label for="input4" class="col-sm-2 control-label">
        <span class="text-danger">*</span>手机号:
      </label>
      <div class="col-sm-10">
        <input type="text" id="input4" class="form-control">
      </div>
    </div>
  </form>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-default" ng-click="EditUserWindowVm.cancel()">关闭</button>
  <button type="button" class="btn btn-primary" ng-click="EditUserWindowVm.ok()">确定</button>
</div>