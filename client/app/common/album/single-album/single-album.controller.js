// import AlbumFactory from './album.factory';


class SingleAlbumComponent {
  static $inject = ['Album'];

  constructor(Album) {
    this.name = 'album single';
    this.test = 'test';
    this.albumService = Album;
    this.albums = [];
    this.videos = [];
  }

  $onInit() {

  }


}
SingleAlbumComponent.$inject = ['Album'];
export default SingleAlbumComponent;
