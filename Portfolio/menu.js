let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let btnFechar = document.querySelector('.btn-fechar')
let linksMenu = document.querySelectorAll('.menu-mobile a')

function fecharMenu(){
    menu.classList.remove('abrir-menu')
    overlay.classList.remove('ativo')
}

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
    overlay.classList.add('ativo')
})

overlay.addEventListener('click', fecharMenu)

btnFechar.addEventListener('click', fecharMenu)

// FECHA AO CLICAR EM QUALQUER LINK
linksMenu.forEach(link => {
    link.addEventListener('click', fecharMenu)
})
