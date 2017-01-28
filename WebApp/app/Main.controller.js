'use strict';

angular
    .module('myApp')
    .controller('MainController', MainController);

MainController.$inject = [];

function MainController() {

    var main = this;

    main.mainOptions = {
        navigation: false,
        scrollingSpeed: 1000
    };

}

