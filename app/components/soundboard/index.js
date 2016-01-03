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

  app.controller('BoardController', function($scope, $http) {
    $scope.user = testdb2;
    this.accents = responsiveVoice.getVoices();
    $scope.newBoard = {};

    $scope.addBoard = function() {
      console.log($scope.user.boards);
      var maxPosition = 0;
      for (idx in $scope.user.boards) {
        if ($scope.user.boards[idx].position > maxPosition) {
          maxPosition = $scope.user.boards[idx].position;
        }
      }
      $scope.newBoard.position = maxPosition + 1;
      console.log($scope.newBoard);
      console.log($scope.user.boards);


      $http({
        url: 'https://127.0.0.1:1337/api/users/' + this.user.email + '/boards',
        method: "POST",
        withCredentials: true,
        data: $scope.newBoard,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }).then(
        function successCallback(response) {
          console.log("success");
          console.log(response);
          $scope.newBoard.sounds = [];
          testdb2.boards.push($scope.newBoard);
          $scope.newBoard = {};
        },
        function errorCallback(response) {
          console.log("error");
          console.log(response);
        });
    };

    $scope.saveBoards = function() {
      // update user in database 

    };

  });

});

var testdb2 = {
  email: "test@test.com",
  first_name: "test@test.com",
  password: "test@test.com",
  boards: [{
    title: "Cool Board",
    position: 1,
    sounds: [{
      position: 1,
      accent: 'UK English Female',
      speaktext: 'testing testing 1 2 5',
      options: {
        pitch: 1,
        rate: 1,
        volume: 1
      }
    }, {
      position: 2,
      accent: 'Japanese Female',
      speaktext: 'hello hello hello',
      options: {
        pitch: 1.5,
        rate: 1.5,
        volume: 1
      }
    }, {
      position: 3,
      accent: 'UK English Female',
      speaktext: 'testing testing 1 2 5',
      options: {
        pitch: 1,
        rate: 1,
        volume: 1
      }
    }, {
      position: 4,
      accent: 'Japanese Female',
      speaktext: 'hello hello hello',
      options: {
        pitch: 1.5,
        rate: 1.5,
        volume: 1
      }
    }, {
      position: 5,
      accent: 'UK English Female',
      speaktext: 'testing testing 1 2 5',
      options: {
        pitch: 1,
        rate: 1,
        volume: 1
      }
    }, {
      position: 6,
      accent: 'Japanese Female',
      speaktext: 'hello hello hello',
      options: {
        pitch: 1.5,
        rate: 1.5,
        volume: 1
      }
    }]
  }, {
    title: "Rad Board",
    position: 2,
    sounds: [{
      position: 1,
      accent: 'UK English Female',
      speaktext: 'muwahaha 1 2 5',
      options: {
        pitch: 1,
        rate: 1,
        volume: 1
      }
    }, {
      position: 2,
      accent: 'Japanese Female',
      speaktext: 'hello this is an accent',
      options: {
        pitch: 1.5,
        rate: 1.5,
        volume: 1
      }
    }]
  }]
};
