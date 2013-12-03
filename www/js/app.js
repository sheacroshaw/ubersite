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
 
$scope.Employees_added = [];
        $scope.Employees = [];
        $scope.Jobs = [];
     
//$scope.deal = [];

$scope.save_deal = function() { 

console.log($scope.Employees_added);

    $http.get('https://ops.layne.com/get_pl3.php', $scope.Employees_added).then(function(result){
    console.log('this is from the success', result);
   
  },function(result){
  console.log('this is from the ERR ', result);
  });
    //console.log($scope.Employees_added)


}



    $scope.refresh_res = function() { 

            //$scope.widget = "10/12/13";
          getSelects();
          
    }

$scope.Employees_added = [];



    $scope.move_emp = function(name, emp_id) { 
        //$scope.Employees.splice(index,1)
            
        console.log($scope.Employees[emp_id], $scope.Employees);

        $scope.Employees_added.push({emp_id: emp_id, name: name});
        //$scope.Employees.delete($scope.Employees[emp_id], 1);
        delete $scope.Employees[emp_id];


    }


    function getSelects(){
      $http.get('https://ops.layne.com/get_pl.php')
        .success(function(data, status){


        //$scope.selected

        widget_info.data = data;
        $scope.widget = data;
        $scope.Employees = $scope.widget.Emp;
        $scope.Jobs = $scope.widget.Jobs;
        //console.log($scope.widget.Emp);        
        console.log($scope.Employees);        

        $scope.selectedJob = $scope.Jobs[0];
        console.log($scope.Employees[0]);
        //console.log($scope.selectedJobs);
        
          
        }).error(function(data, status, headers, config) {
         console.log('error it be');console.log( status); console.log( config);

         $scope.divisions = {"Jobs":["24356","26776","27598","26987","22906","19465","16269"],"Emp":{"2900643":"James Gilchrist","1477361":"Chris Harding","389642":"Phillip Trip","33139682":"Lawrence Sherman","26912171":"Hugo Amezquita","20561420":"Mario Cartagena","165198":"George Gervais","21741191":"Jorge Hernandez"}};

         console.log($scope.divisions);
         
      });


    };

 }]);
 