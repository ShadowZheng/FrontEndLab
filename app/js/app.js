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
	  .state('angular.nav', {
	  	url: '/nav',
	  	templateUrl: '../tpl/angular.nav.html',
	  	controller: 'NavigationCtrl'
	  })
	  // .state('angular.nav.item', {
	  // 	url: '/:itemId',
	  // 	views : {
	  // 		'item@angular' : {
			//   	templateUrl: function($stateParams) {
			//   		return '../tpl/angular.nav.' + $stateParams.itemId + '.html';
			//   	},
			//   	controller: 'NavigationCtrl'
	  // 		}
	  // 	}
	  // })
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

