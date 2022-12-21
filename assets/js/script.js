'use strict'

// element toggle function

const elemToggleFunc = function (elem) {
    elem.classList.toggle("active")
}

// navbar toggle
const navbar = document.querySelector("[data-navbar]")
const overlay = document.querySelector("[data-overlay]")
const navCloseBtn = document.querySelector("[data-nav-close-btn]")
const navOpenBtn = document.querySelector("[data-nav-open-btn]")
const navLinks = document.querySelectorAll("[data-nav-link]")

const navElemArr = [overlay, navCloseBtn, navOpenBtn]

// close navbar when click on any nacbar links
// for (let i = 0; i < navLinks.length; i++) {
//     navElemArr.push(navLinks[i])
// }

// add event on all element
for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function(){
        elemToggleFunc(navbar)
        elemToggleFunc(overlay)
    })
}