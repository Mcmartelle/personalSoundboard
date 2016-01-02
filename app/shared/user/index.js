define(['app'], function(app) {
  app.directive('user', function($http) {
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

      },
      link: function(scope, element, attr) {

        scope.regist = {};
        scope.registered = false;

        // scope.register = function(user) {
        //   $http.post('https://127.0.0.1:1337/api/users', user).then(
        //     function successCallback(response) {
        //       console.log(response);
        //       scope.registered = true;
        //     },
        //     function errorCallback(response) {
        //       console.log(response);
        //     });
        //   scope.regist = {};
        // };


        scope.login = function(text) {

        };

        scope.logout = function() {
          responsiveVoice.pause();
        };

      }
    };
  });
  app.controller('userController', function($scope, $css, $http) {
    $css.bind({
      href: 'app/shared/user/index.css'
    }, $scope);

    this.test = function() {
      console.log("in test");
      $http({
        url: 'https://127.0.0.1:1337/api/data',
        method: "GET",
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
        url: 'https://127.0.0.1:1337/login',
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
  });
});
