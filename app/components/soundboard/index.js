require.config({
    paths: {
        'header': 'app/components/core/header/index',
        'footer': 'app/components/core/footer/index',
        'navigation-service': 'app/shared/navigation-service',
        'responsive-voice': 'https://code.responsivevoice.org/responsivevoice'
    }
});

define(['app', 'header', 'footer', 'navigation-service', 'responsive-voice'], function(app) {
    app.controller('SoundboardController', function(navigationService) {
        this.load = function(url) {
            navigationService.load(url);
        };
    });

    app.controller('BoardController', function() {
        this.phrases = testdb;

        console.log(this.phrases);
    });

    app.controller('SoundController', function() {
        this.play = function(text) {
            responsiveVoice.speak(text.speaktext, text.accent);
        };

        this.stop = function() {
            responsiveVoice.cancel();
        };
    });

    app.controller('PhraseController', function() {
        this.phrase = {};

        this.addPhrase = function(phrases) {
            this.phrase.accent = this.phrase.accent.name;
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
    }];
});