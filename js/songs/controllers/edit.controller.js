"use strict";

(function(){
  angular
    .module( "songs" )
    .controller( "SongEditController", [
      "SongFactory",
      "$stateParams",
      SongEditControllerFunction
    ]);

  function SongEditControllerFunction( SongFactory, $stateParams ){
    console.dir(SongFactory  )
    console.log($stateParams.id);
    this.song = SongFactory.get({id: $stateParams.id})
    console.log(this.song);
    this.update = function(){
      this.song.$update({id: $stateParams.id});
    }
    this.destroy = function(){
      this.song.$delete({id: $stateParams.id})
    }
  }
}());
