(function () {
  'use strict';

  angular.module('app').controller('trainingCtrl', TrainingCtrl);

  function TrainingCtrl($rootScope) {

    var viewHeight = $(window).height();
    var viewWidth = $(window).width();


    var vm = this;
    $rootScope.isTraining = true;
    var div = $('#training-point')

    vm.message = 'training';

    setTimeout(function() {
      console.log("First");
      // simulateClick(100, 100);
      $('#training-point').css(
        { left: '', right: 100 }
      );
      moveDiv();
    }, 2000);

    function moveDiv(){
      setTimeout(function() {
        console.log("Second");
        // simulateClick((viewWidth - 100), 100);
        $('#training-point').css(
          { top: viewHeight - 100 }
        ); 
        moveDiv2();
      }, 2000);
    }

    function moveDiv2(){
      setTimeout(function() {
        console.log("Third");
        // simulateClick((viewWidth - 100), (viewHeight - 100));
        $('#training-point').css(
          { left: 100, right: '' }
        );
        moveDiv3();
      }, 2000);
    }

    function moveDiv3(){
      setTimeout(function() {
        console.log("Fourth");
        // simulateClick((viewWidth - 100), 100);
        $('#training-point').css(
          { top: '50%', left: '50%' }
        );
        finishTraining();
      }, 2000);
    }

    function finishTraining() {
      setTimeout(function() {
        // simulateClick((viewWidth/2), (viewHeight/2));
        console.log("Finised Training");
        $rootScope.isTraining = false;      
      }, 2000);
    }

    function clickDiv() {
      $('#training-div').click();
    }

    function eventFire(el, etype){
      if (el.fireEvent) {
        el.fireEvent('on' + etype);
      } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
      }
    }

    function simulateClick(x, y) {
        var clickEvent= document.createEvent('MouseEvents');
        clickEvent.initMouseEvent(
          'click', true, true, window, 0,
          0, 0, x, y, false, false,
          false, false, 0, null
        );
        document.elementFromPoint(x, y).dispatchEvent(clickEvent);
    }

    // $timeout(function() {
    //   div.css({
    //     "left": "500px"
    //   })
    // }, 10);

    // webgazer.begin();

    // $interval(function() {
    //   var prediction = webgazer.getCurrentPrediction();
    //   if (prediction) {
    //     var x = prediction.x;
    //     var y = prediction.y;
    //     $log.info('XY:' + x + ' ' + y);
    //   } else {
    //     $log.info('no pred');
    //   }
    // }, 100);
  }
}());
