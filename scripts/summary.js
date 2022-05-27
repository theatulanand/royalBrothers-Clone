import { navbar } from "./Components/navbar.js";
import { footer } from "./Components/footer.js";

let navbar_div = document.getElementById("navbar-container")
//navbar_div.innerHTML = navbar()


let footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()

let data = JSON.parse(localStorage.getItem("bookingDate"));
console.log(data);

let pickupd = document.querySelector(".pickupd");
pickupd.innerHTML = `<p> ${data.pick_up_date} </p>`;

let pickupt = document.querySelector(".pickupt");
pickupt.innerHTML = `<p> ${data.pick_up_time}`;

let dropoffd = document.querySelector(".dropoffd");
dropoffd.innerHTML = `<p>${data.drop_date}</p>`;

let dropofft = document.querySelector(".dropofft");
dropofft.innerHTML = `<p>${data.drop_time}</p>`;

let price = JSON.parse(localStorage.getItem("price"))
console.log(price)


let price_div = document.querySelector(".price")
price_div.innerHTML = `<h4>Total </h4> <span> <strong>₹ ${price}</strong></span>`


//getting data 
let bike_id = JSON.parse(localStorage.getItem("product_id"))

let url = `http://localhost:3000/bikes/${bike_id}`;

const getData = async() => {
  let res = await fetch(url);
  let bike = await res.json();
  console.log(bike);
  showData(bike);
};
getData();


let bike = document.getElementById("bike_image")
const showData = (data1) => {
  let div = document.createElement("div");
  let title = document.createElement("h3");
  title.innerHTML = data1.title;

  let bike_img = document.createElement("img");
  bike_img.src = data1.url;

 
    div.append(bike_img, title)
    bike.append(div)
}

let url1 = `http://localhost:3000/bikes/${bike_id}`;

const getKM = async() => {
    let res = await fetch(url1)
    let data = await res.json()
    showKM(data)
}
getKM()

let km = document.querySelector(".km_limit")
let excess_km = document.querySelector(".excess_km")
const showKM = (data2) => {
    let div = document.createElement("div")

    let km_limit = document.createElement("p")
    km_limit.innerHTML = `<p>Km Limit(?)</p> <span>${data2.HOURLY.km}</span>` 

    let excess_kms = document.createElement("p")
    excess_kms.innerHTML = `<p>Excess Limit(?)</p> <span>${data2.HOURLY.Excess} / km</span>`

    excess_km.append(excess_kms)
    div.append(km_limit)

    km.append(div)
}


// booking 

let booking_div = document.querySelector(".booking_price")
booking_div.innerHTML = `<p>Booking Fees </p> <span><strong>₹ ${price}</strong></span>`

let cgst = (price/ 100) * 14

let cgst_div = document.querySelector(".cgst")
cgst_div.innerHTML = `<p>CGST(14%)</p> <span><strong>₹ ${Math.round(cgst, 4)} </strong></span>`

let sgst_div = document.querySelector(".sgst")
sgst_div.innerHTML = `<p>SGST(14%)</p> <span><strong>₹ ${Math.round(cgst, 4)} </strong></span>`

let refund = document.querySelector(".refundable")
refund.innerHTML = `<p>Refundable Deposit</p> <span><strong>₹ ${200.00} </strong></span>`

let total = price + cgst + cgst + 200

let total_div = document.querySelector(".total")
total_div.innerHTML = `<p><strong> Total Payable Amount</p> <span> ₹ ${Math.round(total)} </strong> </span>`

let make_pay = document.querySelector(".make_payment")
make_pay.innerHTML = `<button>Make Payment</button`;

make_pay.addEventListener("click",function(){
  window.location.href = "./gatway.html"
})





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

  let name = document.createElement("p").innerHTML = "  Atul Kumar";

  name.innerHTML = "   " +  JSON.parse(localStorage.getItem("loginData")).name;

  name.style.color = "black"

  img.style.width = "45px";
  img.style.margin = "auto";

  box.style.marginRight = "15px"

  box.append(img,name);

  return false;
}
