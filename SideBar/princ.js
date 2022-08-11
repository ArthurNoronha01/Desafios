menuMobile = () =>{
    //vai selecionar toda a section, onde está presente todos os d+ elementos 
    const SIDEBAR = document.getElementById('barraSide')
    //vai selecionar todos os elementos HTML que possuem a class "invisivel", que vão aparecer ao clicar no button do hamburguer
    const INVISIVEL = document.querySelectorAll('#barraSide .invisivel')

    //selecionado a section, ela vai avaliar se possuem a class "menu-mobile", caso não ela adiciona ao "barraSide", se clicar quando tiver, a class" menu-mobile" será removida
    SIDEBAR.classList.toggle('menu-mobile')

    //será selecionado todas as div´s filhas da div pai com a classe "group-icons", div´s essas que vão possuir os textos.
    const MENU = document.querySelectorAll('.group-icons div')

    //será selecionado a ultima div filha da div pai barraSide, div essa sendo a área do perfil 
    const PERFIL = SIDEBAR.lastElementChild

    //transforma os valores do vetor em elementos HTML, possibilitando a manipulação dos seus atributos
    for(const div of INVISIVEL)
    //séra selecionado os elementos que possuem a class "invisivel" e usando o "toggle", vai verificar se a classe existe, se existir, remove, caso contrário vai adiciona-la
    div.classList.toggle('visivel')
    //transforma os valores do vetor em elementos HTML, possibilitando a manipulação dos seus atributos
    for(const MENUOPEN of MENU)
    MENUOPEN.classList.toggle('menu-open')
    PERFIL.classList.toggle('bottom-icon')
    PERFIL.classList.toggle('perfil-open-menu')
}
