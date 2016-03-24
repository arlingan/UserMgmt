/**
 * Created by arlingan on 3/24/2016.
 */

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider
    .when('/', {
        templateUrl: 'views/Login.html',
        controller: 'LoginController'
    })
    .when('/users', {
        templateUrl: 'views/register.html',
        controller: 'RegistrationController'
    });

$locationProvider.html5Mode(true);

}]);
