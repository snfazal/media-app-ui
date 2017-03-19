function MediaController($http, $state, $scope){
  var self = this;
  var server = 'http://localhost:3000'

  function createMedia(media){
    console.log(media);
    $http.post(`${server}/media`, {media})
    .then(function(res){
      console.log(res);
      $state.go('index')
    });
  }
  self.createMedia = createMedia;

  function getMedia() {
    $http.get(`${server}/media`)
    .then(function(res) {
      self.allMedia = res.data.media;
      console.log(self.allMedia);
    })
  }
  self.getMedia = getMedia;
  getMedia();

  function showMedia(media) {
    self.nowShowing = media;
    $scope.$emit('nowShowing', self.nowShowing);
    $state.go('show_media');
  }
  self.showMedia = showMedia;

}
