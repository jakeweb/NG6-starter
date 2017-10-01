class AlbumService {
  static $inject = ['$http', '$q', '$sce'];

  constructor($http, $q, $sce) {
    this.$http = $http;
    this.$q = $q;
    this.$sce = $sce;
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
        albumID: albumsTmp[prop][0].albumID,
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

  getVideoUrl(video) {
    const videoID = this.getVideoID(video);
    const url = 'https://www.youtube.com/embed/' + videoID;
    return this.$sce.trustAsResourceUrl(url);
    // return url;    
  }

  getVideoID(video) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    let match = video.link.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  }

  getAlbumById(albumID) {
    let deferred = this.$q.defer();
    this.getVideos().then((response) => {
      let videos = response.data;
      let album = [];
      videos.forEach(function (element) {
        if (element.albumID === albumID) {
          album.push(element);
        }
      });
      deferred.resolve(album);
    }).catch((err) => {
      deferred.reject(err);
    });
    return deferred.promise;
  }
}
AlbumService.$inject = ['$http', '$q', '$sce'];

export default AlbumService;
