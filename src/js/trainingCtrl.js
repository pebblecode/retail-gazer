(function () {
  'use strict';

  angular.module('app').controller('trainingCtrl', TrainingCtrl);

  function TrainingCtrl() {
    var vm = this;

    vm.message = 'training';



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
