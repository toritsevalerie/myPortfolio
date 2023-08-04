// Create a variable to hold the navigation bar
// Add an event listener for the navigation-bar
// Create a function that on click displays

const navigationMenu = document.querySelector(".navigationBar");
const hiddenNav = document.querySelector(".hiddenNav");
console.log(hiddenNav);
const closeNav = document.querySelector(".closingButton");
const navIcons = document.querySelector(".navIcons");
const hiddenNavContent = document.querySelector(".hiddenNavContent")

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
