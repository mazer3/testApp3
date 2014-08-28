'use strict';

/**
 * @ngdoc overview
 * @name testApp3App
 * @description
 * # testApp3App
 *
 * Main module of the application.
 */
angular
  .module('testApp3', []);
var PhoneGapInit = function () {
  this.boot = function () {
    angular.bootstrap(document, ['testApp3']);
  };

  if (window.phonegap !== undefined) {
    document.addEventListener('deviceready', function() {
      this.boot();
    });
  } else {
    console.log('PhoneGap not found, booting Angular manually');
    this.boot();
  }
};

angular.element(document).ready(function() {
  new PhoneGapInit();
});
angular
  .module('testApp3', [
  'ionic'
]);