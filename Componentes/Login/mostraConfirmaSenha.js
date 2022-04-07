document.getElementById('confirma-olho').addEventListener('mousedown', function() {
    document.getElementById('confirmar-senha').type = 'text';
    document.getElementById('confirmar-senha').focus()
    confirmaOlho.style.backgroundImage = ` url("./Assets/Login/botao-mostra-senha-focus-ativado.svg") `
  });
  
  document.getElementById('confirma-olho').addEventListener('mouseup', function() {
    document.getElementById('confirmar-senha').type = 'password';
    confirmaOlho.style.backgroundImage = ` url("./Assets/Login/botao-mostra-senha-focus.svg") `
  });
  
  // Para que o password não fique exposto apos mover a imagem.
  document.getElementById('confirma-olho').addEventListener('mousemove', function() {
    document.getElementById('confirmar-senha').type = 'password';
    confirmaOlho.style.backgroundImage = ` url("./Assets/Login/botao-mostra-senha-focus.svg") `
  });


  document.getElementById('confirmar-senha').addEventListener('mousemove', function() {
    confirmaOlho.style.backgroundImage = ` url("./Assets/Login/botao-mostra-senha-focus.svg") `
  });

  document.getElementById('confirma-olho').addEventListener('mouseleave', function() {
    confirmaOlho.style.backgroundImage = ` url("./Assets/Login/icone-mostra-senha-login-blur.svg") `
  });
  document.getElementById('confirmar-senha').addEventListener('mouseleave', function() {
    confirmaOlho.style.backgroundImage = ` url("./Assets/Login/icone-mostra-senha-login-blur.svg") `
  });

  document.getElementById('confirmar-senha').addEventListener('focus', function(){
    confirmaOlho.style.backgroundImage = ` url("./Assets/Login/botao-mostra-senha-focus.svg") `
  })


  document.getElementById('olho').addEventListener('click', function() {
    const larguraBody = screen.width

    if (larguraBody <= 1025) {
    document.getElementById('senha').type = 'text';
    olho.style.backgroundImage = ` url("./Assets/Login/botao-mostra-senha-focus.svg) `
    }
  });

  let confirmaOlho = document.getElementById('confirma-olho')