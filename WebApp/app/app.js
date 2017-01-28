'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'ngMaterial',
    'ngHamburger',
    'ui.bootstrap',
    'angularCSS',
    "fullPage.js"

]).constant("myConfig", {
})



    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {


    $routeProvider
        .when('/main' , {
            templateUrl : 'partials/main.html',
            css: 'sass/views/main.css'
        })


}]);

