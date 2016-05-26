(function () {
  'use strict';

  angular.module('app').controller('trainingCtrl', TrainingCtrl);

  function TrainingCtrl($rootScope) {
    var vm = this;
    $rootScope.isTraining = true;    
    var div = $('#training-point')

    vm.message = 'training';

    setTimeout(function() {
      console.log("First");
      $('#training-point').css(
        { right: '10%' }
      );
      moveDiv();
    }, 3000);

    function moveDiv(){
      setTimeout(function() {
        console.log("Second");
        $('#training-point').css(
          { top: '90%' }
        );
        moveDiv2();
      }, 3000);
    }

    function moveDiv2(){
      setTimeout(function() {
        console.log("Third");
        $('#training-point').css(
          { left: '10%' }
        );
        moveDiv3();
      }, 3000);
    }

    function moveDiv3(){
      setTimeout(function() {
        console.log("Fourth");
        $('#training-point').css(
          { top: '50%', left: '50%' }
        );
        finishTraining();
      }, 3000);
    }

    function finishTraining() {
      setTimeout(function() {
        console.log("Finised Training");
        $rootScope.isTraining = true;      
      });
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
