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
}
