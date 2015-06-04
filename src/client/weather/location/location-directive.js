angular.module('weather.location.directive',[
    'weather.service',
    'weather.location.template'
]).directive('weatherLocation',function(){
   return{
       restrict: 'E',
       templateUrl: 'weather/location',
       controller: WeatherLocationController,
       scope:{
           location: '=current'
       }
   };
});

function WeatherLocationController($scope, weather){
    weather.getForecast($scope.location.id)
        .then(function(forecast){
            $scope.forecast = forecast;
        });
}