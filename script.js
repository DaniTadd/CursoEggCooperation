function showAlert() {
  alert('¡Hola, esta es una alerta desde JavaScript!');
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  if (!regex.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return false;
  }

  const domain = email.split('@')[1];
  const domainRegex = /\.(com|net|org)$/; // Aquí puedes añadir los dominios permitidos
  if (!domainRegex.test(domain)) {
    alert('Por favor, ingrese un dominio de correo válido (ejemplo: .com, .net, .org).');
    return false;
  }

  return true;
}


function validarCorreo() {
  var correo = document.getElementById("email").value;
  if (validateEmail(correo)) {
    alert("El correo es válido")
  } else {
    alert("El correo no es válido");
  }
}

document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document.querySelector(".nav-links").
      classList.toggle("nav-links-responsive")
  })
