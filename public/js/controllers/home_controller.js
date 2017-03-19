// When only the name of the module is passed in,
// the 'module' method returns the specified module.
// angular.module('mediaAngularApp')
//     .controller('homeController', homeController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function HomeController($scope, $http) {
  var self = this;

  //user login
  $scope.$on('userLoggedIn', function(event, data){
    console.log('LOGGED IN USER')
    self.currentUser = data;
  });

  //user log out
  $scope.$on('userLoggedOut', function(event, data) {
    self.currentUser = data;
  });

  //show links page
  $scope.$on('nowShowing', function(event, data) {
    self.nowShowing = data;
  })

}
