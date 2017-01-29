'use strict';

angular
    .module('myApp')
    .factory('mainService', mainService);

mainService.$inject = ['$http', '$q', 'myConfig'];

function mainService($http, $q, myConfig) {


}