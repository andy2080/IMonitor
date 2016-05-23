<?php
namespace Home\Controller;
use Think\Controller;
class BaseController extends Controller {

    /**
     * 是否已经登录
     * @return bool
     */
    public function isLogin() {
        if (session('?name') && session('?id')) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 是否管理员
     * @return bool
     */
    public function isManager() {
        if (session('?id') && session('?name') && session('group') == 'manage') {
            return true;
        } else {
            return false;
        }
    }
}