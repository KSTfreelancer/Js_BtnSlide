var photos = ["media/0.jpg","media/1.jpg","media/2.jpg","media/3.jpg","media/4.jpg","media/5.jpg","media/6.jpg",];
var back = document.querySelector('.back');
var next = document.querySelector('.next');
var photo = document.querySelector('img')
// console.log(photos.src='media/1.jpg')
 var count = 0;
next.addEventListener('click',function(){
  count++;
  if (count>=photos.length){
    count=0;
    photo.src = photos[count];
    
  }else{
    photo.src = photos[count];
  }
});

back.addEventListener('click',function(){
  count--;
  if (count < 0){
    count=photos.length-1;
    photo.src = photos[count];
    
  }else{
    photo.src = photos[count];
  }
});


