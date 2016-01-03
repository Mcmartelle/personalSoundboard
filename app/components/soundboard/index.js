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

  app.controller('BoardController', function() {
    this.phrases = testdb;
    this.user = testdb2;
    this.accents = responsiveVoice.getVoices();
  });


  var testdb = [{
    tab: 'Test Category',
    speaktext: 'hahahahah',
    accent: 'UK English Female',
  }, {
    tab: 'Test Category',
    speaktext: 'Yes Yes it is working!',
    accent: 'US English Female',
    options: {
      pitch: 0.1,
      rate: 1.5
    }
  }, {
    tab: 'Test Category',
    speaktext: 'I am so very Japanese. So Japanese.',
    accent: 'Japanese Female'
  }, {
    tab: 'Test Category',
    speaktext: 'Luna you are shit.',
    accent: 'UK English Female'
  }];
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
