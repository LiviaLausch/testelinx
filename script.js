// Função para iniciar o EmailJS
function initEmailjs() {
  emailjs.init({
    publicKey: "ZEQiPgllSdJzLwbgk", // Chave pública do EmailJS
  });
};

// Inicializa o EmailJS ao carregar a página
initEmailjs();

// Obtém o elemento do formulário pelo ID
const formElement = document.getElementById("form");

// Adiciona um ouvinte de evento para o envio do formulário
formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o comportamento padrão do formulário (enviar a requisição)
  sendEmail(); // Chama a função sendEmail() para enviar o formulário
})

// Função para enviar o formulário usando EmailJS
function sendEmail() {
  emailjs.sendForm("service_vgiqyav", "template_iupr0bp", "#form").then(
    () => {
      alert("Formulário enviado com sucesso"); // Exibe o alerta  quando o formulário é enviado com sucesso
    },
    (error) => {
      console.log("error: ", error); // Registra qualquer erro 
    },
  );
}

// Função para abrir uma janela do navegador com o WhatsApp
function openWhatsapp() {
  window.open("https://web.whatsapp.com/send?phone=5551993902096"); // abre uma janela do navegador para enviar uma mensagem pelo WhatsApp
}
