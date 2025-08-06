const loginBtn = document.querySelector('.login-button');
const signupBtn = document.querySelector('.signup-button');
const slide_right = document.querySelector('.slide-right');
const slide_left = document.querySelector('.slide-left');

const slider1 = document.querySelector('.slider1'); 
const slider2 = document.querySelector('.slider2'); 

loginBtn.addEventListener('click', () => {
    slider1.classList.add('.slide-right');
    slider2.classList.add('.slide-left'); 
});

signupBtn.addEventListener('click', () => {
    
    slider1.classList.remove('.slide-right');
    void slider.offsetWidth; 
    slider2.classList.remove('.slide-left');
    void slider.offsetWidth; 
    slider1.classList.add('slide-right1');
    slider2.classList.add('slide-left1');

});

