// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        // Set tab position to bottom (to handle Android tab top issue)
        $ionicConfigProvider.tabs.position('bottom');

        // Ionic uses AngularUI Router which uses the concept of states
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider.state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
        })
        .state('tab.all-songs', { // Each tab has its own nav history stack:
            url: '/all-songs',
            views: {
                'tab-all-songs': {
                    templateUrl: 'templates/tab-all-songs.html',
                    controller: 'DashCtrl'
                }
            }
        })
        .state('tab.popular', {
            url: '/popular',
            views: {
                'tab-popular': {
                    templateUrl: 'templates/tab-popular.html',
                    controller: 'ChatsCtrl'
                }
            }
        })
        .state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-popular': {
                    templateUrl: 'templates/chat-detail.html',
                    controller: 'ChatDetailCtrl'
                }
            }
        })
        .state('tab.friends', {
            url: '/filters',
            views: {
                'tab-filters': {
                    templateUrl: 'templates/tab-filters.html',
                    controller: 'FriendsCtrl'
                }
            }
        })
        .state('tab.friend-detail', {
            url: '/friend/:friendId',
            views: {
                'tab-filters': {
                    templateUrl: 'templates/friend-detail.html',
                    controller: 'FriendDetailCtrl'
                }
            }
        })
        .state('tab.account', {
            url: '/favorites',
            views: {
                'tab-favorites': {
                    templateUrl: 'templates/tab-favorites.html',
                    controller: 'AccountCtrl'
                }
            }
        })
        .state('tab.queue', {
            url: '/queue',
            views: {
                'tab-queue': {
                    templateUrl: 'templates/tab-queue.html',
                    controller: 'AccountCtrl'
                }
            }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/all-songs');

    });
