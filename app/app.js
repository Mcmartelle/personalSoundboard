define([
    'angularAMD',
    'angular-route',
], function(angularAMD) {
    var app = angular.module("SoundboardApp", ['ngRoute']);

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
            .otherwise({
                redirectTo: '/home'
            });
    });

    return angularAMD.bootstrap(app);
});