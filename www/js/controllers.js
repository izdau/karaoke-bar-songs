angular.module('karaokeBarSongs.controllers', [])
    .controller('AllSongsCtrl', function ($rootScope, $scope, $ionicPopup, Songs, QueuedSongs) {
        $scope.searchString = '';
        $scope.songs = [];
        // The Songs service returns a promise
        Songs.getAll().then(function (songs) {
            $scope.songs = songs;
        });
        $scope.searchType = 'artist';
        $scope.searchProperty = 'artist';
        $scope.setSearchType = function (searchType) {
            $scope.searchType = searchType;

            if ($scope.searchType === 'artist') {
                $scope.searchProperty = 'artist';
            } else if ($scope.searchType === 'song') {
                $scope.searchProperty = 'songName';
            }
        }

        $scope.getSearchPropertyType = function () {
            console.log('searchProperty: ' + $scope.searchProperty);
            return $scope.searchProperty;
        }

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

        $scope.scanQRCode = function () {
            console.log('scanning QR ...');
            $cordovaBarcodeScanner.scan().then(function(imageData) {
                $rootScope.qrCodeScanned = true;
                console.log(imageData.text);
                $scope.qrCodeText = imageData.text;
                console.log("Barcode Format -> " + imageData.format);
                console.log("Cancelled -> " + imageData.cancelled);
            }, function(error) {
                $rootScope.qrCodeScanned = false;
                console.log("An error happened -> " + error);
                $scope.qrCodeText = 'Error happened during scanning';
            });
        }
    })
    .controller('PopularCtrl', function ($rootScope, $scope, $ionicPopup, $cordovaBarcodeScanner, Populars, QueuedSongs) {
        $scope.popularType = 'all';
        $scope.popularSongs = [];
        // The Populars service returns a promise
        Populars.getAll().then(function (popularSongs) {
            $scope.popularSongs = popularSongs;
        });
        $scope.qrCodeText = 'Currently unscanned';

        $scope.setPopularType = function (popularType) {
            $scope.popularType = popularType;

            console.log('popularType changed to: ' + $scope.popularType);
        }

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

        $scope.scanQRCode = function () {
            console.log('scanning QR ...');
            $cordovaBarcodeScanner.scan().then(function(imageData) {
                $rootScope.qrCodeScanned = true;
                console.log(imageData.text);
                $scope.qrCodeText = imageData.text;
                console.log("Barcode Format -> " + imageData.format);
                console.log("Cancelled -> " + imageData.cancelled);
            }, function(error) {
                $rootScope.qrCodeScanned = false;
                console.log("An error happened -> " + error);
                $scope.qrCodeText = 'Error happened during scanning';
            });
        }
    })
    .controller('FiltersCtrl', function ($rootScope, $scope, Filters) {
        $scope.yearOptions = ['Все года', '1980-1990', '1991-2000', '2001-2010', '2011-2015'];
        $scope.genreOptions = ['Pop', 'Rock', 'Soul', 'Funk', 'Latin', 'Schlager', 'Все жанры'];

        var filterObject = Filters.getFilterObject();

        $scope.foreignSong = filterObject.foreignSong || false;
        $scope.yearsSelected = filterObject.yearsSelected || 'Все года';
        $scope.genreSelected = filterObject.genreSelected || 'Все жанры';

        $scope.filterValueChanged = function (filterKey, newValue) {
            Filters.setFilter(filterKey, newValue);
        }

        $scope.scanQRCode = function () {
            console.log('scanning QR ...');
            $cordovaBarcodeScanner.scan().then(function(imageData) {
                $rootScope.qrCodeScanned = true;
                console.log(imageData.text);
                $scope.qrCodeText = imageData.text;
                console.log("Barcode Format -> " + imageData.format);
                console.log("Cancelled -> " + imageData.cancelled);
            }, function(error) {
                $rootScope.qrCodeScanned = false;
                console.log("An error happened -> " + error);
                $scope.qrCodeText = 'Error happened during scanning';
            });
        }
    })
    .controller('FavoritesCtrl', function ($rootScope, $scope) {
        console.log('Favorites tab loaded');

        $scope.scanQRCode = function () {
            console.log('scanning QR ...');
            $cordovaBarcodeScanner.scan().then(function(imageData) {
                $rootScope.qrCodeScanned = true;
                console.log(imageData.text);
                $scope.qrCodeText = imageData.text;
                console.log("Barcode Format -> " + imageData.format);
                console.log("Cancelled -> " + imageData.cancelled);
            }, function(error) {
                $rootScope.qrCodeScanned = false;
                console.log("An error happened -> " + error);
                $scope.qrCodeText = 'Error happened during scanning';
            });
        }
    })
    .controller('QueueCtrl', function ($rootScope, $scope, $ionicPopup, QueuedSongs) {
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

        $scope.scanQRCode = function () {
            console.log('scanning QR ...');
            $cordovaBarcodeScanner.scan().then(function(imageData) {
                $rootScope.qrCodeScanned = true;
                console.log(imageData.text);
                $scope.qrCodeText = imageData.text;
                console.log("Barcode Format -> " + imageData.format);
                console.log("Cancelled -> " + imageData.cancelled);
            }, function(error) {
                $rootScope.qrCodeScanned = false;
                console.log("An error happened -> " + error);
                $scope.qrCodeText = 'Error happened during scanning';
            });
        }
    });
