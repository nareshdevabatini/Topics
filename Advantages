AngularJs 2 Advantages:

Get Rid of ‘$digest already in progress when calling $scope.$apply()’ Exception: 
In Angularjs 1.x, there are multiple times, developer get the exception ‘’ $digest already in progress when calling $scope.$apply()’. 
The  reason is, Angular 1.x  did not support digest cycle finished event,  because such event might trigger further events 
as well as changes which can trigger an infinite loop for  the current digest cycle. Developer used to make very distinctive reasoning 
in order to decide when to call $scope.apply or $scope.digest, which was not always very simple .Moreover, 
developer needs to use $timeout event to force Angular finish event to end the current digest cycle.  
In Angular 2.0 Zone has made a revolutionary change in case of change detection and  zones mechanism  is capable of deciding whether
to end digest cycle or not. Therefore, one of the major advantages of Angular 2.0 is change detection with Zone mechanism.

Improved Performance: Another significant disadvantages of Angularjs 1.x was its poor performance, In case of ng-repeat the performance
issue was really a blocking issue. However in Angular 2.0, the change detection mechanism does not travel the entire DOM tree to detect 
a change, rather its only travel a part of it, therefore, the performance has been improved significantly.

Improved modularity & Dependency Injection: Angular modules in Angular 1.x are mostly architecture to group a number of related functions
and then used as container for dependency injection containers. However, in 2.0 modular development and component isolation has made it
more easier to instantiate a component and used it in its scope. Inheritance has been introduced in component isolation, therefore, 
a child service can be injected while it will inherits all the services of its parent. Child injectable component or service is also 
capable of overriding their parent’s functionality.
