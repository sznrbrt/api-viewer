'use strict';

var app = angular.module('apiviewApp');

app.service('Pokemons', function($q, $http) {

  this.getList = function(offset) {
    return $http.get('http://pokeapi.co/api/v2/pokemon/?limit=10&offset=' + offset);
  }

  this.getById = function(id) {
    return $http.get(`http://pokeapi.co/api/v2/pokemon/${id}/`);
  }

})
