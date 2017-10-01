// import AlbumFactory from './album.factory';


class SingleAlbumComponent {
  static $inject = ['Album', '$stateParams'];

  constructor(Album, $stateParams) {
    this.name = 'album single';
    this.albumService = Album;
    this.videos = [];
    this.$stateParams = $stateParams;
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


}
SingleAlbumComponent.$inject = ['Album', '$stateParams'];
export default SingleAlbumComponent;
