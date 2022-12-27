function getTimings(pics) {
  Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8_NztUVUpDk8X8cuukQ2xJcrEmJ2JMCl-TUIauTq_obj8-rf3BR1yDjXMcPnCkYr6Mp0Lr-UYp_-C/pub?output=csv',
  {
    download: true,
    header: true,
    complete: function(results) {
      for (let i = 0; i < pics.length; i++) {
        pics[i].ms = +results.data[i].milliseconds;
        pics[i].sec = +results.data[i].seconds;
      };
    }
  })
}

//sound-independent
function setTimers(pics, current){
  for(let i = 1; i < pics.length; i++){
    let val = i;
    setTimeout( ()=>
    {
      current.img = pics[val].img;
    }, pics[val].ms );
  }
}

//sound-dependent
function setPicture(pics){
  let t = myp5.song.currentTime();
  // console.log(song.currentTime());
  // console.log(t);
  let latest = 0;
  for (let i = 0; i < pics.length; i++) {
    if (t >= pics[i].sec) {
      latest = i;
    }
  }
  return pics[latest].img;
}
