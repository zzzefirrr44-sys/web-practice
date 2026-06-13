const burgerBtn = document.getElementById('burger-btn');
const navLinks = document.querySelector('.nav-links');

// Перемикання меню при кліку на бургер
burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Закриття меню при кліку на будь-який пункт (щоб не заважало)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});