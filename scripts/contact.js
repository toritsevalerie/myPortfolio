const contactForm = document.querySelector(".contactForm");
const submitButton = document.querySelector(".submitButton");

const handleSubmit = (event) => {
  event.preventDefault();

  let name = document.querySelector("#username").value;
  let email = document.querySelector("#emailAddress").value;
  let message = document.querySelector("#message").value;

  let body =
    "Name:" + name + "<br/> Email:" + email + "<br/> Message:" + message;

  Email.send({
    SecureToken: "1e4b52c5-9b9b-43bd-8511-8b44910d9ec8",
    To: "torisevalerie@gmail.com",
    From: document.querySelector("#emailAddress").value,
    Subject: "Toritse Portfolio: New Message",
    Body: body,
  }).then((message) => alert(message));

  // Clear the form fields
  document.querySelector("#username").value = "";
  document.querySelector("#emailAddress").value = "";
  document.querySelector("#message").value = "";

  submitButton.innerHTML = "Thanks";

  setTimeout(() => {
    submitButton.innerHTML = "Submit";
  }, 4500);
};

// add event listener to listen for submit
contactForm.addEventListener("submit", handleSubmit);
