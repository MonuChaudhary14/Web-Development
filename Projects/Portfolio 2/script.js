const skill_fill = document.querySelectorAll('.skill-indicator');
const skill_percentage = document.querySelectorAll('.skill-percentage');
const work_indicator = document.querySelector('.work-indicator');
const close_button = document.querySelector('.close-icon');
const open_button = document.querySelector('.side-bar-icon');
const side_bar_container = document.querySelector('.side-bar-container');
const nav_image_container = document.querySelector('.nav-image-container');
const side_bar_icon = document.querySelector('.side-bar-icon');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('skill-fill');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skill_fill.forEach(fill => {
    observer.observe(fill);
});


const observer_percentage = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('skill-percentage-indicator');
        }
    });

}, { threshold: 0.2 });

skill_percentage.forEach(percentage => {
    observer_percentage.observe(percentage);
});


const observer_experience = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {
        entries[0].target.classList.add('work-bar');
    }

}, { threshold: 0.3 });

observer_experience.observe(work_indicator);



open_button.addEventListener('click', () => {
    side_bar_container.style.animation = 'slideIn 0.4s ease forwards';
    side_bar_icon.style.display = 'none';
    nav_image_container.style.display = 'none';
    side_bar_container.style.display = 'block';
    close_button.style.display = 'block';
});

close_button.addEventListener('click', () => {
    side_bar_icon.style.display = 'block';
    nav_image_container.style.display = 'flex';
    side_bar_container.style.animation = 'slideOut 0.4s ease forwards';
    setTimeout(() => {
        side_bar_container.style.display = 'none';
    }, 400);
    close_button.style.display = 'none';
});