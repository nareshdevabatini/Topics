Callback Hell
It is not a problem to work with $http/ $resource. The real problem arise when you have to deal with multiple callbacks 
which are dependent on each other. The result would be something like this-
(function () {
    asyncCall(function (err, data1) {
        if (err) return callback(err);
        anotherAsyncCall(function (err2, data2) {
            if (err2) return calllback(err2);
            oneMoreAsyncCall(function (err3, data3) {
                if (err3) return callback(err3);
                // are we done yet?
            });
        });
    });
})()
In this case we have to use Deffer object

Deferred Object:
Deferred is an object which exposes the promise. It has  mainly three methods resolve(), reject(), and notify().
Deferred returns promise object. When Deferred completes, You call methods either resolve(), reject(), and notify() .
It calls callback register to either resolve(), reject(), or notify() according to how it has completed

ex: function sayHelloAsync(name) {
      return function () {
          var defer = $q.defer()
          setTimeout(function() {
              //Greet when your name is 'deepak'
              if (name == 'deepak') {
                  defer.resolve('Hello, ' + name + '!');
              }
              else {
                  defer.reject('Greeting ' + name + ' is not allowed.');
              }
          }, 1000);

          return defer.promise
      }
  }      
  
  Deferred API:
A new instance of defer is created by calling $q.defer(). It has mainly three methods.
.resolve(value) – This method is use to resolve the derive promise ie. // promise fulfilled -ve
.reject(value) – This method is use to reject the derived promise ie. // promise fulfilled -ve
.notify(value) – This method is used to notify the current state of the derived promise

Ex: var getTodoList = function (url) {
      var deferred = $q.defer();
      var data = [
          {
              "task": "I wanna to learn Web-Worker...",
              "stared": "nopes!!: (",
              "estimatedTime": "Infinity"
          },
          {
              "task": "I wanna to learn Monkey-Patching...",
              "stared": "Yup!!!",
              "estimatedTime": "1day"
          },
          {
              "task": "I wanna to learn ui-router",
              "stared": "nopes!!: (",
              "estimatedTime": "99999hr"
          }
      ];
      var percentage = 0;
      var interval = $interval(function () {
          percentage = percentage + 5;
          deferred.notify({percentage: percentage});
          if (percentage > 99) {
              $interval.cancel(interval);
              deferred.resolve(data)
          }

      }, 500)
      return deferred.promise;
  }   
  
Promise API
A new promise is created when you create a defer. You can get the instance of promise object by defer.promise. 
It is used to getting the result of the defer when a promise has completed. There are three events where you can bind your listeners.

Ref: http://www.tothenew.com/blog/angularjs-deferred-promises-basic-understanding/
