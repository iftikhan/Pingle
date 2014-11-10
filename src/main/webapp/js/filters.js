'use strict';

/* Filters */

angular.module('ngdemo.filters', ['angucomplete']).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
