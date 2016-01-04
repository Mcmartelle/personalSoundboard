require.config({
  paths: {
    'header': 'app/components/core/header/index',
    'footer': 'app/components/core/footer/index',
    'responsive-voice': 'https://code.responsivevoice.org/responsivevoice',
    'sound': 'app/shared/sound/index'
  }
});

define([
  'app',
  'header',
  'footer',
  'responsive-voice',
  'sound'
], function(app) {

  app.controller('SoundboardController', function($scope, $css) {
    $css.bind({
      href: 'app/components/soundboard/index.css'
    }, $scope);
  });

  app.controller('BoardController', function($scope, $http, $rootScope) {

    $scope.user = testdb2;
    if ($rootScope.user) {
      console.log("loading from root");
      $scope.user = $rootScope.user;
    }
    console.log($scope.user);
    console.log("once");

    this.accents = responsiveVoice.getVoices();
    $scope.newBoard = {};

    // $scope.fetchUser();

    $scope.addBoard = function() {
      console.log($scope.user.boards);
      var maxPosition = 0;
      for (idx in $scope.user.boards) {
        if ($scope.user.boards[idx].position > maxPosition) {
          maxPosition = $scope.user.boards[idx].position;
        }
      }
      $scope.newBoard.position = maxPosition + 1;
      $scope.newBoard.sounds = [];
      $scope.user.boards.push($scope.newBoard);
      $scope.newBoard = {};
      console.log($rootScope.user);

    };

    $scope.removeBoard = function(board) {
      var index = $scope.user.boards.indexOf(board);
      $scope.user.boards.splice(index, 1);
    };

    $scope.saveBoards = function() {

      $http({
        url: 'https://127.0.0.1:1337/api/users/' + $scope.user.email,
        method: "PUT",
        data: $scope.user,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }).then(
        function successCallback(response) {
          console.log("success");

        },
        function errorCallback(response) {
          console.log("error");
          console.log(response);
        });
    };

  });

});

var testdb2 = {
  email: "me@site.com",
  first_name: "Matt",
  password: "password",
  boards: [{
    title: "Welcome",
    position: 1,
    sounds: [{
      position: 1,
      accent: 'UK English Female',
      speaktext: 'Hello, and welcome to your own personal text to speech soundboard.',
      options: {
        pitch: 1,
        rate: 1,
        volume: 1
      }
    }, {
      position: 2,
      accent: 'UK English Female',
      speaktext: 'Powered by Responsive Voice JS and Angular Material',
      options: {
        pitch: 1,
        rate: 1,
        volume: 1
      }
    }, {
      position: 3,
      accent: 'UK English Female',
      speaktext: 'Add a button by filling in the form below.',
      options: {
        pitch: 1,
        rate: 1,
        volume: 1
      }
    }, {
      position: 4,
      accent: 'Japanese Female',
      speaktext: 'Change the accent',
      options: {
        pitch: 1,
        rate: 1,
        volume: 1
      }
    }, {
      position: 5,
      accent: 'UK English Female',
      speaktext: 'Adjust the pitch with convenient sliders.',
      options: {
        pitch: 1.5,
        rate: 1,
        volume: 1
      }
    }, {
      position: 6,
      accent: 'UK English Female',
      speaktext: 'have fun with the rate',
      options: {
        pitch: 1,
        rate: 0.3,
        volume: 1
      }
    }, {
      position: 7,
      accent: 'UK English Female',
      speaktext: 'also control the volume',
      options: {
        pitch: 1,
        rate: 1,
        volume: 0.1
      }
    }, {
      position: 8,
      accent: 'UK English Female',
      speaktext: 'You can add new boards as well!',
      options: {
        pitch: 1,
        rate: 1,
        volume: 1
      }
    }]
  }]
};
