'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	  .when('/view1', {
	  	templateUrl: '../tpl/view1.html',
	  	controller: 'View1Ctrl'
	  })
	  .when('/view2', {
	  	templateUrl: '../tpl/view2.html',
	  	controller: 'View2Ctrl'
	  })
	  .when('/box', {
	  	templateUrl: '../tpl/box.html',
	  	controller: 'BoxCtrl'
	  })
	  .when('/form', {
	  	templateUrl: '../tpl/form.html',
	  	controller: 'FormCtrl'
	  })
	  .otherwise({ redirectTo: '/view1' })
}])

.controller('View1Ctrl', ['$scope', function ($scope) {
	$scope.alert = function () {
		alert("图片");
	};
}])

.controller('View2Ctrl', ['$scope', function ($scope) {
	$scope.hello = function () {
		alert("文字");
	}
}])

.controller('BoxCtrl', ['$scope', function ($scope) {

	var e = $('#redBox');
	$scope.w = e.width();
	$scope.h = e.height();

	$scope.click = function() {
		$scope.w = parseInt($scope.w) + 10;
		$scope.h = parseInt($scope.h) + 10;
	};

	$scope.$watch('w', function(to, from) {
		e.width(to);
	});

	$scope.$watch('h', function(to, from) {
		e.height(to);
	});
}])

.controller('FormCtrl', ['$scope', function ($scope) {
	$scope.o = [0,1,2,3];
	$scope.a = $scope.o[0];

	$scope.show = function () {
		alert('下拉框改变了');
	}
}])

