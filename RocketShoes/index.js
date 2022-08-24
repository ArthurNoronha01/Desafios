const boxImg = document.getElementById('box-img')
const imgFoco = document.getElementById('img-foco')


boxImg.addEventListener('mousemove', (m) =>{
    //clienteX: vai retornar a coordenada horizontal.
    //offSetLeft: retornar a posição esquerda em px;
    const x = m.clientX - m.target.offsetLeft;
    //clienteX: vai retornar a coordenada vertical.
      //offSetTop: retornar a posição top em px;
    const y =  m.clientY - m.target.offsetTop;

    
    imgFoco.style.transformOrigin = `${x}px ${y}px`; 
    imgFoco.style.transform = 'scale(2)'
})

boxImg.addEventListener('mouseleave', () =>{

    imgFoco.style.transformOrigin = 'center center'
    imgFoco.style.transform = 'scale(1)'
})



//Troca de fotos do foco
const foto1 = document.getElementById('foto1')
const foto2 = document.getElementById('foto2')
const foto3 = document.getElementById('foto3')
foto1.addEventListener('click', () => {
    let f1 = foto1.src
   
    imgFoco.src = f1
})

foto2.addEventListener('click', () => {
    let f2 = foto2.src
    imgFoco.src = f2
})

foto3.addEventListener('click', () => {
    let f3 = foto3.src
    imgFoco.src = f3
})
