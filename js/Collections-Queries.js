// Working with collections

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song
});

var songs = new Songs([
  new Song({title: 'Song 1', genre: 'hip hop', downloads: 0 })
]);

songs.add(new Song({title: 'Song 2', genre: 'jazz', downloads: 10 }));

// Add method adds a new model to the end of the collection
// it can take a 2nd argument to specify where to put the model

// This is useful for adding a model at the beginning of a collection
songs.add(new Song({title: 'Song 3', genre: 'jazz', downloads: 20 }), {at: 0});

songs.push(new Song({title: 'Song 4', genre: 'rnb', downloads: 30}));

var jazzSongs = songs.where({genre: 'jazz'});

var firstJazzSong = songs.findWhere({genre: 'jazz'});

console.log('Jazz Songs', jazzSongs);
console.log('First Jazz Song', firstJazzSong);

var filteredSongs = songs.where({genre: 'Jazz', downloads: 10});

console.log('Filtered songs', filteredSongs);

var topDownloads = songs.filter(function(song){
  return song.get('downloads') > 10;
});

console.log('Top downloads', topDownloads);


songs.each(function(song){
  console.log(song);
});
