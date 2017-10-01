class AlbumService {
  static $inject = ['$http', '$q'];

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getVideos() {
    return this.$http.get('local.json');
  }

  getAlbums(videos) {
    let albums = [];
    let albumsTmp = {};
    videos.forEach(function (element) {
      if (albumsTmp[element.album]) {
        albumsTmp[element.album].push(element);
      } else {
        albumsTmp[element.album] = [];
      }
    });
    for (let prop in albumsTmp) {
      albums.push({
        id: albumsTmp[prop][0].id,
        name: prop,
        data: albumsTmp[prop]
      });
    }
    return albums;
  }

  getAlbumPoster(album) {
    return this.getVideoPoster(album.data[0]);
  }

  getVideoPoster(video) { 
    const videoID = this.getVideoID(video);
    const url = 'https://img.youtube.com/vi/' + videoID + '/' + 0 + '.jpg';
    return url;
  }

  getVideoID(video) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    let match = video.link.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  }
}

export default AlbumService;
