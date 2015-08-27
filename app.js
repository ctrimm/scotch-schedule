// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
  
  // our application code will go here
  var ref = new Firebase("https://scotch-angular-sched/firebaseio.com/days");
  var fb = $firebase(ref);

});