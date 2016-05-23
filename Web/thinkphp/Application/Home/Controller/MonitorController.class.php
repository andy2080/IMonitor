<?php
namespace Home\Controller;

use Home\Model\MonitorModel;

class MonitorController extends BaseController {

    /**
     * 无条件获取数据
     */
    public function get() {

        $page = !empty(I('get.page')) ? I('get.page') : 1;
        $limit = !empty(I('get.limit')) ? I('get.limit') : 100;

        $monitorModel = new MonitorModel();
        $res = $monitorModel->get($page, $limit);
        if (!$res) {
            $result = array(
                'status' => -1,
                'message' => '获取数据失败或者数据为空',
            );
            $this->ajaxReturn($result);
        }
        $data = array();
        foreach($res as $key => $value) {
            $data[$value['host'] . ':' . $value['type']][] = array($value['time'], $value['value']);
        }
        $result = array(
            'status' => 1,
            'message' => '获取数据成功',
            'data' => $data
        );
        $this->ajaxReturn($result);
    }

    /**
     * 根据where语句获取数据
     */
    public function getByWhere() {


        $page = !empty(I('get.page')) ? I('get.page') : 1;
        $limit = !empty(I('get.limit')) ? I('get.limit') : 10;

        $type = I('get.type');
        $host = I('get.host');
        $where = array();
        if (!empty($type)) {
            $where['type'] = $type;
        }

        if (!empty($host)) {
            $where['host'] = $host;
        }
        $monitorModel = new MonitorModel();
        $res = $monitorModel->getByWhere($where, $page, $limit);
        if (!$res) {
            $result = array(
                'status' => -1,
                'message' => '获取数据失败',
            );
        } else {
            $data = array();
            foreach($res as $key => $value) {
                $data[$value['host'] . ':' . $value['type']][] = array($value['time'], $value['value']);
            }
            $result = array(
                'status' => 1,
                'message' => '获取数据成功',
                'data' => $data,
            );
        }
        $this->ajaxReturn($result);
    }
}