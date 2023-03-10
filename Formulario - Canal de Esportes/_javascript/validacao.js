


//Soma que gera o resultado final da assinatural mensal
function soma() {

  total = 0.00;

  if (document.form.planos[0].checked)
    total = total + 85.00;
  if (document.form.planos[1].checked)
    total = total + 300.00 / 4;
  if (document.form.planos[2].checked)
    total = total + 600.00 / 12;
  if (document.form.premiere[0].checked)
    total = total + 60.00;
  if (document.form.premiere[1].checked)
    total = total + 80.00;
  document.form.total.value = total.toFixed(2);
}


// CRONÔMETRO - velocidade
setInterval(contartempo, 1000);

// CRONÔMETRO - qtdd tempo em segundos
var contador = 180;
function contartempo() {
  document.getElementById("tempo").innerHTML = contador;
  contador--;
}




//VALIDACAO UTILIZANDO JSON - Confeindo Login e senha.
function confere_login() {
  let login_json = '{"login": "Usuario"}';
  let v_login = JSON.parse(login_json);
  if (v_login.login == document.form.login.value)
    return true;
  else {
    alert("Login incorreto. Utilize o que foi demonstrado com JSON!");
    document.form.login.focus();
    return false;
  }
}

function confere_senha() {

  let v_senha = JSON.parse('{"senha": "Abc$123"}');
  if (v_senha.senha == document.form.senha.value)
    return true
  else {
    alert("Senha incorreta. Utilize a que foi demonstrada com JSON!")
    document.form.senha.focus()
    return false
  }
}


//VALIDAR COM REGEX

//VALIDACAO UTILIZANDO regex - Confeindo Nome.
function validar_nome() {
  let value = document.getElementById("nome").value;
  // aceita a-z A-Z caracteres especiais - espaço
  let expressao = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
  if (!expressao.test(value)) {
    alert('O nome aceita apenas caracteres alfanumericos');
    document.form.nome.focus();
    return false;
  }
  return true;
}

//VALIDACAO DE TODOS OS CAMPOS
function verificar_campos() {
  let nome = document.getElementById("nome");
  if (validar(nome, "", "Nome") == false) return false;

  let cpf = document.getElementById("cpf");
  if (validar(cpf, "", "CPF") == false) return false;
  let email = document.getElementById("email");
  if (validar(email, "", "Email") == false) return false;
  let cel = document.getElementById("cel");
  if (validar(cel, "", "Celular") == false) return false;
  let nascimento = document.getElementById("nascimento");
  if (validar(nascimento, "", "Nascimento") == false) return false;
  let salario = document.getElementById("salario");
  if (validar(salario, "0,00", "Salário") == false) return false;
  let times = document.getElementById("times").selectedIndex;
  if (times == "0") {
    alert('Times não informado');
    document.getElementById("times").focus();
    return false;
  }

  let login = document.getElementById("login");
  if (validar(login, "", "Login") == false) return false;

  let senha = document.getElementById("senha");
  if (validar(senha, "", "Senha") == false) return false;


  return true;

}

//Validação de campos sem usar a condição "SE"
function validar(campo, valor_inicial, nome_campo) {
  if (campo.value == "" || campo.value == null || valor_inicial == campo.value) {
    // campo inválido, retorna false para o formulário
    alert(nome_campo + ' não informado. Por favor, preencha corretamente!');
    campo.focus();
    return false;
  }
  return true;
}


function validar_tudo() {
  alert("Aguarde a validação...");
  if (verificar_campos() && validar_nome() && confere_login() && confere_senha()) {
    document.getElementById("botao-oculto").disabled = false;
    return true;
  }

  return false;
}