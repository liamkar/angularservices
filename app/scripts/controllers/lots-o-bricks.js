'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:LotsOBricksCtrl
 * @description
 * # LotsOBricksCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('LotsOBricksCtrl', ['brickWarehouse', function (brickWarehouse) {
    this.name = 'Lots O Bricks';


    this.data = brickWarehouse.getData();
    this.redBricks = this.data.redBricks;
    this.greenBricks = this.data.greenBricks;
    this.blueBricks = this.data.blueBricks;

  }]);
