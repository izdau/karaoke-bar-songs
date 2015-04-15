angular.module('karaokeBarSongs.services', [])
    .factory('Songs', ['$http', function ($http) {
        return {
            getAll: function () {
                var request = $http({
                    method: 'get',
                    url: 'data/karaokeSongList.json'
                });

                return request.then(function (response) {
                    return response.data;
                });
            }
        }
    }])
    .factory('QueuedSongs', function (localStorageService) {
        var queuedSongs = localStorageService.get('queuedSongs') || [];
        console.log('queuedSongs:' + JSON.stringify(queuedSongs));

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
    .factory('Chats', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
        }, {
            id: 2,
            name: 'Andrew Jostlin',
            lastText: 'Did you get the ice cream?',
            face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
        }, {
            id: 3,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        }, {
            id: 4,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
        }];

        return {
            all: function () {
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        }
    });
