const sliderImages = [
    "https://github.com/theatulanand/royalBrothers-Clone/blob/chinni/images/cities.png?raw=true",
    "https://github.com/theatulanand/royalBrothers-Clone/blob/chinni/images/rating.png?raw=true",
    "https://github.com/theatulanand/royalBrothers-Clone/blob/chinni/images/bike.png?raw=true",
   
    
]



const sliderContainer = document.querySelector("#sliderContainer");

function slidestart(){
    var count = 0;
 setInterval(function(){
     sliderContainer.innerHTML = null;
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
