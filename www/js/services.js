angular.module('karaokeBarSongs.services', [])
    .factory('Songs', ['$http', function ($http) {
        return {
            getAll: function () {
                var request = $http({
                    method: 'get',
                    url: 'data/allSongs.json'
                });

                return request.then(function (response) {
                    return response.data;
                });
            }
        }
    }])
    .factory('QueuedSongs', function (localStorageService) {
        var queuedSongs = localStorageService.get('queuedSongs') || [];
        console.log('queuedSongs: ' + JSON.stringify(queuedSongs));

        return {
            addSong: function (song) {
                queuedSongs.push(song);
                localStorageService.set('queuedSongs', queuedSongs);
            },
            removeSong: function (song) {
                queuedSongs.splice(queuedSongs.indexOf(song), 1);
                localStorageService.set('queuedSongs', queuedSongs);
            },
            getAll: function () {
                console.log('queuedSongs length: ' + queuedSongs.length);
                return queuedSongs;
            },
            getSong: function (songId) {
                for (var i = 0; i < queuedSongs.length; i++) {
                    if (queuedSongs[i].id === parseInt(songId)) {
                        return queuedSongs[i];
                    }
                }

                return null;
            }
        }
    })
    .factory('Filters', function (localStorageService) {
        return {
            setFilter: function (filterKey, filterValue) {
                var filterObject = localStorageService.get('filterObject') || {};
                filterObject[filterKey] = filterValue;
                localStorageService.set('filterObject', filterObject);
            },
            getFilterObject: function () {
                return localStorageService.get('filterObject') || {};
            }
        }
    })
    .factory('Populars', ['$http', function ($http) {
        return {
            getAll: function () {
                var request = $http({
                    method: 'get',
                    url: 'data/popularSongs.json'
                });

                return request.then(function (response) {
                    return response.data;
                });
            }
        }
    }]);
