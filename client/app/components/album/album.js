import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngDialog from 'ng-dialog';

import albumComponent from './album.component';
import singleAlbumComponent from './single-album/single-album.component';

import AlbumService from './album.service';


let albumModule = angular.module('album', [
    uiRouter,
    ngDialog
  ])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('album', {
        url: '/album/:albumID',
        params: {
          albumID: null
        },
        component: 'singleAlbum'
      });
  })

  .service('Album', AlbumService)
  .component('album', albumComponent)
  .component('singleAlbum', singleAlbumComponent)
  .name;

export default albumModule;
