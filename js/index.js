const btn = document.getElementById('btn');
const toggleMenu = document.querySelector('#mobile-menu');

// TOGGLE MOBILE MENU
btn.addEventListener('click', () => {
    if(!toggleMenu.classList.contains('md:hidden')) {
        return toggleMenu.classList.toggle('md:hidden')
    } else {
        return toggleMenu.classList.toggle('hidden')

    }

})