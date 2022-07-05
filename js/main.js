'use strict'
// ===================mobile-menu toggle==============================

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click' , () => {
            nav.classList.toggle('show-menu')
        })
    }

}

showMenu('nav-toggle','nav-menu');

// =================Remove mobile menu=======================================

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navmenu = document.querySelector('#nav-menu')
    navmenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click' , linkAction))
