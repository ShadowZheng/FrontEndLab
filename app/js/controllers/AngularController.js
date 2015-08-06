'use strict';

angular.module('FELab-ng').controller('AngularCtrl', ['$scope', function ($scope) {
	$scope.alert = function () {
		alert("图片");
	};
}])

.controller('NgNavigationCtrl', ['$scope', function ($scope) {
	$scope.items = [
		{name: '导航1'},
		{name: '导航2'},
		{name: '导航2'}
	];
}]);