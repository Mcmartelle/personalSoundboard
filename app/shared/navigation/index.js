define([
    'app'
], function(app) {
    app.directive('navigation', ['$location', '$compile', function($location, $compile) {
        return {
            restrict: 'A',
            template: function(element, attr) {
                element.attr('ng-click', "load('" + attr.navigation + "')");
                element.removeAttr('navigation');
                return element[0].outerHTML;
            },
            link: function(scope, element, attr) {
                scope.load = function(url) {
                    $location.path(url);
                };
            }
        };
    }]);
    app.controller('navigationController', function($scope, $css) {
        $css.bind({
            href: 'app/components/core/header/index.css'
        }, $scope);
    });
});