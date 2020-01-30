function sendEmail() {
    Email.send({
    Host: "smtp.gmail.com",
    Username : "Your Gmail Address", //fazer conta só pra isso
    Password : "Your Gmail Password", //fazer conta só pra isso
    To : 'recipient’s email address', //receber valor como variável
    From : "sender’s email address",
    Subject : "Agradecimento especial",
    Body : "Obrigado", //Escrever mensagem
    Attachments : [
        {
            name : "smtpjs.png",
            path:"https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
        }]
    }).then(
        message => alert("E-mail encaminhado com sucesso!")
    );
  }