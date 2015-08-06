'use strict';

angular.module('FELab-react').controller('ReactCtrl', ['$scope', function ($scope) {
	$scope.hello = function () {
		alert("文字");
	}
}]);