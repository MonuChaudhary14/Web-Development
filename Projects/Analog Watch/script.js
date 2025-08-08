const hour_hand = document.querySelector(".hour-hand");
const minute_hand = document.querySelector(".minute-hand");
const second_hand = document.querySelector(".second-hand");

function get_time(){
    let time = new Date();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours() % 12;

    let secondsDeg = seconds * 6; 
    let minutesDeg = (minutes + seconds / 60) * 6; 
    let hoursDeg = (hours + minutes / 60) * 30;   

    // Apply rotation
    second_hand.style.transform = `rotate(${secondsDeg}deg)`;
    minute_hand.style.transform = `rotate(${minutesDeg}deg)`;
    hour_hand.style.transform = `rotate(${hoursDeg}deg)`;

    requestAnimationFrame(get_time);
}

get_time();
