(function () {
  'use strict';

  var app = angular.module('app', []);

  app.config(appConfig);
  app.run(appRun);

  /* @ngInject */
  function appConfig($logProvider, $compileProvider) {
    $logProvider.debugEnabled(false);
    // $compileProvider.debugInfoEnabled(false);
  }

  /* @ngInject */
  function appRun($interval, $log) {
    // webgazer.setGazeListener(function(data, elapsedTime) {
    //     if (data == null) {
    //         return;
    //     }
    //     var xprediction = data.x; //these x coordinates are relative to the viewport 
    //     var yprediction = data.y; //these y coordinates are relative to the viewport
    //     console.log(elapsedTime); //elapsed time is based on time since begin was called
    // }).begin();

    webgazer.begin();
    $interval(function() {
      var prediction = webgazer.getCurrentPrediction();
      if (prediction) {
        var x = prediction.x;
        var y = prediction.y;
        $log.info('XY:' + x + ' ' + y);
        $('.pebble-logo').css({
          left: x + 'px',
          top: y + 'px'
        });
      } else {
        $log.info('no pred');
      }
    }, 100);
  }
}());
