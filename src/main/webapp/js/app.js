'use strict';

// Declare app level module which depends on filters, and services
angular.module('ngdemo',
        ['ngdemo.filters', 'ngdemo.services', '$strap.directives', 'ngdemo.directives',
            'ngdemo.controllers', 'infiniteScroll', 'infinite-scroll', 'checklist-model', 'ngRoute',  'angucomplete', 'ngAutocomplete'
    ]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.when('/view3', {templateUrl: 'partials/partial3.html', controller: 'MyCtrl2'});
        $routeProvider.when('/watches', {templateUrl: 'partials/watches.html', controller: 'watchesCtrl'});
        $routeProvider.when('/laptopes', {templateUrl: 'partials/laptop.html', controller: 'laptopesCtrl'});
        $routeProvider.when('/tves', {templateUrl: 'partials/television.html', controller: 'tvesCtrl'});
        $routeProvider.when('/cameraes', {templateUrl: 'partials/camera.html', controller: 'cameraesCtrl'});
        $routeProvider.when('/mentshirtes', {templateUrl: 'partials/mentshirt.html', controller: 'mentshirtesCtrl'});
        $routeProvider.when('/menshoeses', {templateUrl: 'partials/menshoeses.html', controller: 'menshoesesCtrl'});
        $routeProvider.when('/womenclothing', {templateUrl: 'partials/womenclothing.html', controller: 'WomenCtrl'});
        $routeProvider.when('/Menclothing', {templateUrl: 'partials/Menclothing.html', controller: 'MenCtrl'});
        $routeProvider.when('/electronics', {templateUrl: 'partials/electronics.html', controller: 'ElectronicsCtrl'});
        $routeProvider.when('/mobiles', {templateUrl: 'partials/mobiles.html', controller: 'MobilesCtrl'});
        $routeProvider.when('/Watchs', {templateUrl: 'partials/Watchs.html', controller: 'WatchsCtrl'});

        $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: 'UserCtrl'});
        $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'UserCtrl'});
        $routeProvider.when('/forgetpwd', {templateUrl: 'partials/forgetpwd.html', controller: 'UserCtrl'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);


