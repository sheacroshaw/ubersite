'use strict';

var fieldApp = angular.module('fieldApp',['shoppinpal.mobile-menu'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when("/Main", {
                templateUrl: "skinny.html",
                controller: "MasterInputOne"
            })
            .when("/Review", {
                templateUrl: "templates/two.html",
                controller: "MasterInputOne"
            })
            .otherwise({
                redirectTo: "/skinny"
            });
    }]);


fieldApp.factory("widget_info",function(){
         //var widget_info = {data:{}}; 
         return {};
});

fieldApp.controller('MasterInputTwo', ['$scope','$http', 'widget_info', function ($scope, $http, widget_info) {

$scope.widget = widget_info.data;




}]);




fieldApp.controller('MasterInputOne', ['$scope','$http', 'widget_info', function ($scope, $http, widget_info) {
//fieldApp.controller('MasterInputOne', function($scope) {
$scope.widget = widget_info.data;

     
//$scope.deal = [];


    $scope.refresh_res = function() { 

            //$scope.widget = "10/12/13";
          getSelects();
          
    }



    function getSelects(){
      $http.get('https://ops.layne.com/get_pl.php')
        .success(function(data, status){


        widget_info.data = data;
        $scope.widget = data;
        

        console.log(data);
          
        }).error(function(data, status, headers, config) {
         console.log('error it be');console.log( status); console.log( config);

         $scope.divisions = [{"division":"Energy Services","cost_centers":{"1041":"Water Management Services 1041","1056":"Williamsport 1056","1086":"Energy Services Admin 1086","7156":"Vibration Technology 7156"}},{"division":"Geo","cost_centers":{"1018":"Geoconstruction Admin 1018","1040":"Ruther Glen 1040","1646":"Tecniwell - Mfg. 1646","1701":"Bencor 1701","8900":"Layne Costa Fortuna - Brazil 8900"}}];

         console.log($scope.divisions);
         
      });
    };

 }]);
 