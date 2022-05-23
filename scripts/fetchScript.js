export const getData = async(url) => {
    let res = await fetch(url)
    let data = await res.json()
    return data
}

let days = ["HOURLY", "7 DAYS", "15 DAYS", "30 DAYS"]

export const displayData = (data, parentNode) => {
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
        days_li.className = "active"

        days_ul.append(days_li)
    }

    days_ul.className = "days_div_element"

    // hourly details
    let innerDiv = document.createElement("div")
        
    // mon-Thu
    let weekday_head = document.createElement("h5")
    weekday_head.innerHTML = "Mon-Tue"

    //1st 12 hrs condition

    let first_con = document.createElement("p")
    first_con.innerHTML = "<p>(Min 12 hrs booking)</p> <p>Booking Time (0- 24 hrs)</p> <p>Booking Time (>24 hrs)</p>"

    innerDiv.append(weekday_head, first_con)


    days_div.append(days_ul)
    days_div.className ="days_div";

    let btn = document.createElement("button")
    btn.innerHTML = "BOOK NOW"

    div.append(title, bike_img, days_div, innerDiv, btn)
    parentNode.append(div)

    });
    
}
