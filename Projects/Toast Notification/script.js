const submit = document.querySelector('.submit-button');
const failed = document.querySelector('.failed-button');
const information = document.querySelector('.information-button');
const warning = document.querySelector('.warning-button');
const overlay = document.querySelector('.overlay-container');
const slider = document.querySelector(".slider")
const para = document.querySelector('.para');

submit.addEventListener('click', () =>{

    let check = document.querySelector('.overlay-animation');

    if(check){
        check.classList.remove("overlay-animation");
        slider.classList.remove('slider-animation');

    }

    slider.style.backgroundColor = "green";
    overlay.style.backgroundColor = "rgb(5, 94, 6)";

    para.innerText = "Submit button clicked";

    overlay.classList.add('overlay-animation');
    slider.classList.add('slider-animation');


});

failed.addEventListener('click', () =>{

    let check = document.querySelector('.overlay-animation');

    if(check){
        check.classList.remove("overlay-animation");
        slider.classList.remove('slider-animation');

    }

    slider.style.backgroundColor = "red";
    overlay.style.backgroundColor = "rgb(94, 5, 5)";

    para.innerText = "Failed button clicked";

    overlay.classList.add('overlay-animation');
    slider.classList.add('slider-animation');

});

information.addEventListener('click', () =>{

    let check = document.querySelector('.overlay-animation');

    if(check){
        check.classList.remove("overlay-animation");
        slider.classList.remove('slider-animation');

    }

    slider.style.backgroundColor = "blue";
    overlay.style.backgroundColor = "rgb(5, 5, 94)";

    para.innerText = "Information button clicked";

    overlay.classList.add('overlay-animation');
    slider.classList.add('slider-animation');

});

warning.addEventListener('click', () =>{

    let check = document.querySelector('.overlay-animation');

    if(check){
        check.classList.remove("overlay-animation");
        slider.classList.remove('slider-animation');

    }

    slider.style.backgroundColor = "orange";
    overlay.style.backgroundColor = "rgb(94, 94, 5)";

    para.innerText = "Warning button clicked";

    overlay.classList.add('overlay-animation');
    slider.classList.add('slider-animation');

});
