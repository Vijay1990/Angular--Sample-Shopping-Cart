/* 
 *	dirLoadingMask.js : Delgates the Filter and sort of the products.
 */
'use strict';
angular.module('ShopCart').
directive('dirLoadingMask', [function() {
    return {
        templateUrl: 'resources/app/partial_views/loadmask.html',
        replace: true
    }
}]);