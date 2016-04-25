/**
 * Created by arlingan on 4/5/2016.
 */

var registrationCtrl = angular.module('visitorEnrolApp.controllers', []);
registrationCtrl.controller('AppRegistrationCtrl', ['$scope', '$location', '$state', '$cordovaCamera', 'UserService', function($scope, $location, $state, $cordovaCamera, userSvc) {

    $scope.visitor = {};
    $scope.registerVisitor = function() {
        if($scope.visitor.dov === undefined) {
            var currentDate = new Date();
            $scope.visitor.dov = currentDate;
        }

        userSvc.create($scope.visitor).then(function(response) {
            var res = response;
            $state.go('showBadge', { visitor: res});
            //$location.path("/showBadge");
        });
    }
	
	$scope.takePhoto = function() {
		var options = {
			quality: 75,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: true,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 300,
			targetHeight: 300,
			popoverOptions: CameraPopoverOptions,
			saveToPhotoAlbum: false
		};
		
		$cordovaCamera.getPicture(options).then(function (imageData) {
			$scope.imgURI = "data:image/jpeg;base64," + imageData;
		}, function(err) {
			// Error occured. Display message to user.
		});
	}
	
	$scope.choosePhoto = function() {
		var options = {
			quality: 75,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			allowEdit: true,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 300,
			targetHeight: 300,
			popoverOptions: CameraPopoverOptions,
			saveToPhotoAlbum: false
		}
		
		$cordovaCamera.getPicture(options).then(function (imageData) {
			$scope.imgURI = "data:image/jpeg;base64," + imageData;
		}, function(err) {
			// Error occured. Show a message to the user.
		});
	}
}]);
