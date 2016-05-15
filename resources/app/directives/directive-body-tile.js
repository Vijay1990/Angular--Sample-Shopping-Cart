/* 
 *	directive-body-tile.js : This File create a Body tile Custom Directive.
 */
'use strict';
angular.module('ShopCart').
directive('bodyTile',['factoryTriggerRestApi','$rootScope','serLoadingMask',function(factoryTriggerRestApi,$rootScope,serLoadingMask){
	return{
		restrict: 'EA',				
		link: function(scope,element,attribute){
			scope.resultData = {};
			scope.totalProducts = 0;
			/** On REST API Sucess **/
            scope.sucessGetProducts = function(data) {
                console.log("Sucessfully fetched data ", data.data.productsInCart);  
                scope.resultData = data.data.productsInCart;  
                scope.totalProducts = scope.resultData.length;
                serLoadingMask.hideLoadMask();            
            };

            /** On REST API Failure **/
            scope.failureGetProducts = function(err) {
                serLoadingMask.hideLoadMask();
                console.log("Error while fetching data ", err);
            };

            /** This method Activation helps in calling the REST API network Data **/
            scope.getProducts = function() {
                //factoryTriggerRestApi.doGET('http://jsonp.afeld.me/?url=https://api.myjson.com/bins/19ynm', '', '', '', scope.sucessGetProducts, scope.failureGetProducts);
                factoryTriggerRestApi.doGET('resources/json/cart.json', '', '', '', scope.sucessGetProducts, scope.failureGetProducts);
                serLoadingMask.showLoadMask();
            };

            //uncommenting this method, needs commenting the scope.getStaticProducts() Method
            scope.getProducts();
            /** **** **** **** **** **** **/ 
            scope.$watch('resultData',function(newVal,oldVal){
				if(newVal!=oldVal){
					var subTotal = 0;
					var discount = 0;
					var percentage = 0;
					angular.forEach(newVal,function(key,val){
						var price = (key.p_originalprice != key.p_price) ?  key.p_price : key.p_originalprice;
						subTotal += (key.p_quantity*price);						
					});
					/*Discount Logic*/					
					if(scope.totalProducts===3){
						/*3 items in cart */
						percentage = 5;
						discount = ((subTotal/100)*percentage);

					} else if(scope.totalProducts>3 && scope.totalProducts<=6) {
						/*3 - 6 items in cart */
						percentage = 10;
						discount = ((subTotal/100)*percentage);

					} else if(scope.totalProducts>10){
						/*Above 10 items in cart */
						percentage = 25;
						discount = ((subTotal/100)*percentage);

					}
					$rootScope['subTotal'] = subTotal;
					$rootScope['discount'] = discount;
					$rootScope['percentage'] = percentage;
					$rootScope['totalProducts'] = scope.totalProducts;
				}		
			},true);
			scope.openModel = function(id){			
				scope.$parent.$broadcast('p_id', id);
			};
			$rootScope.$on('updateInfo',function(evt,msg){				
					console.log("Updated information:",msg);					
			});	
		},
		replace: true,			
		templateUrl: 'resources/app/partial_views/body-tile.html'
	}
}]);