define([
    'angularAMD',
    'angular-route',
], function(angularAMD) {
    var app = angular.module("CardsApp", ['ngRoute']);

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
            // .when("/pictures", angularAMD.route({
            //     templateUrl: 'views/pictures.html',
            //     controllerUrl: 'controller/pictures_ctrl',
            // }))
            .otherwise({
                redirectTo: '/home'
            });
    });

    return angularAMD.bootstrap(app);
});