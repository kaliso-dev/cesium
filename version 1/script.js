document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.toggle-checkbox');
    const pages = document.querySelector('.pages');

    burgerMenu.addEventListener('click', () => {
        pages.classList.toggle('active');
    });
});