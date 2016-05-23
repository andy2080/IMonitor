<?php
namespace Home\Model;
use Think\Model\MongoModel;

/**
 * 策略相关模型
 * Class UsersModel
 * @package Home\Model
 * @author  我才是二亮   <unstring@163.com>
 * @since   2016-04-09
 */
class RulesModel extends MongoModel {

    protected $connection = array(
        'db_type' => 'mongo',
        'db_user' => '',//用户名
        'db_pwd' => '',//密码
        'db_host' => 'localhost',//数据库地址
        'db_port' => '',//数据库端口 默认27017
        'db_charset' => 'utf8',
    );

    protected $dbName='monitor';
    protected $trueTableName = 'rules';


    /**
     * 添加规则
     * @param $name
     * @param $threshold
     * @param $manager
     * @param $frequency
     * @param $monitor
     * @param $host
     * @return bool|mixed
     */
    public function addRules($name, $threshold, $manager, $frequency, $monitor, $host) {

        $data = array(
            'name' => $name,
            'threshold' => $threshold,
            'manager' => $manager,
            'frequency' => $frequency,
            'monitor' => $monitor,
            'host' => $host,
        );

        $res = $this->data($data)->add();
        if (!$res) {
            return false;
        }
        return $res;
    }

    /**
     * 获取数据
     * @param int $page
     * @param int $limit
     * @return bool|mixed
     */
    public function get($page = 1, $limit = 10) {

        $start = ($page - 1) * $limit;
        $end = $start + 10;

        $res = $this->limit($start, $end)->select();
        if (!$res) {
            return false;
        }
        return $res;
    }

    /**
     * 根据where条件获取数据
     * @param array $where
     */
    public function getByWhere($where = array()) {
        if (empty($where)) {
            return false;
        }

        $res = $this->where($where)->select();
        if (!$res) {
            return false;
        }
        return $res;
    }

    /**
     * 更新数据
     * @param array $where
     * @param array $data
     */
    public function edit($where = array(), $data = array()) {

        if (empty($where) || empty($data)) {
            return false;
        }
        $res = $this->where($where)->data($data)->save();
        if (!$res) {
            return false;
        } else {
            return $res;
        }
    }

    /**
     * 删除数据
     * @param array $where
     */
    public function del($where = array()) {

        if (empty($where)) {
            return false;
        }

        $res = $this->where($where)->delete();
        if (!$res) {
            return false;
        } else {
            return $res;
        }
    }
}