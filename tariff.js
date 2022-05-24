import {getData, displayData} from "./scripts/fetchScript.js";
import {navbar} from "./Components/navbar.js"

let navbar_div = document.getElementById("navbar-container");
navbar_div.innerHTML = navbar()

let url = "http://localhost:3000/bikes"

let data = await getData(url)
console.log(data)

let main_div = document.getElementById("main")

displayData(data, main_div)


