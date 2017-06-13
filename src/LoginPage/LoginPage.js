/**
 * Created by nguyenthinhkhang on 02/06/2017.
 */
'use strict';

var app = angular.module("loginProcess",[]);
    app.controller('login', function ($scope, $location) {
    $scope.login = function(logindata){
        if (logindata.name === "Admin" && logindata.password === "admin"){
            $location.path('/home');
            $scope.error = "Success";
        }
        else{
            $scope.error = "Username or password is incorrect";
        }
    }
});
