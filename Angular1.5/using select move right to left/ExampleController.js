(function(angular) {
  'use strict';
angular.module('ngvalueSelect', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.data = {
     model: null,
     model2:null,
     availableOptions: [
          {value: 'IND', name: 'India'},
          {value: 'PAK', name: 'Pakistan'},
          {value: 'UK', name: 'England'}
     ],
     availableOptions2: [
          {value: 'USA', name: 'America'},
         
     ]
    };
    $scope.movebackselct=function(model){
      angular.forEach(this.data.availableOptions2,function(d2){
        if(d2.value==model)
         {
          $scope.data.availableOptions2.splice($scope.data.availableOptions.indexOf(d2),1);
          $scope.data.availableOptions.push(d2) ;
          console.log($scope.data.availableOptions);
         }
      });
     
    }
    $scope.movetoselct2=function(model){
   
      angular.forEach(this.data.availableOptions,function(d){
      
         if(d.value==model)
         {
          $scope.data.availableOptions.splice($scope.data.availableOptions.indexOf(d),1);
          $scope.data.availableOptions2.push(d)  
         }
      })
     
    }
 }]);
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
