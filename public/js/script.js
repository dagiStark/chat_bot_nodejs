const sendButton = document.getElementById("sendButton");
const textbox = document.getElementById("textbox");
const chatContainer = document.getElementById("chatContainer");

let user = {
  message: "",
};

// Predefined message-response pairs
const responses = {
  "hello": "Hi there! How can I assist you?",
  "hi": "Hi there! How can I assist you?",
  "how are you": "I'm just a bot, but I'm here to help!",
  "what is your name": "I'm ChatBot, your virtual assistant.",
  "thank you": "You're welcome!",
  "bye": "Goodbye! Have a great day!",
};

// Function to send a message
function sendMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.style.textAlign = "right";
  messageElement.style.margin = "10px";
  messageElement.innerHTML =
    "<span> You: </span>" + "<span>" + message + "</span>";
  chatContainer.appendChild(messageElement);
}

// Function for chatbot response
function chatbotResponse(userMessage) {
  const normalizedMessage = userMessage.toLowerCase().trim();
  const response =
    responses[normalizedMessage] || "I'm not sure how to respond to that.";
  const messageElement = document.createElement("div");
  messageElement.style.textAlign = "left";
  messageElement.style.margin = "10px";
  messageElement.innerHTML =
    "<span> Bot: </span>" + "<span>" + response + "</span>";
  chatContainer.appendChild(messageElement);
}

// Event listener for the send button
sendButton.addEventListener("click", function () {
  const message = textbox.value;

  if (message === "") {
    alert("Please enter a message");
    return;
  } else {
    let userMessageText = message.trim();
    user.message = userMessageText;
    sendMessage(userMessageText);
    textbox.value = "";
    chatbotResponse(userMessageText);
  }
});

// Event listener for the Enter key
textbox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const message = textbox.value;

    if (message === "") {
      alert("Please enter a message");
      return;
    } else {
      let userMessageText = message.trim();
      user.message = userMessageText;
      sendMessage(userMessageText);
      textbox.value = "";
      chatbotResponse(userMessageText);
    }
  }
});
