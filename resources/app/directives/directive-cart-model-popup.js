'use strict';
angular.module('ShopCart').
directive('cartModelPopup',function(){
	return{
		restrict: 'EA',			
		link: function(scope,element,attribute,ctrlApp){	
			scope.modelDatas = [];
			scope.updateInfo = {};
			scope.updateDetails = function(){
				//console.log(scope.updateInfo);
				scope.closePopup();
				scope.$parent.$emit('updateInfo', scope.updateInfo);
			};
			 scope.getData = function(datas,id){
			 	var popupInfo = {};
			 	angular.forEach(datas, function(value, key){
			 		if(value.p_id == id){
			 			popupInfo['p_id'] = value.p_id;
			 			popupInfo['p_name'] = value.p_name;
			 			popupInfo['p_originalprice'] = value.p_originalprice;
			 			popupInfo['p_price'] = value.p_price;
			 			popupInfo['p_available_options'] = value.p_available_options;			 					 			
			 			popupInfo['p_selected_size'] = value.p_selected_size;			 					 			
			 			popupInfo['p_quantity'] = value.p_quantity;			 					 			
			 		};
			 	});
			 	scope.modelDatas = popupInfo;			 	
			 	angular.element('.product-link-container').css('display','none');
			 	angular.element('.product-link-container').css('display','block');
			 	console.log(scope.modelDatas);
			 };
			 scope.closePopup = function(){			 	
           		angular.element('.product-link-container').css('display','none');
			 };
			 /*Listener foe Edit Link*/
			 scope.$on('p_id', function(evt, msg) {
			 	scope.p_id = msg;
			 	scope.getData(scope.resultData,scope.p_id);
			 });
		},
		replace: true,			
		templateUrl: 'resources/app/partial_views/cart-model-popup.html'
	}
});