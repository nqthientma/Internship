'use strict';
angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'angularMoment',
    'angular-preload-image',
    'truncate',
    'app.routes',
    'app.core',
    'app.services',
    'app.config'
])


    .run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
        $rootScope.$on('$routeChangeStart', function (event) {
                if (!Auth.isLoggedin()) {
                    console.log('DENY');
                    $rootScope.$evalAsync(function() {
                        $location.path('/login');
                        //event.preventDefault();
                    })
                }
                else {
                    console.log('ALLOW');
                }
        });
    }])

    .controller('mainCtrl', ['$scope', 'Auth', '$location', function ($scope, Auth, $location) {
        $scope.Auth = Auth;
    $scope.$watch(Auth.isLoggedIn, function (value, oldValue) {

        if (!value && oldValue) {
            console.log("Disconnect");
            $location.path('/login');
        }

        if (value) {
            console.log("Connect");
            //Do something when the user is connected
        }

    }, true)
}]);