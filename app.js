// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
  
  // our application code will go here
  var ref = new Firebase("https://scotch-angular-sched.firebaseio.com/days");
  var fb = $firebase(ref);

  $scope.reset = function(){
    fb.$set({
        monday: {
            name: 'Monday', 
            slots: {
                0900: {
                    time: '9:00am',
                    booked: false
                },
                0110: {
                    time: '11:00am',
                    booked: false
                },
            }
        },
        tuesday: {
            name: 'Tuesday',
            slots: {
                0900: {
                    time: '9:00am',
                    booked: false
                },
                0110: {
                    time: '11:00am',
                    booked: false
                }
            }
        }
    });
  }

});