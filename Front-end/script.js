const nav = document.querySelector('nav')
const hero = document.querySelector('header')
const backToTop = document.querySelector('#back-to-top')
const titles = ['Data Analyst', 'Full-stack Developer', 'Athlete', 'Artist']
let currentIndex = 0
const cyclingTitle = document.querySelector('#cycling-title')

window.addEventListener('scroll', function() {
    if (hero.getBoundingClientRect().bottom < 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled')
    }
    if (hero.getBoundingClientRect().bottom < 0) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible')
    }
})

backToTop.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

setInterval(function () {
    currentIndex = (currentIndex + 1) % titles.length
    cyclingTitle.textContent = titles[currentIndex]
}, 1000)