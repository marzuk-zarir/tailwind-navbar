import './index.css'

const toggler = document.querySelector('#nav-toggler')
const menu = document.querySelector('#nav-menu')

toggler.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden')

    if (isHidden) {
        menu.classList.remove('hidden')
        menu.classList.add('flex')
    } else {
        menu.classList.remove('flex')
        menu.classList.add('hidden')
    }
})
