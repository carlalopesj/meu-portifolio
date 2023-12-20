function toggleMenu() {
    const ul = document.getElementById('ul');
    ul.classList.toggle('menu-open');
}

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', toggleMenu);