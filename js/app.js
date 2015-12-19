"use strict";

(function(){
  angular
  .module("wdi-radio", [
    "ui.router",
    "ng-token-auth",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .config([
    "$authProvider",
    AuthConfigFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      template: "Welcome to the World's Best Song App!"
    })
    .state("songIndex", {
      url: "/songs",
      templateUrl: "js/songs/views/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    .state("songNew", {
      url: "/songs/new",
      templateUrl: "js/songs/views/new.html",
      controller: "SongNewController",
      controllerAs: "SongNewViewModel"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/views/show.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"
    })
    .state("songEdit", {
      url: "/songs/:id/edit",
      templateUrl: "js/songs/views/edit.html",
      controller: "SongEditController",
      controllerAs: "SongEditViewModel"
    })

    .state("signin", {
      url: "/signin",
      templateUrl: "js/users/signin.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("signout", {
      url: "/signout",
      templateUrl: "js/users/signout.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("signup", {
      url: "/signup",
      templateUrl: "js/users/signup.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    });
  }

  function AuthConfigFunction($authProvider) {
    $authProvider.configure({
      apiUrl: "http://localhost:3000"
    });
  }
}());
