angular.module('starter.controllers', [])
    .controller('AllSongsCtrl', function ($scope, $ionicPopup, Songs, QueuedSongs) {
        $scope.songs = [];
        $scope.searchString = '';

        // The Songs service returns a promise
        Songs.getAll().then(function (songs) {
            console.log('Success from http: ' + songs.length);
            $scope.songs = songs;
        });

        $scope.addSongToQueue = function (song) {
            var confirmBox = $ionicPopup.confirm({
                title: 'Добавить песню в очередь?'
                //template: 'Добавить песню в очередь?'
            });

            confirmBox.then(function(response) {
                if(response) {
                    console.log('adding song to queue: ' + song.title);
                    QueuedSongs.addSong(song);
                }
            });
        }
    })
    .controller('PopularCtrl', function ($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        }
    })
    .controller('FiltersCtrl', function ($scope) {
        $scope.foreignSong = false;
        $scope.yearsSelected = 'Все года';
        $scope.genreSelected = 'Все жанры';
    })
    .controller('FavoritesCtrl', function ($scope) {

    })
    .controller('QueueCtrl', function ($scope, $ionicPopup, QueuedSongs) {
        $scope.queuedSongs = QueuedSongs.getAll();

        $scope.removeSongFromQueue = function (song) {
            var confirmBox = $ionicPopup.confirm({
                title: 'Убрать песню с очереди?'
                //template: 'Добавить песню в очередь?'
            });

            confirmBox.then(function(response) {
                if(response) {
                    QueuedSongs.removeSong(song);
                }
            });
        }
    });
