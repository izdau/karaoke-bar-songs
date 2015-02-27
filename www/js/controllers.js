angular.module('starter.controllers', [])
    .controller('AllSongsCtrl', function ($scope, Songs, QueuedSongs) {
        $scope.songs = [];

        // The Songs service returns a promise
        Songs.getAll().then(function (songs) {
            console.log('Success from http: ' + songs.length);
            $scope.songs = songs;
        });

        $scope.addSongToQueue = function (song) {
            console.log('adding song to queue: ' + song.title);
            QueuedSongs.addSong(song);
        }
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
    })
    .controller('QueueCtrl', function ($scope, QueuedSongs) {
        $scope.queuedSongs = QueuedSongs.getAll();

        $scope.removeSongFromQueue = function (song) {
            QueuedSongs.removeSong(song);

            //$scope.queuedSongs = QueuedSongs.getAll();
        }
    });
