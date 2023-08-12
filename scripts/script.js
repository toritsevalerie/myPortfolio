// Create a variable to hold the navigation bar
// Add an event listener for the navigation-bar
// Create a function that on click displays

const navigationMenu = document.querySelector(".navigationBar");
const hiddenNav = document.querySelector(".hiddenNav");
console.log(hiddenNav);
const closeNav = document.querySelector(".closingButton");
const navIcons = document.querySelector(".navIcons");
const hiddenNavContent = document.querySelector(".hiddenNavContent");

const openNav = () => {
  hiddenNav.style.width = "420px";
  setTimeout(() => {
    navigationMenu.style.zIndex = "1";
    hiddenNav.style.zIndex = "2";
    hiddenNavContent.style.display = "block";
  }, 400);
};
const closeHiddenNav = () => {
  hiddenNav.style.width = "0";
  navigationMenu.style.zIndex = "2";
  hiddenNav.style.zIndex = "1";
  hiddenNavContent.style.display = "none";
};

navigationMenu.addEventListener("click", openNav);
closeNav.addEventListener("click", closeHiddenNav);

// Responsive Nav
const responsiveNavIcon = document.querySelector(".responsiveNavIcon");
const responsiveNav = document.querySelector(".responsiveNav");
const closeResponsiveNav = document.querySelector(
  ".responsiveNavClosingButton"
);

const handleResponsiveNavFunction = () => {
  responsiveNav.style.display = "block";
};

const handleCloseResponsiveNav = () => {
  responsiveNav.style.display = "none";
};

responsiveNavIcon.addEventListener("click", handleResponsiveNavFunction);
closeResponsiveNav.addEventListener("click", handleCloseResponsiveNav);
