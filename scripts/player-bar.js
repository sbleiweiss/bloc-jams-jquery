{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });
  $('button#next').on('click', function(){
    if (player.playState !== 'playing') { return; } // checks to see if a song is playing, if not, execute a return statement which will terminate execution of the function if the 'if' statements condition is met

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying); // player.currentlyPlaying = currently playing song and album.songs =array of song object
    const nextSongIndex = currentSongIndex + 1; // created new var = next song index
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex]; // nextSongIndex gets next song in album.songs and assigns it to a nextSong variable
    player.playPause(nextSong); // calls player.playPause and pass it nextSong
  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex -1;
    if (previousSongIndex < 0) { return; }
    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });
}
