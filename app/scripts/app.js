'use strict';
/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 * Main module of the application.
 */
angular
  .module('myAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])

  .constant('APP',{
    'API_URL' : 'http://7b3a6875.ngrok.io/JAXApiTestPersistence2'//'http://localhost/topping-api/index.php/'
  })

  .config(function ($routeProvider, $stateProvider) {
    $stateProvider
                .state('home', {
                    url: '/',
                    component: 'appUsers',
                    publicPage: true
                })
                .state('userEdit', {
                    url: '/users/edit/:id',
                    component: 'userEdit',
                    publicPage: true
                })
                .state('userAdd', {
                    url: '/users/add',
                    component: 'userAdd',
                    publicPage: true
                });
  });
