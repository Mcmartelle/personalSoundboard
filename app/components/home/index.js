require.config({
  paths: {
    'header': 'app/components/core/header/index',
    'footer': 'app/components/core/footer/index',
    'user': 'app/shared/user/index'
  }
});

define(['app', 'header', 'footer', 'user'], function(app) {
  app.controller('HomeController', function() {

  });
});
