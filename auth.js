
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
        document.getElementById("authBox").style.display = "block";
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
    document.getElementById("authBox").style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    document.getElementById("authBox").style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("authBox").style.display = "block";
    }
}


const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
// loginBtn.onclick = (() => {
//     loginForm.style.marginLeft = "0%";
//     loginText.style.marginLeft = "0%";
// });
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});

let loginTop = document.getElementById("loginTop");
loginTop.style.backgroundColor = "#ffe066";
loginTop.style.borderRadius = "10px";
let signupTop = document.getElementById("signupTop");
signupTop.style.borderRadius = "10px";

signupTop.addEventListener("click", function () {
    signupTop.style.backgroundColor = "#ffe066";
    loginTop.style.backgroundColor = "white";
})

loginTop.addEventListener("click", function () {
    loginTop.style.backgroundColor = "#ffe066";
    signupTop.style.backgroundColor = "white";
})


async function addData() {

    event.preventDefault();

    try {

        let name = document.getElementById("userName").value;

        let email = document.getElementById("userEmail").value;

        let mobile = document.getElementById("userMobile").value;

        let password = document.getElementById("userPass").value;

        let user = await fetch('http://localhost:3000/users');

        let userData = await user.json();

        // console.log(userData)

        var isExist = false;

        userData.forEach(function(ele){
            if(ele.email == email){
                document.getElementById("invalidPass").style.display = "block";
                document.getElementById("alertTxt").innerText = "User already exist !!"
                setTimeout(() => {
                    document.getElementById("invalidPass").style.display = "none";
                },2000);
                isExist = true;
            }
        })

        if(isExist){
            return;
        }

        let body = {
            name,
            email,
            mobile,
            password
        };

        let res = await fetch(`http://localhost:3000/users`,{
            method: "POST",
            body: JSON.stringify(body),
            headers:{
                'Content-Type': "application/json"
            }
        });

    console.log(data);

    } catch (error) {
        console.log("Errir is : " + error)
    }

}

async function authData(){
    event.preventDefault();
    try {
        
        let res = await fetch(`http://localhost:3000/users`);

        let data = await res.json();

        verifyData(data);

        console.log(data);
    } catch (error) {
        console.log("Error is" + error)
    }

}

function verifyData(data){
    let email = document.getElementById("authEmail").value;
    let pass = document.getElementById("authPass").value;
    let isLogin = false;

    data.forEach(function(ele){
        if(ele.email == email && ele.password == pass){

            localStorage.setItem("loginData",JSON.stringify(ele));
            localStorage.setItem("login","true");
    
            isLogin = true;
            // alert("Login Success");

            window.location.href = "/tariff.html";
            return false;

            changeNav(1);
        }
    });

    if(isLogin == false){
        document.getElementById("invalidPass").style.display = "block";
        document.getElementById("alertTxt").innerText = "Invalid email / password combination";

        setTimeout(() => {
            document.getElementById("invalidPass").style.display = "none"
        }, 2000);
    }

    return false;
}

if(localStorage.getItem("login") == "true"){
    changeNav(0);
}

function changeNav(i){
    if(i == 1){
        window.location.reload();
    }
    let box = document.getElementById("navLoginSignup");
    box.append("");
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

    return false;
}