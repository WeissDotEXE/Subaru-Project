//variables for car info (header and close button)
const close_infoBtn=document.querySelector(".close-info");
const car_info=document.querySelector('.car-info');
const car_info1=document.querySelector('.car-info1');
const wrx_header=document.querySelector('#wrx-info');
const wrx_info=document.querySelector('#wrx-info1');
const impreza_header=document.querySelector('#impreza-info');
const impreza_info=document.querySelector('#impreza-info1');
const cards=document.querySelector('.card')
//variables for cards for later use
const wrxBtn=document.querySelector('#wrxBtn');
const imprezaBtn=document.querySelector('#imprezaBtn');


let car_visible=0; // variable to check if card is clicked
//functions for cards when are clicked

wrxBtn.addEventListener('click',function(){
  wrx_header.style.display='flex';
  wrx_info.style.display='table';
  return car_visible=1;
})
imprezaBtn.addEventListener('click',function(){
  impreza_header.style.display='flex';
  impreza_info.style.display='inline';
  return car_visible=0;
})



// close button function
close_infoBtn.addEventListener('click',function(){
  car_info.style.display='none';
  car_info1.style.display='none';
  if(car_visible===0){
    console.log("0");
  }else{
    console.log("1");
  }
})

// function for 
function media_query(x) {
  if (x.matches) { // Media Query for mobile/600px width
    
  } else {// Media Query for desktop
    wrxBtn.addEventListener('click',function(){
      anime({
        targets: '.carsBtn',
        translateX: 300,
        easing: 'easeInQuint',
        duration: 600
      });
    })
    
    // close button function
    close_infoBtn.addEventListener('click',function(){
      anime({
        targets: '.carsBtn',
        translateX: 0,
        easing: 'easeInOutQuint',
        duration: 500
      });
    })
  }
}

var x = window.matchMedia("(max-width: 600px)");
media_query(x);
x.addListener(media_query);