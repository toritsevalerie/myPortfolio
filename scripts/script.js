// Navigation Bar Fixed When Scroll Occurs

// Add event listener to listen for scroll of .changing-content
// On scroll, change nav to fixed but make it stay within the contsiner of scrollable content and adjust when the width decreases
// when the scroll is at the top of the page remove the fixed element and make it normal again



const scrollableSection = document.querySelector(".changing-content");
const handleScroll = () => {
  const nav = document.querySelector("nav");
  const scrollPosition = scrollableSection.scrollTop;
//   console.log(scrollPosition);
  if (scrollPosition > 0) {
    nav.style.position = "fixed";
    nav.style.width ='58%'
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