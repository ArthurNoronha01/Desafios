const active = document.getElementById('button')
theme = () =>{
    const MOON = document.getElementById('moon')
    const SUN = document.getElementById('sun')
    const BG = document.getElementById('theme')
    const BUTTON = document.getElementById('button')
    
    SUN.classList.toggle('invisivel')
    MOON.classList.toggle('invisivel')
    BG.classList.toggle('light')
    BUTTON.classList.toggle('moveing')
    BUTTON.classList.toggle('static-button')
}

active.addEventListener('click', theme)