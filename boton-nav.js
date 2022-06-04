/* Lo que hacemos es establecer dos constantes, las cuales buscan los elementos en la página usando el selector por clase. */

const primaryNav = document.querySelector('.nav-principal');

const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    console.log(visibility)

    if (visibility === "false") {
        
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    
    } else if (visibility === "true") {

        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)

    }
})