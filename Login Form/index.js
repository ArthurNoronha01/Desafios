//Seleciono o Elemento html input
const EMAIL = document.getElementById('email')
//Seleciono o Elemento html input
const SENHA = document.getElementById('senha')
//Seleciona os elementos que possuem a class "none"
const EMAILSEMFOCO = document.querySelectorAll('.none')
//Icone de olho no input password
const OLHO = document.getElementById('eye-password')

const noneEmail = document.getElementById('none-email')
const nonePass = document.getElementById('none-pass')

//aqui ficará o objeto com o email e a senha.
const USUARIOS = []

EMAIL.addEventListener('focus', function(){
    // for(const ICONS of EMAILSEMFOCO)
    noneEmail.classList.toggle('none')
})

EMAIL.addEventListener('blur', function() {
    // for(const ICONS of EMAILSEMFOCO)
    noneEmail.classList.toggle('none')
})

SENHA.addEventListener('focus', function(){
    nonePass.classList.toggle('none')
})

SENHA.addEventListener('blur', function(){
    nonePass.classList.toggle('none')
})

//são todas as ações relacionadas a verificação dos requisitos de preenchimento
verificarEmail = () =>{
    let obj = {}

    let email = EMAIL.value
    let senha = SENHA.value

    if(email.length == 0 || senha.length == 0){
        alert('preencha os espaços corretamente')
        return
    }
    if(email.length < 18 || email.length > 40){
        alert('A quantidade de caracteres não satisfaz as exigências')
        return
    }if(senha.length > 18 || senha.length < 3){
        alert('A quantidade de caracteres não satisfaz as exigências, a senha deve conter mais de 3 e menos de 18 caracteres')
        return
    }
    if(!senha.match(/[a-z]/g)){
        alert('por favor, coloque ao menos uma letra')
        return
    }
    if( !senha.match(/[0-9]/g)){
        alert('por favor, insira ao menos um número')
        return
    }
    if(email.indexOf('@') == -1 || email.indexOf('.') == -1 || (email.indexOf('gmail') == -1 && email.indexOf('hotmail') == -1 && email.indexOf(' ') == -1 && senha.indexOf(' ') == -1)){
       alert('Por favor, preencha o seu e-mail corretamente, sendo obrigátorio os caracteres :"@, . , com"')
       return
    }
    else{
        //será criado um objeto para receber os valores dos inputs de entrada
        obj = {
            usuarios: email,
            senhas: senha
        }
        //será enviado o obj para oo array
        USUARIOS.push(obj)

        alert('Acesso bem sucedido')
        EMAIL.value = ''
        SENHA.value = ''
    }
    
}

//ao pressionar o icone de olho, será alterado o type do input para text 
OLHO.addEventListener('mousedown', function(){
    SENHA.type = 'text';
})
//ao soltar o icone de olho, será alterado o type de text para password
OLHO.addEventListener('mouseup', function(){
    SENHA.type = 'password';
})

