'use strict';

/**
 * @ngdoc service
 * @name serviceQuizApp.brickWarehouse
 * @description
 * # brickWarehouse
 * Service in the serviceQuizApp.
 */
angular.module('serviceQuizApp')
  .service('brickWarehouse', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    /*
    this.redBricks = {
      '1x1': {
        quantity: 16,
        price: 0.01
      },
      '2x6': {
        quantity: 18,
        price: 0.05
      }
    };
    */



    this.getData = function() {

      /*
      this.redBricks = {
        '1x1': {
          quantity: 29,
          price: 0.01
        },
        '2x2': {
          quantity: 48,
          price: 0.03
        },
        '2x6': {
          quantity: 27,
          price: 0.05
        }
      };
      this.blueBricks = {
        '2x2': {
          quantity: 7,
          price: 0.02
        },
        '2x4': {
          quantity: 2,
          price: 0.04
        }
      };
      this.greenBricks = {
        '2x4': {
          quantity: 13,
          price: 0.04
        },
        '2x8': {
          quantity: 41,
          price: 0.08
        }
      };
      */

      this.data = {
        redBricks : {
          '1x1': {
            quantity: 29,
            price: 0.01
          },
          '2x2': {
            quantity: 48,
            price: 0.03
          },
          '2x6': {
            quantity: 27,
            price: 0.05
          }
        },
        blueBricks : {
          '2x2': {
            quantity: 7,
            price: 0.02
          },
          '2x4': {
            quantity: 2,
            price: 0.04
          }
        },
        greenBricks : {
          '2x4': {
            quantity: 13,
            price: 0.04
          },
          '2x8': {
            quantity: 41,
            price: 0.08
          }
        }



      }
      /*
      this.data.redBricks = this.redBricks;
      this.data.blueBricks = this.blueBricks;
      this.data.greenBricks = this.greenBricks;
      console.log(this.data);
      return this.data;
      */
      return this.data;
    };




  });
