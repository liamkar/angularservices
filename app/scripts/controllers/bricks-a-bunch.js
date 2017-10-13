'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:BricksABunchCtrl
 * @description
 * # BricksABunchCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('BricksABunchCtrl',['brickWarehouse', function (brickWarehouse) {
    this.name = 'Bricks A Bunch';

    //let vm = this;

    this.data = brickWarehouse.getData();
    this.redBricks = this.data.redBricks;
    this.blueBricks = this.data.blueBricks;
    this.greenBricks = this.data.greenBricks;

    /*
    this.redBricks = {
      '1x1': {
        quantity: 13,
        price: 0.01
      },
      '2x2': {
        quantity: 48,
        price: 0.03
      },
      '2x6': {
        quantity: 9,
        price: 0.05
      }
    };
    */
  }]);
