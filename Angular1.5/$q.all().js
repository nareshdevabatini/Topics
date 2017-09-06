q.all() is one of the method that i use more frequently. $q.all accepts array of promises as argument. Once all of the promises
get completed. you will get the result in callback function as array of results.

Example:

var promise1 = $http({method: 'GET', url: '/api-one-url', cache: 'true'});
var promise2 = $http({method: 'GET', url: '/api-two-url', cache: 'true'});
 
$q.all([promise1, promise2])
    .then(function(data){
        console.log(data[0], data[1]);
    });
