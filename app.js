// UI for Nav
const btnicon = document.querySelector(".icon");
const nav = document.querySelector("nav");
const colors = document.querySelectorAll(".choose");
const html = document.querySelector("html");

btnicon.addEventListener("click", ()=>{
    nav.classList.toggle("active");
})

let getColor = null;
colors.forEach( color => color.addEventListener("click", ()=>{
    // console.log(color.type);
    html.className = "";
    switch(color.type){
        case "white":
        html.className = "";
        break;
        case "black":
        html.className = "dark";
        break;
        case "blue":
        html.className = "blue";
        break;
        case "green":
        html.className = "green";
        break;
        case "red":
        html.className = "red";
        break;
    }
}));



// UI for clock
const hourel = document.querySelector(".hour-hand"),
      minel = document.querySelector(".min-hand"),
      secel = document.querySelector(".second-hand");

const date = document.querySelector(".date"),
      days = document.querySelectorAll(".days");

const ampm = document.getElementById("amorpm");

const months = ["Jan","Feb","May","Apr","Mar","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const scale = (num, inmin, inmax, outmin, outmax) => (num-inmin) * (outmax-outmin) / (inmax-inmin) + outmin;

function timeUpdate(){
    const now = new Date();

const getHour = now.getHours();
const getMin = now.getMinutes();
const getSec = now.getSeconds();
const getdate = now.getDate();
const getMonth = now.getMonth();
const getday = now.getDay();
const hour = getHour % 12;

days.forEach( day => {
    day.classList.remove("select");
}
)

days[getday].classList.add("select");

date.innerHTML = `${months[getMonth]} <span class="badge">${getdate}</span>`;

ampm.innerText = `${getHour >= 12 ? "PM" : "AM"}`;

    hourel.style.transform = `rotate(${scale(hour, 0, 12, 0, 360)}deg)`;
    minel.style.transform = `rotate(${scale(getMin, 0, 60, 0, 360)}deg)`;
    secel.style.transform = `rotate(${scale(getSec, 0, 60, 0, 360)}deg)`;
}

setInterval(timeUpdate, 1000);
timeUpdate();




