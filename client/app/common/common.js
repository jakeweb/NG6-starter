import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Album from './album/album';


let commonModule = angular.module('app.common', [
  Navbar,
  // Hero,
  User,
  Album
])
  
.name;

export default commonModule;
