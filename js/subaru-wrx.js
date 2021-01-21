const intro_arrow=document.querySelector('#intro-arrow');

anime({
  targets: intro_arrow,
  translateY: 25,
  direction: 'alternate',
  duration:800,
  loop:true,
  easing: 'easeInOutSine'
});