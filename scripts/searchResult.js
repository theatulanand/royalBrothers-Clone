import { navbar } from "./Components/navbar.js";
import { footer } from "./Components/footer.js";

let navbar_div = document.getElementById("navbar-container");
navbar_div.innerHTML = navbar();

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

let difference, time;

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

let bike_id = JSON.parse(localStorage.getItem("product_id"));

let url = `http://localhost:3000/bikes/${bike_id}`;

const getData = async () => {
  let res = await fetch(url);
  let bike = await res.json();
  console.log(bike);
  showData(bike);
};
getData();

let item_div = document.querySelector(".itemsection");

const showData = (data1) => {
  let div = document.createElement("div");

  let title = document.createElement("h4");
  title.innerHTML = data1.title;

  let bike_img = document.createElement("img");
  bike_img.src = data1.url;

  let booking_div = document.createElement("div");

  let pickup_time = document.createElement("h5");
  pickup_time.innerHTML = data.pick_up_time;

  let pickDate = document.createElement("p");
  pickDate.innerHTML = data.pick_up_date;

  let btn = document.createElement("button");
  btn.innerHTML = "BOOK NOW";
  btn.addEventListener("click", () => {
      location.href = "summary.html"
  })

  let dropof_time = document.createElement("h5");
  dropof_time.innerHTML = data.drop_time;

  let dropDate = document.createElement("p");
  dropDate.innerHTML = data.drop_date;

  let p = new Date(data.pick_up_date);
  let d = new Date(data.drop_date);
  difference = Math.abs(d.getTime() - p.getTime()) / 36e5;
  let price_cal = difference * Number(data1.HOURLY.price);

  time = SplitTime(difference);

  let searchDuration_div = document.querySelector(".sd");
  searchDuration_div.innerHTML = `<p>${time}</p>`;

  let price = document.createElement("h4");
  price.innerHTML = "₹ " + price_cal;

  localStorage.setItem("price", JSON.stringify(price_cal))

  booking_div.append(pickup_time, pickDate, dropof_time, dropDate);
  booking_div.classList.add("booking_div");

  div.append(title, bike_img, booking_div, price, btn);

  item_div.append(div);
};

// calculcate the days
function SplitTime(numberOfHours) {
  var Days = Math.floor(numberOfHours / 24);
  var Remainder = numberOfHours % 24;
  var Hours = Math.floor(Remainder);
  return `Days ${Days} Hours ${Hours}`;
}

