import angular from 'angular';
import uiRouter from 'angular-ui-router';
import albumComponent from './album.component';
import AlbumService from './album.service';


let albumModule = angular.module('album', [
  uiRouter
])

.service('Album', AlbumService)
.component('album', albumComponent)  
.name;

export default albumModule;
