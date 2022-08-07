const EMAIL = document.getElementById("caixa_email")

const clientesEmail = []
const validacao = []


envioEmail = () =>{
    let emailUsuario = EMAIL.value 

    if(emailUsuario == ''){
        alert('Por favor, preencha o espaço com seu email')
        return
    }
    if( (emailUsuario.search("@") != -1 && emailUsuario.search(".com") != -1 && emailUsuario.search(" ") == -1) && (emailUsuario.search("gmail") != -1 || emailUsuario.search("hotmail") != -1 ) ){
        emailValido()
        clientesEmail.push(emailUsuario)
        emailValido()
        alert('Email registrado com sucesso')
        caixa_email.value = ''
    }else{
        emailInvalido()
        alert('Preencha o campo de email corretamente, seguindo o exemplo')
    }

    console.log(clientesEmail)
}

verificarEmail = () =>{
    let emailUsuario = EMAIL.value 

    
    if( (emailUsuario.search("@") != -1 && emailUsuario.search(".com") != -1 && emailUsuario.search(" ") == -1) && (emailUsuario.search("gmail") != -1 || emailUsuario.search("hotmail") != -1 ) ){
        emailValido()
    }else{
        emailInvalido()
    }

}


emailInvalido = () =>{
    const BOXEMAIL = document.getElementById('email')
    BOXEMAIL.className = "invalido"

}

emailValido = () =>{
    const BOXEMAIL = document.getElementById('email')
    BOXEMAIL.className = "valido"

}

verificarTypeEmail = () =>{
    typeEmail.forEach(element => {
        console.log(element)
    });

}