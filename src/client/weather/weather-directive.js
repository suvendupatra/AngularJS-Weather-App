angular.module('weather.directive',[
    'ngRoute',
    'weather.validation.directive',
    'weather.service',
    'weather.location.directive',
    'weather.template'
])
.config(function($routeProvider){
        $routeProvider.when('/',{
            templateUrl:'weather',
            controller:WeatherController
        });
    });

// WeatherController to handle Weather info
function WeatherController($scope,weather){
    $scope.searches = [];
    $scope.location = '';
    $scope.search = function(){

        //console.log("Weather for " + $scope.location);
        weather.query($scope.location)
            .then(function(currentWeather){
               $scope.searches.push(currentWeather);
            });

    };
}

/***
 $http({
        method: 'GET',
        params: {
          q: $scope.location
        },
        url: 'http://api.openweathermap.org/data/2.5/weather'
      }).then(function(response){
        $scope.searches.push(response.data);
      });
 ***/
/***
$http({
  method: 'GET',
  params: {
    q: $scope.location
  },
  url: 'http://api.openweathermap.org/data/2.5/weather'
}).then(function(response){
  $scope.searches.push({
    query: $scope.location,
    response: response
  });
});

***/
