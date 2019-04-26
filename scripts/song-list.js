{
  album.songs.forEach( (song, index) => { // .forEach() array method. song parameter= holds song object for each iteration of loop, index= holds array index used to render song number
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
          </td>
        <td>${song.title}</td>
        <td>${song.duration}</td>
        </tr>
        `); // tr tag= row, td=cell

        song.element.on('click', event => {
          player.playPause(song);
        });

      $('#song-list').append(song.element);
  });
}
