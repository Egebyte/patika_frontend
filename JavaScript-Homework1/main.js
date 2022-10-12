const USERNAME = prompt("Adınız lütfen...");
const days =[
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
]

let userNameDOM = document.querySelector("#userName");
userNameDOM.innerHTML = ` ${USERNAME}`;

let dateTimeDOM = document.querySelector("#dateTime"); 


setInterval(() => {
    let today = new Date();

    hour = today.getHours();
    minute = today.getMinutes();
    seconds = today.getSeconds();
    day = today.getDay();
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;          
    seconds = seconds < 10 ? "0" + seconds : seconds;
    dateTimeDOM.innerHTML = `${hour}:${minute}:${seconds}  ${days[day]}`;    
    
}, 1000);
