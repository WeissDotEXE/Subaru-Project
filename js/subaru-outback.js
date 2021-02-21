const intro_arrow=document.querySelector('#intro-arrow');

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
  targets: '.intro-text',
  translateY: -30,
  opacity:1,
  direction:'normal',
  duration:1000,
  easing:'easeInOutSine',
  delay: 2200
});
//loop animation for intro arrow
anime({
    targets: intro_arrow,
    translateY: 25,
    direction: 'alternate',
    duration:700,
    loop:true,
    easing: 'easeInOutSine'
});

//animation for interior part with waypoint
const interior_waypoint = new Waypoint({
  element: document.querySelector('.interior'),
  handler: function() {
    anime({
      targets: '.interior',
      translateY:15,
      direction: 'normal',
      easing: 'easeInOutSine',
      duration:700,
      opacity:1,
      delay:700
    });
  },
  offset:'91%'
})

//animation for performance stats when seen
const performance_waypoint = new Waypoint({
  element: document.querySelector('#performance-highlight'),
  handler: function() {
    anime({
      targets: '#standard-hp',
      width: '75%', 
      easing: 'easeInOutQuad',
      duration:1400
    })
    anime({
      targets: '#standard-speed',
      width: '68%', 
      easing: 'easeInOutQuad',
      duration:1400
    })
    anime({
      targets: '#standard-acc',
      width: '82%', 
      easing: 'easeInOutQuad',
      duration:1400
    })
    anime({
      targets: '#sport-hp',
      width: '90%', 
      easing: 'easeInOutQuad',
      delay:400,
      duration:1400
    })
    anime({
      targets: '#sport-speed',
      width: '84%', 
      easing: 'easeInOutQuad',
      delay:400,
      duration:1400
    })
    anime({
      targets: '#sport-acc',
      width: '94%', 
      easing: 'easeInOutQuad',
      delay:400,
      duration:1400
    })
  },
  offset:'40%'
})

//animation for quote part
const quote_waypoint = new Waypoint({
  element: document.querySelector('.quote'),
  handler: function() {
    anime({
      targets: '#quote-txt',
      translateY: -27,
      direction: 'normal',
      easing: 'easeInOutSine',
      duration:1000,
      opacity:1,
      delay:300
    });
  },
  offset:'85%'
})