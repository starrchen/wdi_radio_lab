(function(){
  angular
  .module("songs")
    .directive("songForm", [
      '$state',
      'SongFactory',
    function($state, song){
      return {
        templateUrl: "/js/songs/views/_song_form.html",
        replace: true,
        scope: {
          song: '=',
          formType: '@'
        },
        link: function(scope){
          scope.create = function(){
            console.dir(scope.song);
            scope.song.$save(scope.song, function(song){
              $state.go('songShow', song, {reload: true})
            });
          }
        }
      }
    }]
  )
})();
