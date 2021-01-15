const wrxBtn=document.querySelector('#wrxBtn');
const imprezaBtn=document.querySelector("#imprezaBtn");

//animations for cards
wrxBtn.addEventListener('mouseover', function(){
    anime({
        targets: '#wrx-arrow',
        translateX: 25,
        direction: 'alternate',
        duration:800,
        loop:2,
        easing: 'easeInOutSine'
      });
})
imprezaBtn.addEventListener('mouseover',function(){
    anime({
        targets: '#impreza-arrow',
        translateX: 25,
        direction: 'alternate',
        duration:800,
        loop:2,
        easing: 'easeInOutSine'
      });
})
