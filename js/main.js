// Scroll Change Navbar
const scrollHeader = () => {
    const header = document.getElementById('header')
    const navbar = document.querySelector('.nav__bar')
    this.scrollY >= 100 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')

    this.scrollY >= 100 ? navbar.classList.add('bg-header')
                        : navbar.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// Active Nav Link
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollY = window.pageYOffset
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
// Scroll Up
const scrollUp = () => {
    const scrollUp = document.querySelector('.scroll__top')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//Dark Light Mode
const body = document.querySelector("body")
const darkMode = document.querySelector('.dark__mode')
const toggleMode = () => {
    const moon = document.getElementById('moon')
    moon.classList.toggle('fa-sun')
    moon.classList.toggle('fa-moon')
    body.classList.toggle("dark")
}
darkMode.addEventListener('click', toggleMode)
