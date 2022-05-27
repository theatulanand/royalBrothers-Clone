import { navbar } from "./Components/navbar.js";
import { footer } from "./Components/footer.js";

let navbar_div = document.getElementById("navbar-container");

navbar_div.innerHTML = navbar();

let footer_div = document.getElementById("footer");

footer_div.innerHTML = footer();

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

  let btn = document.createElement("button");
  btn.innerHTML = "BOOK NOW";

  

  div.append(title, bike_img, btn);
  item_div.append(div);
};
