function sendEmail(event) {
  let name = document.getElementById("NameForm");
  let mail =  document.getElementById("EMailForm");
  let phone = document.getElementById("PhoneNumberForm");
  let message = document.getElementById('textareaContact');
  let subject = "Message recu du portfolio de la part de " + name.value;

  message = 'Bonjour|phone:' + phone.value + '| mail: ' + mail.value + '|' + message.value;

  Email.send({
      SecureToken: "4dd68b73-a9b7-4769-822d-b54b7a464ab9",
      To: "damienkiehl@gmail.com",
      From: "dimitrihauet@gmail.com ",
      Subject: subject,
      Body: message
  }).then( 
      message => alert("mail sent successfully")
  );
}

function openMail(event) {

  let name = document.getElementById("NameForm");
  let mail =  document.getElementById("EMailForm");
  let phone = document.getElementById("PhoneNumberForm");
  let message = document.getElementById('textareaContact');
  window.open('mailto:damienkiehl89@gmail.com?subject=Message de ' + name.value +'&body=phone:' + phone.value + '. ' + message.value);
}