'use strict';

var app = angular.module('apiviewApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl',
    })
    .state('list', {
      url:'/list/:offset',
      templateUrl: '/html/list.html',
      controller: 'listCtrl',
    })
    .state('pokemon', {
      url:'/pokemon/:id',
      templateUrl: '/html/pokemon.html',
      controller: 'pokemonCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
