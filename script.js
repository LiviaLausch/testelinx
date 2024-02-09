function initEmailjs() {
  emailjs.init({
    publicKey: "ZEQiPgllSdJzLwbgk",
  });
};

initEmailjs();

const formElement = document.getElementById("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  sendEmail();
})

function sendEmail() {
  emailjs.sendForm("service_vgiqyav", "template_iupr0bp", "#form").then(
    () => {
      alert("Formulário enviado com sucesso");
    },
    (error) => {
      console.log("error: ", error);
    },
  );
}

function openWhatsapp() {
  window.open("https://web.whatsapp.com/send?phone=5551993902096");
}
