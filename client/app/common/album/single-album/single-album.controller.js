// import AlbumFactory from './album.factory';


class SingleAlbumController {
  static $inject = ['Album', '$stateParams', 'ngDialog'];

  constructor(Album, $stateParams, ngDialog) {
    this.$stateParams = $stateParams;
    this.ngDialog = ngDialog;
    this.albumService = Album;
    this.videos = this.albumService.readVideos();
    this.newVideo = {};
  }

  $onInit() {
    this.albumService.getAlbumById(this.$stateParams.albumID).then((response) => {
      this.albumService.writeVideos(response);
      this.videos = this.albumService.readVideos();
    }).catch((err) => {
      console.log(err);
    });
  }

  getVideoPoster(video) {
    return this.albumService.getVideoPoster(video);
  }

  getVideoUrl(video) {
    return this.albumService.getVideoUrl(video);
  }

  openPopup() {
    this.ngDialog.open({
      template: './popup.html',
      className: 'ngdialog-theme-default',
      controller: SingleAlbumController,
      controllerAs: '$ctrl',
      data: {
        videos: this.videos
      },
    });
  }

  addVideo(videos) {
    videos.push(this.newVideo);    
    this.ngDialog.close();
  }

}
SingleAlbumController.$inject = ['Album', '$stateParams', 'ngDialog'];
export default SingleAlbumController;
