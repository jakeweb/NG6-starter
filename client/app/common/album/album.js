import angular from 'angular';
import uiRouter from 'angular-ui-router';
import albumComponent from './album.component';
import singleAlbumComponent from './single-album/single-album.component';

import AlbumService from './album.service';


let albumModule = angular.module('album', [
    uiRouter
  ])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('album', {
        url: '/album/:id',
          params: {
            id: null
          },
        component: 'singleAlbum',
        // templateUrl: './common/album/single-album/single-album.html'
      });
  })

  .service('Album', AlbumService)
  .component('album', albumComponent)
  .component('singleAlbum', singleAlbumComponent)
  .name;

export default albumModule;
