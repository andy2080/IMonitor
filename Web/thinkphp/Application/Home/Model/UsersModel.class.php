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
     * 验证用户
     * @param string $name 用户名
     * @param string $pass 密码
     * @return bool
     */
    public function checkUser($name, $pass) {

        if (empty($name) || empty($pass)) {
            return -1;
        }
        $res = $this->where(array('name' => $name))->find();
        if ($res) {
            if ($res['pass'] === $pass) {
                session('id', $res['id']);
                session('name', $res['name']);
                session('group', $res['ugroup']);
                return 1;
            } else {
                return -2;
            }
        } else {
            return -2;
        }
    }

    /**
     * 添加用户
     * @param mixed|string $name
     * @param string $pass
     * @param string $group
     * @return bool
     */
    public function addUser($name, $pass, $group) {

        if (empty($name) || empty($pass) || empty($group)) {
            return -1;
        }
        $data = array(
            'name' => $name,
            'pass' => $pass,
            'ugroup' => $group,
            'status' => 1,
            'time' => time(),
        );
        $res = $this->where(array('name' => $name))->find();
        if ($res) { // 用户名已存在
            return -2;
        }
        $res = $this->data($data)->add();
        if ($res) {
            return 1;
        } else {
            return -3;
        }
    }
}