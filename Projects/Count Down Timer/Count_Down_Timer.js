const EndDate = new Date('17 May, 2025 16:59:00').getTime();
const StartDate = new Date().getTime();

let x = setInterval(function updateTimer() {
    const now = new Date().getTime();
    const distanceCovered = now - StartDate;
    const distancePending = EndDate - now;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;
    const oneSec = 1000;

    const days = Math.floor(distancePending / oneDay);
    const hrs = Math.floor((distancePending % oneDay) / oneHour);
    const mins = Math.floor((distancePending % oneHour) / oneMin);
    const secs = Math.floor((distancePending % oneMin) / oneSec);

    // Update countdown UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    // Progress bar update
    const totalDuration = EndDate - StartDate;
    const percentage = Math.min((distanceCovered / totalDuration) * 100, 100);

    document.getElementById("progress-bar").style.width = percentage + "%";

    if (distancePending <= 0) {
        clearInterval(x);
        document.getElementById("CountDown").innerHTML = "Expired";
        document.getElementById("progress-bar").style.width = "100%";
    }
}, 1000);
