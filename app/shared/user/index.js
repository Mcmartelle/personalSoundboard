define([
  'app'
], function(app) {
  app.directive('user', function($http, $location) {
    return {
      restrict: 'E',
      controller: 'userController',
      controllerAs: 'userCtrl',
      templateUrl: function(elem, attr) {
        var template = attr.type;

        if (template) {
          return 'app/shared/user/index-' + template + '.html';
        } else {
          return 'app/shared/user/index.html';
        }
      }
    };
  });
  app.controller('userController', function($scope, $css, $http, $rootScope) {
    $css.bind({
      href: 'app/shared/user/index.css'
    }, $scope);

    var changeLocation = function(url, forceReload) {
      $scope = $scope || angular.element(document).scope();
      if (forceReload || $scope.$$phase) {
        window.location = url;
      } else {
        //only use this if you want to replace the history stack
        //$location.path(url).replace();

        //this this if you want to change the URL and add it to the history stack
        $location.path(url);
        $scope.$apply();
      }
    };

    this.register = function(user) {
      console.log(user);
      $http({
        url: 'https://127.0.0.1:1337/register',
        method: "POST",
        data: user,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }).then(
        function successCallback(response) {
          console.log("success");
          console.log(response);

        },
        function errorCallback(response) {
          console.log("error");
          console.log(response);
        });
    };

    this.login = function(user) {
      console.log(user);

      $http({
        url: 'https://127.0.0.1:1337/api/users/' + user.email,
        method: "GET",
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }).then(
        function successCallback(response) {
          console.log("success");
          console.log(response.data)
          if (response.data) {
            $rootScope.user = response.data;
            console.log($rootScope.user);
            changeLocation('/#/soundboard');
          }
        },
        function errorCallback(response) {
          console.log("error");
          console.log(response);
        });
    };
  });
});
