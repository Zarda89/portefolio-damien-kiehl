function sendEmail() {
  let name = document.getElementById("NameForm");
  let mail =  document.getElementById("EMailForm");
  let phone = document.getElementById("PhoneNumberForm");
  let message = document.getElementById('textareaContact');
  let subject = "Message recu du portfolio de la part de " + name.value;



  if (!name.value || !mail.value || !message.value )
  {
    alert("vous devez remplir les champs obligatoire");
    return;
  }
  let messagec= '  phone: ' + phone.value + ' Bonjour mail: ' + mail.value + ' ' + message.value;
  Email.send({
      SecureToken: "4dd68b73-a9b7-4769-822d-b54b7a464ab9",
      To: "damienkiehl89@gmail.com",
      From: "dimitrihauet@gmail.com",
      Subject: subject,
      Body: messagec
  }).then( 
      message => {
        console.log(message)
        if (!message)
          alert("mail not sent successfully");
        alert("mail sent successfully")
      }
  );
}

function openMail(event) {

  let name = document.getElementById("NameForm");
  let mail =  document.getElementById("EMailForm");
  let phone = document.getElementById("PhoneNumberForm");
  let message = document.getElementById('textareaContact');
  window.open('mailto:damienkiehl89@gmail.com?subject=Message de ' + name.value +'&body=phone:' + phone.value + '.mail: ' + mail.value + ' .' + message.value);
}