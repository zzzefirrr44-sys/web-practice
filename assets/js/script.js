const burgerBtn = document.getElementById('burger-btn');
const navLinks = document.querySelector('.nav-links');

burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Опціонально: зміна іконки на хрестик
    const icon = burgerBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Закриття меню при натисканні на посилання
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burgerBtn.querySelector('i').classList.add('fa-bars');
        burgerBtn.querySelector('i').classList.remove('fa-times');
    });
});