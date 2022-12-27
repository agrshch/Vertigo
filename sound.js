function toggleAudio(){
  if (myp5.song.isPlaying()){
    myp5.song.pause();
    this.html("play");
  } else {
    myp5.song.play();
    this.html("pause");
  }
}

function changeVolume(song){
  console.log(this.value());
  myp5.song.setVolume(this.value());
}

function jumpToPoint(song){
  console.log(this.value());
  myp5.song.jump(this.value()*myp5.song.duration());
}
