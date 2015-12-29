define(['app'], function(app) {
	app.directive('sound', function() {
		return {
			restrict: 'E',
			templateUrl: function(elem, attr){
				var template = attr.type;

				if(template){
					return 'app/shared/sound/index-' + template + '.html';
				} else {
					return 'app/shared/sound/index.html';
				}

			},
			link: function(scope, element, attr) {

				scope.play = function(text){
						responsiveVoice.speak(text.speaktext,text.accent);
				};

				scope.pause = function(){
					responsiveVoice.pause();
				};

				scope.resume = function(){
					responsiveVoice.resume();
				};

				scope.stop = function(){
					responsiveVoice.cancel();
				};
			}
		};
	});
});