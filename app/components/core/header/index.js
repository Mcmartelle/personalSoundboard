define(['app'], function(app) {
    app.directive('header', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/core/header/index.html'
        };
    });
});