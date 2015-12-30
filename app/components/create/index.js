require.config({
    paths: {
        'header': 'app/components/core/header/index',
        'footer': 'app/components/core/footer/index'
    }
});

define([
    'app',
    'header',
    'footer'
], function(app) {
    app.controller('CreateController', function($scope, $css) {
        $css.bind({
            href: 'app/components/create/index.css'
        }, $scope);

        this.colors = [];

        this.getRandomColor = function() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };
        for (var i = 0; i < 3; i++) {
            this.colors.push(this.getRandomColor());
        }
    });
});