function validar(){
    var nome = document.getElementById("nome");
    var sexo = document.getElementsByName("sexo");
    var cpf = document.getElementsByName("cpf");
    var cep = document.getElementsByName("cep");
   
    var cpfValido = /^[0-9]{11}$/;
    var cepValido = /^[0-9]{8}$/;


    if (nome.value == "") {
            alert("Nome não informado");
            nome.focus();
    }

    if (nome.value.split(' ').length < 2) {
        alert("Favor digitar nome e sobrenome");
    }

    if(sexo[0].checked != true && sexo[1].checked != true){
        alert("Sexo não informado");
    }
    if(cep.value == ""){
        alert("Digite um CPF");
    }
    else if (cpfValido.test(cpf)) {
        alert("Por favor digite 11 numeros no CPF");
  
    }
    if(cpf.value == ""){
        alert("Digite um CEP");
    }
    else if(cepValido.test(cep)){
        alert("Formato de CEP invalido, tenta este formato xxxxx-xxx");
    }
    

}