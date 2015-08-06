'use strict';

angular.module('FELab-css3').controller('Css3Ctrl', ['$scope', function ($scope) {

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
}]);