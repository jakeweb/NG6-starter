// import AlbumFactory from './album.factory';


class AlbumController {
  static $inject = ['Album'];

  constructor(Album) {
    this.name = 'album';
    this.albumService = Album;
    this.albums = [];
  }

  $onInit() {
    this.albumService.getVideos().then((response) => {
      this.albums = this.albumService.getAlbums(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  getAlbumPoster(album) {
    return this.albumService.getAlbumPoster(album);
  }

}
AlbumController.$inject = ['Album'];
export default AlbumController;
