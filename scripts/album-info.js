{
  $('#album-title').text(album.title); // inserts album title into #album-title element
  $('img#album-cover-art').attr('src', album.albumArtUrl); //shows album cover art
  $('.artist').text(album.artist); //shows artist name
  $('#release-info').text(album.releaseInfo); //shows release info
}
