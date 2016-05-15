/* 
 *	ctrlApp.js : This File acts the App's base controller.
 */
 'use strict';
 var app = angular.module('ShopCart');
 app.value('turnLoadMask', false);
 app.controller('ctrlApp', ['$scope', function($scope) {

    $scope.init = function() {
    	// App Base Controller Actions     	 	
    };

    $scope.init();

}]);