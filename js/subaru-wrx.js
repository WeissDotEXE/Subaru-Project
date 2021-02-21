const intro_arrow=document.querySelector('#intro-arrow');
const left_cars=document.querySelector('#left-model')

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

//animation for intro text
anime({
  targets:'.intro-text',
  translateY: -30,
  opacity:1,
  direction:'normal',
  duration:1000,
  easing:'easeInOutSine',
  delay: 2200
});

//animation for arrow(loop)
anime({
  targets: intro_arrow,
  translateY: 25,
  direction: 'alternate',
  duration:800,
  loop:true,
  easing: 'easeInOutSine',
  offset:0
});

//animation for highlights txt
const highlights_waypoint=new Waypoint({
  element:document.querySelector("#highlight-1"),
  handler:function(){
    anime({
      translateY:35,
      targets:'#highlight-1',
      opacity:1,
      direction:'normal',
      duration:800,
      easing:'easeInOutSine'
    })
  },
  offset:'61%'
})

//animation for features li
const features_li_first_waypoint=new Waypoint({
  element:document.querySelector("#feature-txt"),
  handler:function() { 
    anime({
      targets: ['#info1','#info2','#info3'],
      translateX: -20,
      opacity:1,
      duration:1000,
      delay: anime.stagger(100) // increase delay by 100ms for each elements.
    });
  },
  offset:'23%'
})

//animation for subaru engine(featrues li 2)
const features_li_first_second=new Waypoint({
  element:document.querySelector(".infos2"),
  handler:function() { 
    anime({
      targets:'.infos2',
      translateX:-20,
      opacity:1,
      duration:1000,
      delay: anime.stagger(100) // increase delay by 100ms for each elements.
    });
  },
  offset:'42%'
})
