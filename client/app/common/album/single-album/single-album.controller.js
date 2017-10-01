// import AlbumFactory from './album.factory';


class SingleAlbumController {
  static $inject = ['Album', '$stateParams', 'ngDialog'];

  constructor(Album, $stateParams, ngDialog) {
    this.name = 'album single';
    this.albumService = Album;
    this.videos = [];
    this.$stateParams = $stateParams;
    this.ngDialog = ngDialog;
  }

  $onInit() {

    this.albumService.getAlbumById(this.$stateParams.albumID).then((response) => {
      this.videos = response;
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
      controllerAs: '$ctrl'
    });
  }


}
SingleAlbumController.$inject = ['Album', '$stateParams', 'ngDialog'];
export default SingleAlbumController;
