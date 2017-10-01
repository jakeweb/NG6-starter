import angular from 'angular';
import Home from './home/home';
import Album from './album/album';

let componentModule = angular.module('app.components', [
    Home,
    Album
  ])

  .name;

export default componentModule;
