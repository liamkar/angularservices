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
    let vm = this;
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

    //this.buy = function(color,size) {
    this.buy = function(size) {
      //console.log(color);
    	//item.quantity = ((item.quantity * 10) +1) /10;
      vm.data['redBricks'][size].quantity -=1;
      //item.quantity -=1;
    }


  }]);
