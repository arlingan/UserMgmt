/**
 * Created by arlingan on 3/24/2016.
 */

angular.module('UserService', []).factory('User', ['$http', function($http) {
    
    return {
        // get all the users
        get : function() {
            return $http.get('/api/users');
        },
        
        create : function(userData) {
            return $http.post('/api/users', userData);
        },
        
        delete : function(id) {
            return $http.delete('/api/users/' +id);
        }
    }
}]);