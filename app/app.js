define([
    'angularAMD',
    'angular-route',
    'angular-animate',
    'angular-aria',
    'angular-material',
    'angular-css'
], function(angularAMD) {
    var app = angular.module("SoundboardApp", ['ngRoute', 'ngMaterial', 'door3.css']);

    app.directive('penis', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/core/header/index.html',
            css: 'app/components/core/header/index.css'
                // link: function(scope, element, attr) {
                //     scope.load = function(url) {
                //         navigationService.load(url);
                //     };
                // }
        };
    });

    app.config(function($routeProvider) {
        var compLoc = 'app/components/';
        var coreLoc = 'app/components/core/';
        var shareLoc = 'app/shared/';
        $routeProvider
            .when("/home", angularAMD.route({
                templateUrl: compLoc + 'home/index.html',
                controllerUrl: compLoc + 'home/index.js',
                controller: 'HomeController'
            }))
            .when("/soundboard", angularAMD.route({
                templateUrl: compLoc + 'soundboard/index.html',
                controllerUrl: compLoc + 'soundboard/index.js',
                controller: 'SoundboardController'
            }))
            .when("/create", angularAMD.route({
                templateUrl: compLoc + 'create/index.html',
                controllerUrl: compLoc + 'create/index.js',
                controller: 'CreateController'
            }))
            .otherwise({
                redirectTo: '/home'
            });
    });

    return angularAMD.bootstrap(app);
});