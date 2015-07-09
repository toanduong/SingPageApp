var app = angular.module('myApp', [
  'ngResource',
  'ui.router',
  'LocalStorageModule'
]);

/**
* Config routing pages when navigate to page
*/
app.config(function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $provide) {
    //the feature is helpful about lazy loading controller function when load page
    app.lazy = {
        controller: $controllerProvider.register,
        directive: $compileProvider.directive,
        factory: $provide.factory
    };
    $urlRouterProvider.otherwise('/index');
    $stateProvider.
        state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: function () {
                        return '../views/home.html';
                    },
                    controller: 'homeController'
                },
                'header@index': {
                    templateUrl: function () {
                        return '../views/header.html';
                    },
                    controller: 'headerController'
                }
            }
        })

    ;
});


//handle routing, use to handle action before redirect url
app.run(function ($rootScope, $state, localStorageService) {
    
});