'use strict';

angular.module('FELab-ng')

.controller('AngularCtrl', ['$scope', function ($scope) {

	$scope.items = [
		{name: 'SlideOut隐藏滑动侧边栏导航', itemId: 'nav1', url: 'tpl/nav/nav1/index.html'},
		{name: '导航2', itemId: 'nav2'},
		{name: '导航3', itemId: 'nav3'}
	];

	$scope.currentDemo = $scope.items[0];

	$scope.changeDemo = function(item) {
		$scope.currentDemo = item;
	}
}])

.controller('NavigationCtrl', ['$scope', function ($scope) {
}])
;