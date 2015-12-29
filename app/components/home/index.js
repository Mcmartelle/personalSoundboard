require.config({
    paths: {
        'header': 'app/components/core/header/index',
        'footer': 'app/components/core/footer/index',
        'navigation-service': 'app/shared/navigation-service'
    }
});

define(['app', 'header', 'footer', 'navigation-service'], function(app) {
    app.controller('HomeController', function(navigationService) {
        this.load = function(url) {
            navigationService.load(url);
        };
    });
});