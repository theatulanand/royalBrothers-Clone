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
    bike_img.src = el.url

    let days_div = document.createElement("div")
    let days_ul = document.createElement("ul")
    for(let i=0; i<days.length; i++){
        let days_li = document.createElement("li")
        days_li.innerHTML = days[i]

        days_ul.append(days_li)
    }

    days_div.append(days_ul)

    div.append(title, bike_img, days_div)
    parentNode.append(div)

    });
    
}
