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
            scope.song.$save(scope.song, function(song){
              $state.go('songShow', song, {reload: true})
            });
          },

          scope.update = function(){
            scope.song.$update({id: scope.song.id}, function(song){
              $state.go('songShow', song, {reload: true})
            })
          }

        }
      }
    }]
  )
})();
