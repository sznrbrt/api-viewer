'use strict';

var app = angular.module('apiviewApp');

app.controller('homeCtrl', function($scope) {
  console.log('homeCtrl');
})

app.controller('listCtrl', function($scope, Pokemons, $stateParams) {
  console.log('listCtrl');
  Pokemons.getList($stateParams.offset)
    .then((pokemons, a, b) =>{
      $scope.pokemons = pokemons.data.results.map((pokemon) => {
        return {name: capitalize(pokemon.name), id: createId(pokemon.url)}
      });
      var nextOffset = parseInt(pokemons.data.next.split('&')[1].split('=')[1]);
      $scope.nextOffset = nextOffset;
      $scope.previousOffset = nextOffset - 20;
      console.log($scope.previousOffset);
    });

  function capitalize(word){
    return word[0].toUpperCase() + word.slice(1);
  }

  function createId(url) {
    var params = url.split('/');
    return parseInt(params[params.length - 2]);
  }
})


app.controller('pokemonCtrl', function($scope, Pokemons, $stateParams) {
  console.log('pokemonCtrl');
  Pokemons.getById($stateParams.id)
    .then((pokemon) => {
      $scope.pokemon = pokemon.data;
      $scope.currentOffset = Math.floor($stateParams.id / 10) * 10;
      console.log($scope.pokemon);
    })
})
