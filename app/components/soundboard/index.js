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
    });

    app.controller('SoundController', function() {
        this.play = function(text) {
            responsiveVoice.speak(text.speaktext, text.accent); //, {pitch: 2});
        };

        this.stop = function() {
            responsiveVoice.cancel();
        };
    });

    app.controller('PhraseController', function() {
        this.phrase = {};

        this.addPhrase = function(phrases) {
            phrases.push(this.phrase);
            this.phrase = {};
        };
    });

    app.controller('AccentController', function() {
        this.accents = responsiveVoice.getVoices();
    });

    var testdb = [{
        tab: 'Test Category',
        speaktext: 'hahahahah',
        accent: 'UK English Female',
    }, {
        tab: 'Test Category',
        speaktext: 'Yes Yes it is working!',
        accent: 'US English Female'
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