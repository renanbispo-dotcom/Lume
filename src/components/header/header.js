const btnMobile = document.getElementById('btn-mobile');

function toggleMenu () {
    const nav = document.getElementById('menu-opcoes');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu)