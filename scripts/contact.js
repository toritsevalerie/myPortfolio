// Contact: Firebase

import app from "./firebaseConfig.js";
import {
  get,
  ref,
  getDatabase,
  push,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// reference the database

const database = getDatabase(app);

// reference the contact database

const contactRef = ref(database, "/contacts");

const contactForm = document.querySelector(".contactForm");
const submitButton = document.querySelector(".submitButton");

const contactFields = {
  name: document.querySelector("#username"),
  email: document.querySelector("#emailAddress"),
  message: document.querySelector("#message"),
};

const handleSubmit = (event) => {
  event.preventDefault();

  // Prepare the data to be pushed
  const contactDataToPush = {};

  for (let key in contactFields) {
    contactDataToPush[key] = contactFields[key].value;
    contactFields[key].value = "";
  }

  push(contactRef, contactDataToPush);

  submitButton.innerHTML = "Thanks";

  setTimeout(() => {
    submitButton.innerHTML = "Submit";
  }, 4500);
};

// add event listener to listen for submit
contactForm.addEventListener("submit", handleSubmit);
