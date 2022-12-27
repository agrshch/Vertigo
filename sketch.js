const sketch = function(p){
  p.song;
  // p.sliderVolume;
  // p.sliderProgress;
  // p.button;
  // p.clock;
  let framesNum = 30;
  p.PICS = [];
  for (let i = 0; i < framesNum; i++) p.PICS.push({img: null, ms:null, sec:null});
  window.addEventListener('DOMContentLoaded', ()=> getTimings(p.PICS));
  p.current = {img: null};

  // p.myCanvas;
  p.ready = false;

  p.preload = function (){
    for (let i = 0; i < p.PICS.length; i++) p.PICS[i].img = p.loadImage('content/crops/pic_'+i+'.png');
    p.song = p.loadSound('content/16-Le-Vertigo_-Rondeau-_Moderement_.mp3', ()=> p.song.setVolume(0.5));
    p.ready = true;
  }

  p.setup = function(){
    // p.myCanvas =
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
      let hydra = new Hydra({canvas: document.getElementById("#hydraCanvas")});
      console.log(myp5.ready)
      setResolution(1920,1080);
      a.setSmooth( smooth = 0.6 )
      let SSS = (v=1) => a.fft[1]*v;

      s0.init({src:p.canvas});

      // s0.init({src: document.getElementById("#defaultCanvas0")});

      // imgEl = document.createElement('img');
      // imgEl.crossOrigin = 'anonymous';
      // imgEl.src = 'https://www-users.york.ac.uk/~tas509/cors/Boris_Johnson_AP.jpg'
      // s0.init({src: imgEl});

      console.log(s0);

      src(s0)
        .mult
        (
          src(s0)
          .thresh( ()=> SSS(1.5) )
          .luma( 0.9, 0 )
        )
        .out(o1)

      src(o0)
        .modulateHue
          (
            src(o0)
            .scale(1.3,2,1)
          ,4)
        .layer
        (
          src(o1)
          .luma( 0.00001,0)
        )
        .out()

    }

    let t = p.song.currentTime();
    p.clock.html( p.floor(t/60).toString().padStart(2,0) + ':' + p.round(t%60).toString().padStart(2,0) );
    p.current.img = setPicture(p.PICS);
    p.image(p.current.img,0,0,p.width,p.height);
    if (!p.mouseIsPressed) p.sliderProgress.value(p.song.currentTime()/p.song.duration());
  }
}

this.myp5 = new p5(sketch);


////////////////////////////// HYDRA /////////////////



//   let hydra = new Hydra({canvas: document.getElementById("#hydraCanvas")});
// console.log(myp5.ready)
//   setResolution(1920,1080);
//   a.setSmooth( smooth = 0.6 )
//   let SSS = (v=1) => a.fft[1]*v;

  // s0.init({src: document.getElementById("#defaultCanvas0")});
  // console.log(s0);




  //
  // imgEl = document.createElement('img');
  // imgEl.crossOrigin = 'anonymous';
  // imgEl.src = 'https://www-users.york.ac.uk/~tas509/cors/Boris_Johnson_AP.jpg'
  // s0.init({src: imgEl});
  //
  //
  // src(s0)
  //   .mult
  //   (
  //     src(s0)
  //     .thresh( ()=> SSS(1.5) )
  //     .luma( 0.9, 0 )
  //   )
  //   .out(o1)
  //
  // src(o0)
  //   .modulateHue
  //     (
  //       src(o0)
  //       .scale(1.3,2,1)
  //     ,4)
  //   .layer
  //   (
  //     src(o1)
  //     .luma( 0.00001,0)
  //   )
  //   .out()










// function draw() {
  // put the hydra onto a buffer
  // pg.push();
  // pg.image(select("#hydraCanvas"), 0, 0, pg.width, pg.height);
  // pg.pop();




  // put the hydra onto a buffer
  // s.push()
    // image(select("#hydraCanvas"), 0, 0);
  // s.pop()

// }
