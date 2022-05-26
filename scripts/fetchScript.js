export const getData = async(url) => {
    let res = await fetch(url)
    let data = await res.json()
    return data
}

let days = ["HOURLY", "7 DAYS", "15 DAYS", "30 DAYS"]
let booking_form = document.getElementById("form_wrapper")
let main_page = document.getElementById("main")

export const displayData = (data, parentNode) => {
    booking_form.style.display = "none"
    data.forEach(el => {
    
    let div = document.createElement("div")

    let title = document.createElement("h4")
    title.innerHTML = el.title

    let bike_img = document.createElement("img")
    bike_img.src = el.url;

    let days_div = document.createElement("div")
    let days_ul = document.createElement("ul")
    for(let i=0; i<days.length; i++){
        let days_li = document.createElement("li")
        days_li.innerHTML = days[i]
        days_li.addEventListener("click", (e) => {
            days_li.className = "active"
            console.log(e.target)
        })
        

        days_ul.append(days_li)
    }

    days_ul.className = "days_div_element"

     // hourly details
    let innerDiv = document.createElement("div")

    // mon-Thu
    let weekday_head = document.createElement("h5")
    weekday_head.innerHTML = "Mon-Thu"
    weekday_head.style.padding = "10px";
    
    // min booking hrs 
    let min_booking = document.createElement("p")
    min_booking.innerHTML = "(Min 10 hrs booking)"
    min_booking.style.fontSize = "11px";
    min_booking.style.padding = "10px";

    //1st 12 hrs condition
    let first_con = document.createElement("table")
    first_con.innerHTML = `<tr><td>Booking Time (0- 24 hrs)</td><td><strong>${el.hourly[0]}</strong>/hr</td></tr> <tr><td>Booking Time (>24 hrs)</td><td><strong>${el.hourly[0]}</strong>/hr</td></tr>`
    

    innerDiv.append(weekday_head, min_booking, first_con)
    innerDiv.style.textAlign = "left"
    
    //Weekends
    let weekends = document.createElement("div")
    //Fri-sun
    let weekends_head = document.createElement("h5")
    weekends_head.innerHTML = "Fri-Sun"
    weekends_head.style.padding = "10px"

    //min for weekends booking hrs
    let min_weekends = document.createElement("p")
    min_weekends.innerHTML = "(Min 24hrs booking)"
    min_weekends.style.fontSize = "11px";
    min_weekends.style.padding = "10px";
    // condition rules
    let weekends_cond = document.createElement("table")
    weekends_cond.innerHTML = `<tr><td>Booking time(>24hrs)</td><td><strong>${el.hourly[0]}</strong>/hr</td></tr>`
    weekends.append(weekends_head, min_weekends, weekends_cond)
    weekends.style.textAlign = "left"

    //Extras
    let extras = document.createElement("div")
    // Heading Extras
    let extras_head = document.createElement("h5")
    extras_head.innerHTML = "Extras"
    extras_head.style.padding = "10px"

    let extras_con1 = document.createElement("table");
    extras_con1.innerHTML = `<tr><td>KM Limit</td><td><strong>${el.hourly[1]}</strong>/hr </td></tr><tr><td>Excess KM charges</td><td><strong>${el.hourly[2]}</strong>/km</td></tr>`


    extras.append(extras_head, extras_con1)
    extras.style.textAlign = "left"

    days_div.append(days_ul)
    days_div.className ="days_div";

    let btn = document.createElement("button")
    btn.innerHTML = "BOOK NOW"
    btn.addEventListener("click", function(){
        booking_form.style.display = "flex";
        // main_page.style.opacity = 0.1

    })

    div.append(title, bike_img, days_div, innerDiv, weekends, extras, btn)
    parentNode.append(div)
    });
    
}

