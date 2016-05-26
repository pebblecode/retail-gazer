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
    webgazer.showPredictionPoints(true);


    var viewHeight = $(window).height();
    var viewWidth = $(window).width();

    var images = {
      'top-left': 'img/clothing/shoes.jpg',
      'top-right': 'img/animals/cat.jpg',
      'bottom-left': 'img/food/bananas.jpg',
      'bottom-right': 'img/tech/apple_watch.jpg'
    };

    $log.info('viewHeight: ', viewHeight);
    $log.info('viewWidth: ', viewWidth);
    
    $('.focusdot').css({ top: 0, left: 0 });

    var batch = [];

    $interval(intervalCallback, 100);

    function intervalCallback() {
      if (batch.length === 10) {
        var meanX = _.meanBy(batch, function(item) { return item.x; });
        var meanY = _.meanBy(batch, function(item) { return item.y; });
        // $log.info('meanX, meanY: ' + meanX + ', ' + meanY);

        $('.focusdot').css({ top: meanY, left: meanX });

        var quadrant = getQuadrant(meanX, meanY);
        $log.info('quadrant: ', quadrant);

        $('.result-img').attr('src', images[quadrant]);

        batch = [];
      } else {
        var prediction = webgazer.getCurrentPrediction();

        if (prediction) {
          batch.push(prediction);
          // $log.info('x, y: ' + prediction.x + ', ' + prediction.y);
        } else {
          $log.info('no prediction');
        }
      }
    }


    // $('body').click(bodyClick);

    function bodyClick(event) {
      var meanX = event.clientX;
      var meanY = event.clientY;
      // $log.info('meanX, meanY: ' + meanX + ', ' + meanY);

      $('.focusdot').css({ top: meanY, left: meanX });

      var quadrant = getQuadrant(meanX, meanY);
      $log.info('quadrant: ', quadrant);

      $('.result-img').attr('src', images[quadrant]);
    }


    function getQuadrant(meanX, meanY) {
      var isTop = meanY < viewHeight / 2;
      var isLeft = meanX < viewWidth / 2;

      var quadrant = isTop ? 'top-' : 'bottom-';
      quadrant += isLeft ? 'left' : 'right';

      return quadrant;
    }
  }
}());
