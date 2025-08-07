const nav = document.querySelector('.nav-bar');
let currentPosition = 0;
let timeoutId;

document.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > currentPosition) {
        nav.classList.add('scroll-down');

        // Clear previous timeout
        clearTimeout(timeoutId);

        // Set new timeout
        timeoutId = setTimeout(() => {
            nav.classList.remove('scroll-down');
        }, 5000);
    }

    currentPosition = scrollTop;
});
