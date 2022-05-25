const sliderImages = [
   
     "img/betterindia.jpg",
     "img/economictime.jpg",
     "img/inc42.jpg",
     "img/moneycontrol.jpg",
     "img/thehindu.jpg",
     "img/timeofindia.jpg",

]

const sliderContainer = document.querySelector("#sliderContainer");

function slidestart(){
    var count = 0;
 setInterval(function(){
    //  sliderContainer.innerHTML = null;
    
    if(count===sliderImages.length){
        count=0;
    }
    const sliderBox = document.createElement("div");
    sliderBox.setAttribute("id","sliderDiv");
    
    const sliderimg = document.createElement("img");
    sliderimg.src = sliderImages[count];

    sliderimg.setAttribute("id","sliderimg");

    sliderBox.append(sliderimg);

    sliderContainer.append(sliderBox);
    count++;

 },1500)
   
}
slidestart();