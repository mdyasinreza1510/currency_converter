const BASE_URL= "https://fxapi.app/api";
let dropdown =document.querySelectorAll(".dropdown select")
let btn = document.querySelector("#button");
let fromcurr=document.querySelector(".from select");
let tocurr=document.querySelector(".to select");
let finalmsg=document.querySelector("#msg");

for( let select of dropdown){
    for ( currcode in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=currcode;
        newoption.value=currcode;
        select.append(newoption)
    }
}

btn.addEventListener("click",async(evt)=>{
evt.preventDefault();

let amount=document.querySelector(".amount input");

let amtval=amount.value;

console.log(amtval)

const url= `${BASE_URL}/${fromcurr.value}/${tocurr.value}.json`;

let response = await fetch(url);

let dta =await response.json();

let exrate =dta.rate;

console.log(exrate)

let finalamt= amtval*exrate;

console.log(finalamt);
msg.innerText=`${amtval}${fromcurr.value} = ${finalamt}${tocurr.value}`
})
