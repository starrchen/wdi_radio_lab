"use strict";

(function(){
  angular
  .module("songs")
  .controller("SongIndexController", [
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(){
    console.log("I'm heeeeeeere!");
  };

}());
