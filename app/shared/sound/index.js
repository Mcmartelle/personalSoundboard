require.config({
  paths: {
    'responsive-voice': 'https://code.responsivevoice.org/responsivevoice',
  }
});

define([
  'app',
  'responsive-voice',
], function(app) {
  app.directive('sound', function() {
    return {
      restrict: 'E',
      controller: 'soundController',
      templateUrl: function(elem, attr) {
        var template = attr.type;

        if (template) {
          return 'app/shared/sound/index-' + template + '.html';
        } else {
          return 'app/shared/sound/index.html';
        }

      },
      link: function(scope, element, attr) {

        scope.livePhrase = {
          //default accent for responsiveVoiceJS
          accent: "UK English Female"
        };

        scope.addPhrase = function(phrase, sounds) {
          var maxPosition = 0;
          var idx;
          for (idx in sounds) {
            if (sounds[idx].position > maxPosition) {
              maxPosition = sounds[idx].position;
            }
          }
          phrase.position = maxPosition + 1;

          sounds.push(phrase);
          scope.livePhrase = {
            //default accent for responsiveVoiceJS
            accent: "UK English Female"
          };
          return sounds;
        };

        scope.removeSound = function(sound, sounds) {
          var index = sounds.indexOf(sound);
          sounds.splice(index, 1);
        };

        scope.play = function(text) {
          responsiveVoice.speak(text.speaktext, text.accent, text.options);
        };

        scope.pause = function() {
          responsiveVoice.pause();
        };

        scope.resume = function() {
          responsiveVoice.resume();
        };

        scope.stop = function() {
          responsiveVoice.cancel();
        };
      }
    };
  });
  app.controller('soundController', function($scope, $css) {
    $css.bind({
      href: 'app/shared/sound/index.css'
    }, $scope);
  });
});
