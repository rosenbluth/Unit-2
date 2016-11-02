var app = angular.module('myMovies',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
  .when('/', {
      templateUrl: 'partials/homePage.html',
      controller: 'movieApp'
  })
  .when('/movies', {
      templateUrl: 'partials/myShowMovies.html',
      controller: 'movieApp'
  });
});

app.controller('movieApp', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams){
    $scope.omdb = {};

    $scope.searchButtonClicked = function(whatUserTyped){
        console.log(whatUserTyped);
        $http.get('http://www.omdbapi.com/?s=' + whatUserTyped).then(function (dataReturnedFromOMDB) {
            $scope.omdb.movieData = dataReturnedFromOMDB.data.Search;

            console.log(dataReturnedFromOMDB);
        });
    };
    
}]);
