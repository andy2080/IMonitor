<?php
namespace Home\Model;
use Think\Model\MongoModel;

/**
 * 数据相关模型
 * Class MonitorModel
 * @package Home\Model
 * @author  我才是二亮   <unstring@163.com>
 * @since   2016-04-09
 */
class MonitorModel extends MongoModel {

    protected $connection = array(
        'db_type' => 'mongo',
        'db_user' => '',//用户名
        'db_pwd' => '',//密码
        'db_host' => 'localhost',//数据库地址
        'db_port' => '',//数据库端口 默认27017
        'db_charset' => 'utf8',
    );

    protected $dbName='monitor';
    protected $trueTableName = 'monitor_data';

    /**
     * 获取数据
     * @param $field
     * @param int $page
     * @param int $limit
     */
    public function get($page = 1, $limit = 100) {

        $start = ($page - 1) * $limit;
        $end = $start + $limit;
        $res = $this->limit($start, $end)->select();
        if (!$res) {
            return false;
        } else {
            return $res;
        }
    }

    /**
     * 通过条件获取数据
     * @param array $where
     * @param int $page
     * @param int $limit
     * @return bool|mixed
     */
    public function getByWhere($where = array(), $page = 1, $limit = 100) {
        $start = ($page - 1) * $limit;
        $end = $start + $limit;
        $res = $this->where($where)->limit($start, $end)->select();
        if (!$res) {
            return false;
        } else {
            return $res;
        }
    }
}