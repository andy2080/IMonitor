<?php
namespace Home\Model;
use Home\Controller\BaseController;
use Think\Exception;
use Think\Model;

/**
 * Server相关模型
 * Class ServersModel
 * @package Home\Model
 * @author  我才是二亮   <unstring@163.com>
 * @since   2016-04-09
 */
class ServersModel extends Model{

    /**
     * 获取server数据
     * @param int $page
     * @param int $limit
     * @return bool|mixed
     */
    public function get($page = 1, $limit = 10) {

        $start = ($page - 1) * $limit;
        $end = $start + $limit;
        $res = $this->limit($start, $end)->select();
        if (!$res) {
            return false;
        }
        return $res;
    }
}