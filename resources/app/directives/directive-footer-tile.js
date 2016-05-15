/* 
 *	directive-footer-tile.js : This File create a Footer tile Custom Directive.
 */
'use strict';
angular.module('ShopCart').
directive('footerTile',function(){
	return{
		restrict: 'EA',		
		link: function(scope,element,attribute){					
		},
		replace: true,			
		templateUrl: 'resources/app/partial_views/footer-tile.html'
	}
});