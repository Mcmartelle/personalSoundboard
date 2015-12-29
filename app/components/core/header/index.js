require.config({
    paths: {
        'navigation-service': 'app/shared/navigation-service'
    }
});
define([
    'app',
    'navigation-service'
], function(app) {
    app.directive('header', function(navigationService) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/core/header/index.html',
            // css: 'app/components/core/header/index.css',
            controller: 'headerController',
            controllerAs: 'headerCtrl'
        };
    });
    app.controller('headerController', function(navigationService, $scope, $css) {
        $css.bind({
            href: 'app/components/core/header/index.css'
        }, $scope);

        this.load = function(url) {
            navigationService.load(url);
        };
    });
});