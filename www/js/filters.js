/**
 * Created by Baurzhan on 2/28/2015.
 */
angular.module('karaokeBarSongs.filters', [])
    .filter('allSongsFilter', function (filterFilter) {
        return function (karaokeSongs, searchType, searchString) {
            console.log('searchType: ' + searchType + ', searchString: ' + searchString);
            var filteredKaraokeSongs = [];
            if (searchType === 'artist') {
                filteredKaraokeSongs = filterFilter(karaokeSongs, {artist:searchString});
            } else if (searchType === 'song') {
                filteredKaraokeSongs = filterFilter(karaokeSongs, {songName:searchString});
            }

            return filteredKaraokeSongs;
        };
});