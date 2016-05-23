<?php
namespace Home\Controller;

use Home\Model\UsersModel;

class UserController extends BaseController {

    /**
     * 用户登录接口
     */
    public function login() {
        $name = I('post.name');
        $pass = md5('monitor' . I('post.pass'));
        if (empty($name) || empty($pass)) {
            $result = array(
                'status' => -1,
                'message' => '账号与密码均不能为空',
            );
            $this->ajaxReturn($result);
        }

        // 判断用户名密码是否正确
        $usersModel = new UsersModel();
        $res = $usersModel->checkUser($name, $pass);
        switch($res) {
            case 1:
                $result = array(
                    'status' => 1,
                    'message' => '登录成功',
                    'data' => $_SESSION,
                );
                break;
            case -1:
                $result = array(
                    'status' => -1,
                    'message' => '用户名密码不能为空'
                );
                break;
            case -2:
                $result = array(
                    'status' => -2,
                    'message' => '用户名或密码错误',
                );
                break;
            default:
                $result = array(
                    'status' => -3,
                    'message' => '异常',
                );
                break;
        }
        $this->ajaxReturn($result);
    }

    /**
     * 添加用户
     */
    public function add() {

        if (!$this->isLogin() || !$this->isManager()) {
            $result = array(
                'status' => -1,
                'message' => '未登录或者不是管理员权限',
            );
            $this->ajaxReturn($result);
        }

        $name = I('post.name');
        $group = I('post.group');
        $pass = md5('monitor' . '123456');

        $usersModel = new UsersModel();
        $res = $usersModel->addUser($name, $pass, $group);
        switch($res) {
            case 1:
                $result = array(
                    'status' => 1,
                    'message' => '用户添加成功',
                );
                break;
            case -1:
                $result = array(
                    'status' => -1,
                    'message' => '用户名密码均不能为空',
                );
                break;
            case -2:
                $result = array(
                    'status' => -2,
                    'message' => '用户名已被注册',
                );
                break;
            case -3:
                $result = array(
                    'status' => -3,
                    'message' => '添加失败',
                );
                break;
            default:
                $result = array(
                    'status' => -4,
                    'message' => '系统异常',
                );
                break;
        }
        $this->ajaxReturn($result);
    }

    /**
     * 修改用户信息
     */
    public function edit() {

    }

    /**
     * 获取用户信息
     */
    public function get() {

    }
}