angular.module('starter.controllers', [])
    .controller('AllSongsCtrl', function ($scope, Songs) {
        $scope.songs = [];

        // The Songs service returns a promise
        Songs.getAll().then(function (songs) {
            console.log('Success from http: ' + songs.length);
            $scope.songs = songs;
        });
    })
    .controller('PopularCtrl', function ($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        }
    })
    .controller('FiltersCtrl', function ($scope) {
    })
    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('FriendDetailCtrl', function ($scope, $stateParams, Songs) {
        $scope.friend = Songs.get($stateParams.friendId);
    })
    .controller('FavoritesCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
