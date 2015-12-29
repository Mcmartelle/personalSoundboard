require.config({
    baseUrl: ".",
    paths: {
        'app': 'app/app',
        'angular': 'bower_components/angular/angular.min',
        'angular-route': 'bower_components/angular-route/angular-route.min',
        'angularAMD': 'bower_components/angularAMD/angularAMD.min',
        'angular-css': 'bower_components/angular-css/angular-css.min',
    },
    shim: {
        'angularAMD ': ['angular'],
        'angular-route': ['angular']
    },
    deps: ['app']
});