'use strict';

var myApp = angular.module('myApp', [
	'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
			templateUrl : '/main.html',
			controller  : 'MainCtrl'
		})
	.when('/thankyou', {
		templateUrl: '/thankyou.html',
		controller: 'MainCtrl'
	})
	.when('/help', {
		template: "<div>I'm afraid I can't help you.</div>",
		controller: 'MainCtrl'
	})
	.when('/home', {
		template:"<div>Click your heels three times.</div>"
	})
	
	.otherwise({redirectTo: '/'});
}])

.controller('MainCtrl', ['$scope', '$location', 'productService', function($scope, $location, productService) {
	$scope.products = productService;
	$scope.showNav = true;

	$scope.navToggle = function() {
		$scope.showNav = $scope.showNav === true ? $scope.showNav = false : $scope.showNav = true;
	}

	$scope.buyMe = function(product) {
		$scope.cartItem = product;
		$scope.shipping = true;
	}

	$scope.calcShipping = function(state) {
		switch (state) {
			case 'MN':
				$scope.shippingCost = 0;
				break;
			case 'NY':
			case 'CA':
			case 'MA':
				$scope.shippingCost = 7.50;
				break;
			case 'GA':
			case 'AL':
			case 'FL':
				$scope.shippingCost = 3.99;
				break;	
			default: 
				$scope.shippingCost = 5.99;	
		}
	}

	$scope.submitInfo = function(info) {
		$location.path('/thankyou');
	}

	$scope.testNav = function(page, nav) {

		switch (page) {
			case '/home':
				$scope.marketSelect = false;
				$scope.helpSelect = false;
				$scope.homeSelect = true;
				break;
			case '/help':
				$scope.marketSelect = false;
				$scope.helpSelect = true;
				$scope.homeSelect = false;
				break;
			case '/market':
				$scope.marketSelect = true;
				$scope.helpSelect = false;
				$scope.homeSelect = false;
				break;
			default:
				$scope.marketSelect = true;
				$scope.helpSelect = false;
				$scope.homeSelect = false;	
		}
		
		if (nav) $location.path(page);
	}

	$scope.testNav($location.path(), false);
	
}]);
