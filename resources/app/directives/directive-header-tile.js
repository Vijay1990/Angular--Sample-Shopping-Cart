/* 
 *	directive-header-tile.js : This File create a Header tile Custom Directive.
 */
'use strict';
angular.module('ShopCart').
directive('headerTile',function(){
	return{
		restrict: 'E',				
		link: function(scope,element,attribute){			
		},
		replace: true,			
		templateUrl: 'resources/app/partial_views/header-tile.html'
	}
});