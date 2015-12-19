(function(){
  angular
  .module("wdi-radio")
  .controller("SessionsController", function($auth, $state, $scope){
    this.signinForm = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        console.log("Signin success:", resp);
        $state.go('songIndex')
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });
    };

    this.signupForm = {};
    this.signup = function(){
      $auth.submitRegistration(this.signupForm)
      .then(function(resp){
        // successful signup
        console.log("Signup success:", resp);
        $state.go('songIndex');
        this.currentUser = user;
      })
      .catch(function(resp){
        // failed signup
        console.log("Signup failure:", resp);
      });
    }

    $scope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      if(toState.name == 'signout') {
        $auth.signOut();
      }
    });
  });
})();
