const payment_container  = document.querySelector("#payment-container");


    const id = JSON.parse(localStorage.getItem("idAndMonth")) || [];
    const payment = async() => {

        const res = await fetch(`http://localhost:3000/scooties/${id}`);
        const data = await res.json();
        displayData(data);

    }

payment();
const displayData = (data)=>{
   const cityname =  localStorage.getItem("cityName");
    // console.log(data);
    const container = document.createElement("div");
    container.setAttribute("id","paymentMain");

    const leftAndRight = document.createElement("div");
    leftAndRight.setAttribute("id","left-right");

    const left_part = document.createElement("div");
    const right_part = document.createElement("div");

    const image = document.createElement("img");
    image.src = data.url;

    const title  = document.createElement("h3");
    title.innerText = data.title;
    title.style.marginLeft = "250px";

    const kmCharge = document.createElement("p");
    kmCharge.innerText = data.month[1];

    const kmlimit =  document.createElement("p");
    kmlimit.innerText = "Km Limit";

    const kml = document.createElement("p");
    kml.innerText = "1500.0 kms/month"

    const excess = document.createElement("p");
    excess.innerText = "Excess km charge";

    const city = document.createElement("p");
    city.innerText = "City";

    const cityName = document.createElement("p");
    cityName.innerText = cityname;

    const total = document.createElement("p");
    total.innerText = `${data.month[0]} /Montly Rent | ₹ 1500 /Refundable Deposit`;
    total.setAttribute("id","total");

    const payment_button = document.createElement("button");
    payment_button.innerText = "BOOK NOW";
    payment_button.setAttribute("id","payment_button");
    payment_button.addEventListener("click",function(){
        paymentButton();
    })
    container.append(image,title);
    left_part.append(kmlimit,excess,city);
    right_part.append(kml,kmCharge,cityName);
    
    payment_container.append(container);
    leftAndRight.append(left_part,right_part);
    payment_container.append(leftAndRight);
    payment_container.append(total);
    payment_container.append(payment_button);
   
    
}

const paymentButton = ()=>{
    window.location.href = "gatway.html";
}

document.getElementById("location").innerText = localStorage.getItem("cityName")
    
    // modal data 
    const cityData = []

    function City(name, image) {
        this.name = name,
            this.image = image
    }

    cityData.push(new City("Agra", "https://i.ibb.co/xg4L7H4/1.png"));
    cityData.push(new City("Ahemdabad", "https://i.ibb.co/74ZNFPQ/2.png"));
    cityData.push(new City("Alleppey", "https://i.ibb.co/4TGDmBK/3.png"));
    cityData.push(new City("Amritsar", "https://i.ibb.co/CMkjRsb/4.png"));
    cityData.push(new City("Andman", "https://i.ibb.co/fvWd9Gr/5.png"));
    cityData.push(new City("Banglore", "https://i.ibb.co/SdQ8P54/6.png"));
    cityData.push(new City("Banglore Airport", "https://i.ibb.co/zQb5GCn/7.png"));
    cityData.push(new City("Bangkok", "https://i.ibb.co/2g4tst1/8.png"));
    cityData.push(new City("Belagavi", "https://i.ibb.co/TBYTMDL/9.png"));
    cityData.push(new City("Bhubaneshwar", "https://i.ibb.co/qMbSv9M/10.png"));
    cityData.push(new City("Bhuj", "https://i.ibb.co/4gnZ8MV/11.png"));
    cityData.push(new City("Calicut", "https://i.ibb.co/mJG8Wsc/12.png"));
    cityData.push(new City("Mount Abu", "https://i.ibb.co/KztsSm6/13.png"));
    cityData.push(new City("Mumbai", "https://i.ibb.co/vHd7CHZ/14.png"));
    cityData.push(new City("Mysore", "https://i.ibb.co/KWSzDvz/15.png"));
    cityData.push(new City("Gandhinagar", "https://i.ibb.co/NFVwjPH/16.png"));
    cityData.push(new City("Goa", "https://i.ibb.co/Hn7Z25J/17.png"));
    cityData.push(new City("Grugram", "https://i.ibb.co/pn1jmCv/18.png"));
    cityData.push(new City("Jaipur", "https://i.ibb.co/Bf8M3Hd/19.png"));
    cityData.push(new City("Indore", "https://i.ibb.co/fdtnV7n/20.png"));
    cityData.push(new City("Vizag", "https://i.ibb.co/VNk0rK7/21.png"));
    cityData.push(new City("Vijayawada", "https://i.ibb.co/YbKd7Xr/22.png"));
    cityData.push(new City("Udupi", "https://i.ibb.co/LCm9zc6/23.png"));
    cityData.push(new City("Surat", "https://i.ibb.co/LNPR2CS/24.png"));

    console.log(cityData);

    cityData.forEach(function (ele) {
        let cityDiv = document.createElement("div");
        cityDiv.id = "cityDiv";

        let modal = document.getElementById("myModal");

        let cityImage = document.createElement("img");
        cityImage.src = ele.image;

        cityDiv.append(cityImage);

        cityDiv.addEventListener("click", function () {
            localStorage.setItem("cityName", ele.name);
            modal.style.display = "none";
            document.getElementById("location").innerText = localStorage.getItem("cityName");
        })

        document.getElementById("modelCity").append(cityDiv)
    })

    // Get the modal
    let modal = document.getElementById("myModal");

    // Get the button that opens the modal
    let btn = document.getElementById("navLocation");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    if(localStorage.getItem("login") == "true"){
        changeNav();
    }
    
    function changeNav(){
        let box = document.getElementById("navLoginSignup");
    
        document.getElementById("signup").style.display = "none";
        document.getElementById("login").style.display = "none";
    
        let img = document.createElement("img");
    
        img.src = "https://d36g7qg6pk2cm7.cloudfront.net/assets/profile-f17aa1dfbd0cb562142f1dcb10bb7ad33e1ac8417ad29a1cdab7dfbfbbfe2f15.png"

        let name = document.createElement("p");

        name.innerHTML = "   " +  JSON.parse(localStorage.getItem("loginData")).name;

        name.style.color = "black"
    
        img.style.width = "45px";
        img.style.margin = "auto";

        box.style.marginRight = "15px"
    
        box.append(img,name);
    }