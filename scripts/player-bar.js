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

  $('#time-control input').on('input', function (event) {
     player.skipTo(event.target.value);
   });

  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text( currentTime );
    $('#time-control input').val(percent);
    $('#time-control .total-time').text(duration);
    $('#time-control .total-time').text(duration);
  }, 1000);

  $('#volume-control input').on('input', function(event){
    player.setVolume(event.target.value);
  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex < 0) { return; }
    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });

}
