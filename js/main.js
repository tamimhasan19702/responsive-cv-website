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

// =============scroll section active========================================

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageXOffset

  sections.forEach( current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}