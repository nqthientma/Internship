'use strict';
angular.module('app.services', [])
.factory('Auth', function(){
    var user;
    return{
        setUser: function(aUser){
            user = aUser;
        },
        isLoggedin : function(){
         return(user)?  user : false;
        }
    }
});

