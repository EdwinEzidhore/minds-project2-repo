// SHOW MENU
const navmenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
            navmenu.classList.add('show-menu')
        })
}
    
if (navClose) {
    navClose.addEventListener('click', () => {
        navmenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')
const linkAction = () => {
    const navmenu = document.getElementById('nav-menu')
    navmenu.classList.remove('show-menu')
}
navLink.forEach(n => {
    n.addEventListener('click',linkAction)
});

// SCROLL HEADER
const bgheader = () => {
    
    const header = document.getElementById('header')
    this.scroll >= 50 ? header.classList.add('bg-header')
    :header.classList.remove('bg-header')    
}

window.addEventListener('scroll', bgheader)
bgheader()


// SHOW-SCROLL-UP
const scrollup = () => {
    const scrollup = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll'):scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)
scroll-up()