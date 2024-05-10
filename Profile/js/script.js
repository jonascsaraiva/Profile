function aplicar() {
  const nomePerfil = document.getElementById("nomePerfil").value;
  const avatar = document.querySelector("select").value;
  const status = document.getElementById("status").value;
  const instagram = document.getElementById("instagram").value;
  const linkedin = document.getElementById("linkedin").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const corFundoPagina = document.getElementById("cor-fundo-pagina").value;
  const corFundoPerfil = document.getElementById("cor-fundo-perfil").value;
  
  document.getElementById("alvoPerfil").textContent = nomePerfil;
  document.querySelector(".status").className = status;
  document.querySelector("img").src = avatar;
  document.querySelector(".insta span").textContent = "@" + instagram;
  document.querySelector(".linkedin span").textContent = linkedin;
  document.querySelector(".zap span").textContent = whatsapp;

  document.getElementById("nomePerfil").value = "";
  document.getElementById("select").value = "images/profile01.png";
  document.getElementById("status").value = "disponivel";
  document.getElementById("instagra").value = "";
  document.getElementById("linkedin").value = "";
  document.getElementById("whatsapp").value = "";

  document.getElementById('mensagem').style.display = 'none';
}






// Fazer botão para abrir e fechar Layout 

// Fazer o botão de aplicação de Todas as funções

// Receber o nome de usuario e substituir no perfil

// Trocar o avatar do perfil

// Trocar a cor do status

// Receber o novo @ e substituir no perfil

// Receber o novo nome likedin e substituir no perfil

// Receber e enviar o novo whatsapp

// Mudar a cor do Backgroud da página

// Mudar a cor do backgroud do Perfil
