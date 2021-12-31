var closeOverlay = document.querySelector('.close');
var idOverlay = document.querySelector('#overlay');
var nextBtn = document.querySelector(".next i");
var prevBtn = document.querySelector(".prev i");
var imgs = document.querySelectorAll('.image img');
var showImage = document.querySelector('.gallery-inner img');
var currentIndex;
function showOverlay(){
    idOverlay.classList.remove('close-js');
}
function hideOverlay(){
    idOverlay.classList.add('close-js');
}
closeOverlay.addEventListener('click', hideOverlay);
for (var img of imgs){
    img.addEventListener('click', showOverlay);
}
imgs.forEach((img,index)=>{
    img.addEventListener('click', function(){
        currentIndex = index;
        showImage.src = imgs[currentIndex].src;
    })
})
nextBtn.addEventListener('click', function(){
    if(currentIndex <= 7)
    {
        showImage.src = imgs[currentIndex++].src;
        prevBtn.classList.remove('hide-btn');
    }
    else{
        nextBtn.classList.add('hide-btn');
    }
});
prevBtn.addEventListener('click', function(){
    if(currentIndex >= 0)
    {
        showImage.src = imgs[currentIndex--].src;
        nextBtn.classList.remove('hide-btn');
    }
    else{
        prevBtn.classList.add('hide-btn');
    }
});



