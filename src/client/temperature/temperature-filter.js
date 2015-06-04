angular.module('temperature.filter',[

]).filter('temperature',function(){
    return function(K){
        return '' + (((K-273.15)*1.8000 + 32)|0).toFixed() + '\u00b0';
    }
});