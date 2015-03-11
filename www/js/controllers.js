angular.module('karaokeBarSongs.controllers', [])
    .controller('ScanQrCodeCtrl', function ($scope) {
        console.log('scan-qr-code loaded');
    })
    .controller('AllSongsCtrl', function ($scope, $ionicPopup, Songs, QueuedSongs) {
        $scope.songs = [];
        $scope.searchString = '';

        // The Songs service returns a promise
        Songs.getAll().then(function (songs) {
            $scope.songs = songs;
        });

        $scope.addSongToQueue = function (song) {
            var confirmBox = $ionicPopup.confirm({
                title: 'Добавить песню в очередь?'
            });

            confirmBox.then(function (response) {
                if (response) {
                    console.log('adding song to queue: ' + JSON.stringify(song));
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
    .controller('FiltersCtrl', function ($scope, Filters) {
        $scope.yearOptions = ['Все года', '1980-1990', '1991-2000', '2001-2010', '2011-2015'];
        $scope.genreOptions = ['Pop', 'Rock', 'Soul', 'Funk', 'Latin', 'Schlager', 'Все жанры'];

        var filterObject = Filters.getFilterObject();

        $scope.foreignSong = filterObject.foreignSong || false;
        $scope.yearsSelected = filterObject.yearsSelected || 'Все года';
        $scope.genreSelected = filterObject.genreSelected || 'Все жанры';

        $scope.filterValueChanged = function (filterKey, newValue) {
            Filters.setFilter(filterKey, newValue);
        }
    })
    .controller('FavoritesCtrl', function ($scope) {
        console.log('Favorites tab loaded');
    })
    .controller('QueueCtrl', function ($scope, $ionicPopup, QueuedSongs) {
        $scope.queuedSongs = QueuedSongs.getAll();

        $scope.removeSongFromQueue = function (song) {
            var confirmBox = $ionicPopup.confirm({
                title: 'Убрать песню с очереди?'
                //template: 'Добавить песню в очередь?'
            });

            confirmBox.then(function (response) {
                if (response) {
                    QueuedSongs.removeSong(song);
                }
            });
        }
    });
