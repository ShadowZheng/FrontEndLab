'use strict';

// Declare app level module which depends on views, and components
angular.module('app')

.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $stateProvider
	  .state('angular', {
	  	url: '/angular',
	  	templateUrl: '../tpl/angular.html',
	  	controller: 'AngularCtrl'
	  })
	  .state('angular.navigation', {
	  	url: '/navigation',
	  	templateUrl: '../tpl/angular.navigation.html',
	  	controller: 'NavigationCtrl'
	  })
	  .state('angular.navigation.item', {
	  	url: '/item',
	  	templateUrl: '..tpl/angular.navigation.item.html'
	  })
	  .state('react', {
	  	url: '/react',
	  	templateUrl: '../tpl/react.html',
	  	controller: 'ReactCtrl'
	  })
	  .state('css3', {
	  	url: '/css3',
	  	templateUrl: '../tpl/css3.html',
	  	controller: 'Css3Ctrl'
	  });
	$urlRouterProvider.when('', '/angular');
}]);

