const wrxBtn=document.querySelector('#wrxBtn');
const imprezaBtn=document.querySelector("#imprezaBtn");

//animation for transtition
anime({
  targets:'.logo',
  opacity:1,
  duration:500,
  easing:'easeInOutSine',
  delay:200,
})
anime({
  targets:'.transition',
  opacity:0,
  duration:300,
  delay:1800,
  easing:'easeInOutSine',
  display:'none',
  complete: function(anim) {
    $(".transition").fadeOut("slow");
  }
})

//animation for intro text when page loaded
anime({
  targets: ['#intro-text','#intro-text1','#learnBtn'],
  translateY: -30,
  opacity:1,
  direction:'normal',
  duration:1000,
  easing:'easeInOutSine',
  delay: 2200
});

//animation for vehicles div
const vehicles_waypoint=new Waypoint({
  element:document.querySelector('#vehicles'),
  handler:function(){
    anime({
      translateY:60,
      targets:'#vehicles',
      opacity:1,
      direction:'normal',
      duration:1000,
      easing:'easeInOutSine'
    })
  },
  offset:'80%'
})
