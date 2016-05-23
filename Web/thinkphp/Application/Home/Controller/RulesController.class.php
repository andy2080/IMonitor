<?php
namespace Home\Controller;

use Home\Model\RulesModel;

class RulesController extends BaseController {

    /**
     * 添加策略
     */
    public function add() {

        $name = I('post.name');
        $threshold = I('post.threshold');
        $manager = I('post.manager');
        $frequency = I('post.frequency');
        $monitor = I('post.monitor');
        $host = I('post.host');

        if (empty($name) || empty($threshold) || empty($manager) || empty($frequency) || empty($monitor) || empty($host)) {
            $result = array(
                'status' => -1,
                'message' => '所有表单数据不能为空',
            );
            $this->ajaxReturn($result);
        }

        $rulesModel = new RulesModel();
        $res = $rulesModel->addRules($name, $threshold, $manager, $frequency, $monitor, $host);
        if (!$res) {
            $result = array(
                'status' => -1,
                'message' => '添加策略失败',
            );
        } else {
            $result = array(
                'status' => 1,
                'message' => '添加策略成功',
            );
        }
        $this->ajaxReturn($result);
    }

    /**
     * 获取策略
     */
    public function get() {

        $page = !empty(I('get.page')) ? I('get.page') : 1;
        $limit = !empty(I('get.limit')) ? I('get.limit') : 10;

        $rulesModel = new RulesModel();
        $res = $rulesModel->get($page, $limit);
        if (!$res) {
            $result = array(
                'status' => -1,
                'message' => '数据为空或者获取失败'
            );
        } else {
            $result = array(
                'status' => 1,
                'message' => '获取数据成功',
                'data' => $res
            );
        }
        $this->ajaxReturn($result);
    }

    /**
     * 编辑策略
     */
    public function edit() {
        $id = I('post.id');
        $name = I('post.name');
        $threshold = I('post.threshold');
        $manager = I('post.manager');
        $frequency = I('post.frequency');
        $monitor = I('post.monitor');
        $host = I('post.host');

        $where = array(
            '_id' => $id,
        );
        $rulesModel = new RulesModel();
        $res = $rulesModel->getByWhere($where);
        if (!$res) {
            $result = array(
                'status' => -1,
                'message' => '该策略不存在',
            );
            $this->ajaxReturn($result);
        }
        $data = array(
            'name' => $name,
            'threshold' => $threshold,
            'manager' => $manager,
            'frequency' => $frequency,
            'monitor' => $monitor,
            'host' => $host,
        );
        $res = $rulesModel->edit($where, $data);
        if (!$res) {
            $result = array(
                'status' => -1,
                'message' => '修改策略失败',
            );
        } else {
            $result = array(
                'status' => 1,
                'message' => '修改策略成功',
            );
        }
        $this->ajaxReturn($result);
    }

    /**
     * 删除策略
     */
    public function del() {

        $id = I('post.id');
        if (empty($id)) {
            $result = array(
                'status' => -1,
                'message' => 'id不能为空',
            );
            $this->ajaxReturn($result);
        }

        $rulesModel = new RulesModel();
        $res = $rulesModel->getByWhere(array('_id' => $id));
        if (!$res) {
            $result = array(
                'status' => -1,
                'message' => '该策略不存在',
            );
            $this->ajaxReturn($result);
        }

        $res = $rulesModel->del(array('_id' => $id));
        if (!$res) {
            $result = array(
                'status' => -1,
                'message' => '删除数据错误',
            );
        } else {
            $result = array(
                'status' => 1,
                'message' => '数据删除成功',
            );
        }
        $this->ajaxReturn($result);
    }
}