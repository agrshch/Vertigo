function doTheHydra(p){
  let hydra = new Hydra({canvas: document.getElementById("#hydraCanvas")});
// setResolution(1920,1080);
a.setSmooth( smooth = 0.9 )
a.setCutoff(4)
let SS0 = (v=1) => (a.fft[0])*v;
let SS1 = (v=1) => (a.fft[1])*v;
let SS2 = (v=1) => (a.fft[2])*v;
let SS3 = (v=1) => (a.fft[3])*v;

// let SSS = (v=1) => ((Math.random())*-0.4 + a.fft[2])*v;
// let SSS = (v=1) => ( Math.sin(time*0.001) + a.fft[2])*v;

s0.init({src:p.canvas});

src(s0)
  .mult
  (
    src(s0)
    .invert()
    .contrast(1.5)
    // .thresh( ()=> SS3(1.5-SS0(Math.random())) )
    .thresh( ()=> SS3(1.5-SS0(0.5)) )
    .luma( 0.9, 0 )
  )
  .out(o1)

src(o0)
.rotate(0.001)
  .modulateScale
    (
      src(o0)
      // .rotate(10)
      // .scale(1.3,2,1)
      // ,0.01)
    // ,()=> Math.random()*SS3(0.06) - SS2(0.01))
    ,()=> Math.min(Math.max(Math.random()*0.2*SS0(0.6) - SS3(0.02), -0.005), 0.02))
  .layer
  (
    src(o1)
    .luma( 0.00001,0)
  )
  .out()


// // src(s0)
// //   .mult
// //   (
//     src(s0)
//     .invert()
//     .contrast(2.5)
//     .thresh( ()=> SSS(1.1) )
//     .luma( 0.9, 0 )
//   // )
//   .out()





}