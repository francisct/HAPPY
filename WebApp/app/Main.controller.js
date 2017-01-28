'use strict';

angular
    .module('myApp')
    .controller('MainController', MainController);

MainController.$inject = [];

function MainController() {

    var main = this;

    main.mainOptions = {
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 1000
    };

}

