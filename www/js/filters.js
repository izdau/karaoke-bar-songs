/**
 * Created by Baurzhan on 2/28/2015.
 */
angular.module('karaokeBarSongs.filters', []).filter('karaokeFilter', function (Filters) {
    return function (karaokeSongs) {
        var filterObject = Filters.getFilterObject();
        //console.log('initial input object: '+ JSON.stringify(karaokeSongs));
        //console.log('genre selected: '+ filterObject.genreSelected);
        var filteredKaraokeSongs = [];

        for (var i in karaokeSongs) {
            // Apply genre filter
            var genreFilter = filterObject.genreSelected || '';
            if (genreFilter !== '') {

                if (karaokeSongs[i].genre.indexOf(genreFilter) !== -1) {
                    filteredKaraokeSongs.push(karaokeSongs[i]);
                }
            }
        }

        //console.log('after filter: '+ JSON.stringify(filteredKaraokeSongs));
        return filteredKaraokeSongs;
    };
});