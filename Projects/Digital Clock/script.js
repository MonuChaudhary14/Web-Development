const hour = document.querySelector('.hour-container');
const minute = document.querySelector('.minute-container');
const second = document.querySelector('.second-container');
const format = document.querySelector('.format-container');


function get_time(){
    let time = new Date();

    let hours_time = time.getHours().toString().padStart(2, "0");
    let minute_time = time.getMinutes().toString().padStart(2, "0");
    let second_time = time.getSeconds().toString().padStart(2, "0");
    let display_hour = hours_time % 12 || 12;


    let time_format = hours_time < 12 ? "AM" : "PM";

    hour.innerText = `${(display_hour)%12}:`;
    minute.innerText = `${minute_time}:`;
    second.innerText = `${second_time}`;
    format.innerText = `${time_format}`;

    setTimeout(get_time, 1000);
}

get_time();


