// Navigation Bar Fixed When Scroll Occurs

// Add event listener to listen for scroll of .changing-content
// On scroll, change nav to fixed but make it stay within the contsiner of scrollable content and adjust when the width decreases
// when the scroll is at the top of the page remove the fixed element and make it normal again

const scrollableSection = document.querySelector(".changing-content");
const handleScroll = () => {
  const nav = document.querySelector(".main-navigation-bar");
  console.log(nav);
  const scrollPosition = scrollableSection.scrollTop;
    console.log(scrollPosition);
  if (scrollPosition > 0) {
    nav.style.position = "fixed";
    nav.style.width = "58%";
  } else if (scrollPosition === 0) {
    nav.style.position = "";
    nav.style.width = "";
  }
};
scrollableSection.addEventListener("scroll", handleScroll);

//NEXT STEPS

//Home should have an underline when it is on the home page and should switch when it goes on different pages

// Make scroll transition smoother

// Project Page
// When user clicks the eye icon show the full project & take away the tags beside the intro
// Change starting eye icon to closed eye, When user clicks on icon make eye icon open

// query select the view button 
//query select the tag ul 
// add an event listener to listen for a click
// create a function called handleEyeButtonClick 
  // create a variable to hold the eye button 
  // create a variable that will hold the tags ul
  // eyeButton.style.display ="block"
  //tags.style.display="none"
// when user clicks on button again close the dropdown menu and bring back the tags

// FireBase

import app from "./firebaseConfig.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js"; // "app" was changed to the word database

// reference to the database
const database = getDatabase(app);

//reference to the recentProjects & projects section of the database
const recentProjectRef = ref(database, "/recentProjects");
const projects = ref(database, "/projects");

// Getting our recentProjects data from our database and displaying it on the page

get(recentProjectRef).then((snapshot) => {
  const recentProjectData = snapshot.val();
  // loop through the recentproject ref array and display it on the page

  // NEXT STEPS: Explain For Loop 

    // Use ForLoop - why?
    // Set a variable for each project object - why?
    // Append HTML for recentProjects to the Page

});
