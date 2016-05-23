<?php
namespace Home\Controller;

use Home\Model\ServersModel;

class ServerController extends BaseController{

    /**
     * 获取数据
     */
    public function get() {
//        if (!$this->isLogin()) {
//            $result = array(
//                'status' => -1,
//                'message' => '登录后查看',
//            );
//            $this->ajaxReturn($result);
//        }
        $page = !empty(I('get.page')) ? I('get.page') : 1;
        $limit = !empty(I('get.limit')) ? I('get.limit') : 10;

        $serversModel = new ServersModel();
        $res = $serversModel->get($page, $limit);
        if (!$res) {
            $result = array(
                'status' => -1,
                'message' => '获取数据失败',
            );
        } else {
            $result = array(
                'status' => -1,
                'message' => '获取数据成功',
                'data' => $res,
            );
        }
        $this->ajaxReturn($result);
    }
}