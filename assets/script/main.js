const btnOpen = document.querySelector('.fa-bars')

const btnClose = document.querySelector('.fa-times')



function toggleMenu(){
    const nav = document.querySelector('.nav__bar-menu')
    nav.classList.toggle('active')
    btnOpen.classList.toggle('active')
    btnClose.classList.toggle('active')
}

btnOpen.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);