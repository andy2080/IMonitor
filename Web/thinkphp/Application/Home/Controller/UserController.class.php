<?php
namespace Home\Controller;

class UserController extends BaseController {

    /**
     * 用户登录接口
     */
    public function login() {
        $name = I('post.name');
        $pass = I('post.pass');

        if (empty($name) || empty($pass)) {
            $result = array(
                'status' => -1,
                'message' => '账号与密码均不能为空',
            );
            $this->ajaxReturn($result);
        }

        // 判断用户名密码是否正确
        $usersModel = new UsersModel();


    }

    /**
     * 添加用户
     */
    public function add() {

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