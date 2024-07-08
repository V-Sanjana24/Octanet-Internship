let menu = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');
let toggleModeBtn = document.querySelector('.toggle-mode i');

menuBtn.addEventListener('click', function () {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', function () {
    menu.classList.remove('active');
});

toggleModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        toggleModeBtn.classList.replace('fa-moon', 'fa-sun');
    } else {
        toggleModeBtn.classList.replace('fa-sun', 'fa-moon');
    }
});
