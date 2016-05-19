export class HomeController {
    constructor($stateParams, $http) {
        $http({
            url: './json/login_success.json',
            data: {
                username: 'LiMing',
                password: 'FUCK_OFF'
            },
            method: 'GET'
        }).then(function (res) {

        }).catch(function (res) {

        })
    }
}
HomeController.$inject = ['$stateParams', '$http'];