<?php
namespace Home\Model;
use Home\Controller\BaseController;
use Think\Exception;
use Think\Model;

/**
 * 用户相关模型
 * Class UsersModel
 * @package Home\Model
 * @author  我才是二亮   <unstring@163.com>
 * @since   2016-04-09
 */
class UsersModel extends Model {

    /**
     * 获取单个用户
     * @param array $where
     * @param string $field
     */
    public function getSingleUser($where = array(), $field = '*') {
        if (empty($where)) {
            return false;
        }
        try {
            $result = $this->where($where)->field($field)->find();
        } catch (Exception $e) {
            BaseController::log(__FILE__, __LINE__ - 2, DB_ERROR, $this->getDbError());
            return false;
        }
        if (!$result) {
            return false;
        }
        return $result;
    }

    /**
     * 更新用户信息
     * @param array $where
     * @param array $data
     */
    public function updateUser($where = array(), $data = array()) {

        if (empty($where) || empty($data)) {
            return false;
        }

        try {
            $result = $this->where($where)->data($data)->save();
        } catch (Exception $e) {
            BaseController::log(__FILE__, __LINE__ - 2, DB_ERROR, $this->getDbError());
            return false;
        }
        return $result;
    }

    /**
     * 获取用户列表
     * @param array $where 查询条件
     * @param string $fields 过滤条件
     * @param string $order 排序条件
     * @param int $page 页码
     * @param int $limit 每页数量
     */
    public function getUserList($where = array(), $fields = '*', $order = 'id DESC', $page = 1, $limit = 10) {

        if ($page < 0) {
            $page = 1;
        }
        $start = ($page - 1) * $limit;
        $end = $start + $limit;
        try {
            $result = $this->field($fields)->where($where)->order($order)->limit($start, $end)->select();
        } catch (Exception $e) {
            return false;
        }

        if (!$result) {
            BaseController::log(__FILE__, __LINE__ - 6, DB_INFO, $this->_sql());
            return false;
        }
        return $result;
    }

    /**
     * 获取用户数
     * @param array $where
     */
    public function getUserCount($where = array()) {

        if (empty($where)) {
            $where = 1;
        }
        try {
            $result = $this->where($where)->count("id");
        } catch (Exception $e) {
            BaseController::log(__FILE__, __LINE__ - 2, DB_ERROR, $this->getDbError());
            return false;
        }
        return $result;
    }

    /**
     * 新增一个用户
     * @param $data
     */
    public function addUser($data) {
        if (empty($data)) {
            return false;
        }

        try {
            $result = $this->add($data);
        } catch (Exception $e) {
            BaseController::log(__FILE__, __LINE__ - 2, DB_ERROR, $this->getDbError());
            return false;
        }

        if (!$result) {
            return false;
        }
        return $result;
    }
}