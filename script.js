let rangeElement = document.getElementById('range');
let botaoElement = document.getElementById('botao');

let sizePassword = document.getElementById('valor');
let senha = document.getElementById('senha');

let containerSenha = document.getElementById('container-senha'); 

let copiar = document.getElementById('copiar')

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!?";

let novaSenha = "";

sizePassword.innerHTML = rangeElement.value; 

range.oninput = function(){
  sizePassword.innerHTML = this.value;
}

function gerarSenha(){
  let pass = "";
  for(let i = 0, n = charset.length; i < rangeElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  
  containerSenha.classList.remove("hide");
  senha.innerHTML = pass;
  novaSenha = pass;
}

function copiarSenha(){
  navigator.clipboard.writeText(novaSenha);
  copiar.innerHTML = 'Copiado !📋'
}

