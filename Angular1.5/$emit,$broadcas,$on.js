$emit()
Dispatches an event name upwards through the scope hierarchy notifying the registered $rootScope.Scope listeners.

$broadcast(name, args);
Dispatches an event name downwards to all child scopes (and their children) notifying the registered $rootScope.Scope listeners

$on(name, listener);
Listens on events of a given type like $broadcast, $emit

$destroy
Broadcasted when a scope and its children are being destroyed.

Example:
<body  ng-controller="Parent">
    <h3>Parent Controller</h3>
    <div>
    <p>Emitted message : {{emitedmessage}}</p>
    <input type="text" ng-model="message" placeholder="Text to Broadcast"/>
    <button ng-click="clickevent()">Broadcast</button>
    </div>
    
    <div ng-controller="Child">
      <h3>Child controller</h3>
      <p>Broadcast message : {{broadcastmessage}}</p>
       <input type="text" ng-model="message" placeholder="Text to Emit"/>
    <button ng-click="clickevent()">Emit</button>
    </div>
  </body>
  
  var app = angular.module('plunker', []);

app.controller('Parent', function($scope) {
  $scope.message="";
   $scope.emitedmessage="";
  $scope.clickevent=function(){
    $scope.$broadcast('transfer',{message:$scope.message});
  }
    $scope.$on('transferUp',function(event,data){
    //console.log('on working');
     $scope.emitedmessage=data.message;
  });
});

app.controller('Child',function($scope){
  $scope.message="";
   $scope.broadcastmessage=""
  $scope.$on('transfer',function(event,data){
     $scope.broadcastmessage=data.message;
  });
  $scope.clickevent=function(){
    $scope.$emit('transferUp',{message:$scope.message});
  }
});
