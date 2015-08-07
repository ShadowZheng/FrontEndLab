'use strict';

angular.module('FELab-ng')

.controller('AngularCtrl', ['$scope', function ($scope) {
	$scope.slected = 1;

	$scope.hello = function() {
		alert(1);
	}
}])

.controller('NavigationCtrl', ['$scope', '$element', function ($scope, $element) {
	$scope.items = [
		{name: '导航1'},
		{name: '导航2'},
		{name: '导航3'}
	];


	$element.find('.item-link').click(function() {
		alert($(this).val());
	});
}]);