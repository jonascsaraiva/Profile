function salvar(){
  const nome = document.getElementById('usuario').value;
  const email = document.getElementById('email').value;
  const senha1 = document.getElementById('senha1').value;
  const senha2 = document.getElementById('senha2').value;

  document.getElementById('caractere').style.display = 'none';
  document.getElementById('conferir').style.display = 'none';

  
  if (senha1.length < 8) {
    document.getElementById('caractere').style.display = 'block';
    document.getElementById('conferir').style.display = 'block';
  } else if (senha1 !== senha2) {
    document.getElementById('conferir').style.display = 'block';
    document.getElementById('caractere').style.display = 'block';
  } else {
    alert('Cadastro realizado com sucesso!');
  }
}