/**
 * Created by arlingan on 4/6/2016.
 */

var showBadgeCtrl = angular.module('visitorEnrolApp.controllers');
showBadgeCtrl.controller('AppShowBadgeCtrl', ['$scope', '$stateParams', 'UserService', function($scope, $stateParams, userSvc) {
    console.log($stateParams);
    $scope.visitor = $stateParams.visitor;
    $scope.fullName = $scope.visitor.firstName + ' ' + $scope.visitor.lastName;

    var dateTime = $scope.visitor.dov;
    var splitDate = dateTime.split('-');
    var formatDate = dateTime[1] + '/' + dateTime[0] + '/' + dateTime[2];
    $scope.convertedTime =  new Date(formatDate).getTime();
    console.log($scope.convertedTime);
    $scope.cDate = new Date(dateTime);

    console.log($scope.cDate);
}]);