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
  app.directive('header', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/core/header/index.html',
      // css: 'app/components/core/header/index.css',
      controller: 'headerController',
      controllerAs: 'headerCtrl'
    };
  });
  app.controller('headerController', function($scope, $css, $rootScope) {
    $css.bind({
      href: 'app/components/core/header/index.css'
    }, $scope);

    $scope.logoutTemp = function() {
      $rootScope.user = {};
    };
  });
});
