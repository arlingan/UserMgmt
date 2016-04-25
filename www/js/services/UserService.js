/**
 * Created by arlingan on 3/24/2016.
 */

//angular.module('UserService', []).factory('User', ['$http', '$q', function($http, $q) {

var services = angular.module('visitorEnrolApp.services', []);
services.service('UserService', ['$http', '$q', function($http, $q) {
    return {
        // get all the users
        get : function() {
            //return $http.get('/api/users');
            var deferred = $q.defer();
            var url = server + '/api/users'; //'http://vmgmt.eastus.cloudapp.azure.com/api/users';
            //$http.get('/api/users')
            $http.get(url)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (msg) {
                    deferred.reject('error:' + msg);
                });
            return deferred.promise;
        },
        
        create : function(userData) {
            //return $http.post('/api/user', userData);
            var deferred = $q.defer();
            var url = server + '/api/user'; //'http://vmgmt.eastus.cloudapp.azure.com/api/user';
            //$http.post('/api/user', userData)
            $http.post(url, userData)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (msg) {
                    deferred.reject('error:' + msg);
                });
            return deferred.promise;
        },
        
        delete : function(id) {
            //return $http.delete('/api/users/' +id);
            var deferred = $q.defer();
            var url = server + '/api/users/' +id; //'http://vmgmt.eastus.cloudapp.azure.com/api/users/' +id;
            //$http.delete('/api/users/' +id)
            $http.delete(url)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (msg) {
                    deferred.reject('error:' +msg);
                });
            return deferred.promise;
        }
    }
}]);