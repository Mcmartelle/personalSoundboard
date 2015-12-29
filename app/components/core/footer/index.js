define(['app'], function(app) {
    app.directive('footer', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/core/footer/index.html',
        };
    });
});