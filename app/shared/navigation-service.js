define([
    'app'
], function(app) {
    console.log('navigation loaded');
    app.service('navigationService', function($location) {
        console.log('navigation loaded');
        this.load = function(url) {
            console.log('trying to navigate', url, $location);
            $location.path(url);
        };
    });
});