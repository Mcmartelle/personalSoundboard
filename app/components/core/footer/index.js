require.config({
    paths: {
        'navigation': 'app/shared/navigation/index',
        'draggable': 'app/shared/draggable'
    }
});
define([
    'app',
    'navigation',
    'draggable'
], function(app) {
    app.directive('footer', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/core/footer/index.html',
            controller: 'footerController',
            controllerAs: 'footerCtrl'
        };
    });
    app.controller('footerController', function($scope, $css) {
        $css.bind({
            href: 'app/components/core/footer/index.css'
        }, $scope);
    });
});