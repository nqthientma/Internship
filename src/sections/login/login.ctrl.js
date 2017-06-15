/**
 * Created by nguyenthinhkhang on 15/06/2017.
 */
/**
 * Created by nguyenthinhkhang on 02/06/2017.
 */
'use strict';

var app = angular.module('app.core');
app.controller('LoginController', function ($scope, $location, Auth) {
    $scope.login = function(logindata){
        if (logindata.name === "Admin" && logindata.password === "admin"){
            $location.path('/home');
            $scope.error = "Success";
            Auth.setUser(logindata);
        }
        else {
            $scope.error = "Something wrong in your Username or Password"
        }
    }
});
