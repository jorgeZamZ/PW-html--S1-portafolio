function checkBirthday() {
    var name = document.getElementById("name").value;
    var birthdate = new Date(document.getElementById("birthdate").value);
    var currentMonth = new Date().getMonth() + 1;
    var birthMonth = birthdate.getMonth() + 1;
    var messageElement = document.getElementById("message");
    if (currentMonth === birthMonth) {
      messageElement.innerHTML = "<p id='message'>felicidades, este mes es tu cumpleaños</p><img src='descuento.jpg' alt='descuento'>";
    } else {
      messageElement.textContent =
        "Este mes no es tu cumpleaños.";
    }
  }