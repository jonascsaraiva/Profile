function validar(){
  const usuario = document.getElementById('usuario').value;  
  const senha = document.getElementById('senha').value;  

  if (usuario === 'aluno@email.com.br' && senha === '0123456789') {
    alert('Cadastro realizado com sucesso!');
} else {
  alert('Preencha os campos corretamente');
}
}