const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('menu-opcoes');

function toggleMenu () {
    nav.classList.toggle('active');
    btnMobile.setAttribute('aria-expanded', nav.classList.contains('active'));
}

if (btnMobile && nav) {
    btnMobile.setAttribute('aria-expanded', 'false');
    btnMobile.addEventListener('click', toggleMenu);
}
