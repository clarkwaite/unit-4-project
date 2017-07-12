ArtistController.$inject = ["artistsService", '$auth', '$state', "$stateParams", "$http"];

function ArtistController(artistsService, $auth, $state, $stateParams, $http) {
  const vm = this;
  vm.artist = null;

  activate(); //run when the page loads

  function activate() {

  } //close Activate function

  vm.saveToFavorites = function (artist) {
    let userId = $stateParams.userId;
    // let artistId = $stateParams.artistId;
    let artistToSave = {
      name: artist.name,
      nationality: artist.country_of_origin,
      years_active: artist.decade,
      genre: artist.main_genre,
      musicgraph_id: artist.id,
      spotify_id: artist.spotify_id
    };
    artistsService.saveArtist(artistToSave)
      .then(res => {
        let artistId = res.id;
        artistsService.saveToFavorites(artistId, userId)
          .then(res => {
            // vm.favorite = res.data;
            console.log(res);
          })
          .catch(res => {
            console.log(res);
          });
      });
    
  }

} //close Controller function


export default ArtistController;