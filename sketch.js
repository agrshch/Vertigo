p5.disableFriendlyErrors = true;

const sketch = function(p){
  p.song;
  let framesNum = 20;
  p.PICS = [];
  for (let i = 0; i < framesNum; i++) p.PICS.push({img: null, ms:null, sec:null});
  window.addEventListener('DOMContentLoaded', ()=> getTimings(p.PICS));
  p.current = {img: null};

  p.ready = false;

  p.preload = function (){
    for (let i = 0; i < p.PICS.length; i++) p.PICS[i].img = p.loadImage('content/crops/pic_'+i+'.png');
    p.song = p.loadSound('content/16-Le-Vertigo_-Rondeau-_Moderement_.mp3', ()=> p.song.setVolume(0.5));
    p.ready = true;
  }

  p.setup = function(){
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.imageMode(p.CENTER);

    //changing Images
    // current.img = PICS[0].img;
    //pure timers
    // setTimers(PICS, current);


    //audio
    //volume
    console.log(p.song);
    p.song.setVolume(0.5);
    p.sliderVolume = p.createSlider(0, 1, 0.5, 0.01);
    p.sliderVolume.position(100, 10);
    p.sliderVolume.changed(changeVolume);
    //progress
    p.sliderProgress = p.createSlider(0, 1, 0,   0.001);
    p.sliderProgress.position(300, 10);
    p.sliderProgress.style('width', '800px');
    p.sliderProgress.changed(jumpToPoint);
    //play/pause
    p.button = p.createButton('play');
    p.button.position(10, 10);
    p.button.mousePressed(toggleAudio);

    //time
    p.clock = p.createP(p.song.currentTime());
    p.clock.position(1120, -5);
    p.clock.style('color', 'white');
  }

  p.draw = function() {
    if(!p.ready)return;

    if(p.frameCount === 1){
     doTheHydra(p);
    }

    let t = p.song.currentTime();
    p.clock.html( p.floor(t/60).toString().padStart(2,0) + ':' + p.round(t%60).toString().padStart(2,0) );
    p.current.img = setPicture(p.PICS);
    p.image(p.current.img,0,0,p.width,p.height);
    if (!p.mouseIsPressed) p.sliderProgress.value(p.song.currentTime()/p.song.duration());
  }
}

this.myp5 = new p5(sketch);
