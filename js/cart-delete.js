function placeOrder() {
  // Obtener los campos del formulario
  const firstName = document.getElementById("inputFirstName").value.trim();
  const lastName = document.getElementById("inputLastName").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const mobilePhoneNumber = document.getElementById("inputMobilePhoneNumber").value.trim();
  const address = document.getElementById("inputAddress").value.trim();
  const city = document.getElementById("inputCity").value.trim();
  const zip = document.getElementById("inputZip").value.trim();
  const cardHolder = document.getElementById("inputCardHolder").value.trim();
  const cardNumber = document.getElementById("inputCardNumber").value.trim();
  const expiryDate = document.getElementById("inputExpiryDate").value.trim();
  const cardCode = document.getElementById("inputCardCode").value.trim();
  const agreement = document.getElementById("gridCheck").checked;

  // Verificar si los campos obligatorios están completos
  if (firstName && lastName && email && mobilePhoneNumber && address && city && zip && cardHolder && cardNumber && expiryDate && cardCode && agreement) {
    // Mostrar mensaje de éxito
    Swal.fire({
      icon: 'success',
      title: 'Order completed successfully',
      confirmButtonText: 'Home',
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirigir a la página deseada
        window.location.href = 'index.html';
      }
    });
    // Vaciar el carrito y el localStorage
    localStorage.removeItem("carrito");
  } else {
    // Mostrar mensaje de error si algún campo está vacío
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please, complet all required fields',
    });
  }
};
  