const intro_arrow=document.querySelector('#intro-arrow');
const left_cars=document.querySelector('#left-model')

anime({
  targets: intro_arrow,
  translateY: 25,
  direction: 'alternate',
  duration:800,
  loop:true,
  easing: 'easeInOutSine'
});
