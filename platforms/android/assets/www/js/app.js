'use strict';

var fieldApp = angular.module('fieldApp',['shoppinpal.mobile-menu'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when("/skinny", {
                templateUrl: "skinny.html",
                controller: "MasterInputOne"
            })
            .when("/wide", {
                templateUrl: "templates/two.html",
                controller: "MasterInputOne"
            })
            .otherwise({
                redirectTo: "/skinny"
            });
    }]);


fieldApp.factory("widget_info",function(){
        return {};
});






fieldApp.controller('MasterInputOne', ['$scope','$http', function ($scope, widget_info, $http) {
//fieldApp.controller('MasterInputOne', function($scope) {
$scope.widget = widget_info;
     
$scope.deal = [];


        $scope.add = function() {
                $scope.widget = $scope.widget;
        
                console.log($scope.widget);
        }

    $scope.refresh_res = function() { 

            $scope.widget = { date: "10/12/13", shift: "day" }
           $scope.add();
           console.log($scope.widget);
    }



    function getSelects(){
      $http.get('https://ops.layne.com/get_pl.php')
        .success(function(data, status){


        $scope.widget = { date: "10/12/13", shift: "day" }

            //console.log(result);

          
        }).error(function(data, status, headers, config) {
         console.log('error it be');console.log( status); console.log( config);



         $scope.divisions = [{"division":"Energy Services","cost_centers":{"1041":"Water Management Services 1041","1056":"Williamsport 1056","1086":"Energy Services Admin 1086","7156":"Vibration Technology 7156"}},{"division":"Geo","cost_centers":{"1018":"Geoconstruction Admin 1018","1040":"Ruther Glen 1040","1646":"Tecniwell - Mfg. 1646","1701":"Bencor 1701","8900":"Layne Costa Fortuna - Brazil 8900"}}];

         console.log($scope.divisions);
         
      });
    };

 }]);
 