const paynow=()=>{
    const adress = document.querySelector("#input_address").value;
    const landmark = document.querySelector("#input_landmark").value;
    const card = document.querySelector("#input_card").value;
    const csv = document.querySelector("#input_csv").value;
    if(card.length != 12 || csv.length != 3){
        alert("please enter correct details");
    }
    else{
        alert("Payment is successfull!");
    }
}

