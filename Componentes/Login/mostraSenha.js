document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('senha').type = 'text';
    document.getElementById('senha').focus()
    olho.style.backgroundImage = ' url("./Assets/Login/botao-mostra-senha-focus-ativado.svg") '
  });
  
  document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('senha').type = 'password';
    olho.style.backgroundImage = ' url("./Assets/Login/botao-mostra-senha-focus.svg") '
  });
  
  // Para que o password não fique exposto apos mover a imagem.
  document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('senha').type = 'password';
    olho.style.backgroundImage = ' url("./Assets/Login/botao-mostra-senha-focus.svg") '
  });


  document.getElementById('senha').addEventListener('mousemove', function() {
    olho.style.backgroundImage = ' url("./Assets/Login/botao-mostra-senha-focus.svg") '
  });

  document.getElementById('olho').addEventListener('mouseleave', function() {
    olho.style.backgroundImage = 'url("./Assets/Login/icone-mostra-senha-login-blur.svg")'
  });
  document.getElementById('senha').addEventListener('mouseleave', function() {
    olho.style.backgroundImage = 'url("./Assets/Login/icone-mostra-senha-login-blur.svg")'
  });

  document.getElementById('senha').addEventListener('focus', function(){
    olho.style.backgroundImage = 'url("./Assets/Login/botao-mostra-senha-focus.svg")'
  })

  document.getElementById('olho').addEventListener('click', function() {
    const larguraBody = screen.width

    if (larguraBody <= 1025) {
    document.getElementById('senha').type = 'text';
    olho.style.backgroundImage = ' url("./Assets/Login/botao-mostra-senha-focus.svg") '
    }
  });

  let olho = document.getElementById('olho')