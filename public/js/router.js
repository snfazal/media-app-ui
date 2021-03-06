angular.module('mediaAngularApp', ['ui.router'])
  .config(MediaRouter)
  .config(authInterceptor)

function authInterceptor($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor')
}

function MediaRouter($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: '/partials/home.html'
      })
      .state('login', {
       url: '/login',
       templateUrl: '/partials/login.html'
     })
     .state('signup', {
       url: '/signup',
       templateUrl: '/partials/signup.html'
     })
     .state('create_media', {
       url: '/create_media',
       templateUrl: '/partials/create_media.html'
     })
     .state('show_media', {
       url: '/show_media',
       templateUrl: '/partials/show_media.html'
     })
}
