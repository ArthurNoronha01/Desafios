const EMAIL = document.getElementById("caixa_email")

const clientesEmail = []
const validacao = []

const typeEmail = [
    "gmail",
    "yahoo",
    "hotmail",
    "ig",
    'bol',
    'outlook'
]

envioEmail = () =>{
    let emailUsuario = EMAIL.value 

    if(emailUsuario == ''){
        alert('Por favor, preencha o espaço com seu email')
        return
    }
    if(!emailUsuario.match(/@/)){
        emailInvalido()
        return
    }
    if(!emailUsuario.match(/.com/)){
        emailInvalido()
        return 
    }else{
        clientesEmail.push(emailUsuario)
        emailValido()
        
        caixa_email.value = ''
    }
    
    

    console.log(clientesEmail)
}


emailInvalido = () =>{
    const BOXEMAIL = document.getElementById('caixa_email')
    BOXEMAIL.style.outline = "2px solid red"

}

emailValido = () =>{
    const BOXEMAIL = document.getElementById('caixa_email')
    BOXEMAIL.style.outline = "3px solid green"

}