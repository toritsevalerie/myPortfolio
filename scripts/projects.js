import app from "./firebaseConfig.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// reference the database

const database = getDatabase(app);

//reference projects database

const projectRef = ref(database, "/projects");

// geting our projects from the database and displaying our data onto the page

get(projectRef).then((snapshot) => {
  const projectData = snapshot.val();

  // Convert projectData object to an array and then reverse it.
  const projectsArray = Object.values(projectData).reverse();

  //loop through the array to render each array item on the page
  for (let eachProject of projectsArray) {
    // Storing json data/object items in variables

    const projectTitle = eachProject.title;
    const projectDescription = eachProject.description;
    const projectWeb = eachProject.webTags;
    const projectProduct = eachProject.designTags;
    const projectFreelance = eachProject.freelanceTags;
    const githubLink = eachProject.gitHubLink;
    const liveSiteLink = eachProject.liveSiteLink;
    const projectImage = eachProject.projectImg;

    // Creating P & H2 & li Elements
    const projectHeadingElement = document.createElement("h2");
    const projectDetailsPElement = document.createElement("p");
    const webTagLiElement = document.createElement("li");
    const productTagLiElement = document.createElement("li");
    const freelanceTagLiElement = document.createElement("li");

    // Creating Div Containers Elements
    const singleProjectContainerDiv = document.createElement("div");
    singleProjectContainerDiv.className = "individualProject";
    const projectButtonsDiv = document.createElement("div");
    projectButtonsDiv.className = "projectButtonContainer";

    // Creating Button Elements
    const liveButton = document.createElement("button");
    const codeButton = document.createElement("button");

    //Creating Ul element

    const tagContainer = document.createElement("ul");
    tagContainer.className = "tagContainer";

    // Creating a elements
    const liveLink = document.createElement("a");
    liveLink.href = liveSiteLink;
    const gitCode = document.createElement("a");
    gitCode.href = githubLink;

    // Assigning values to the elements
    projectHeadingElement.innerHTML = projectTitle;
    projectDetailsPElement.innerHTML = projectDescription;
    freelanceTagLiElement.innerHTML = projectFreelance;
    webTagLiElement.innerHTML = projectWeb;
    productTagLiElement.innerHTML = projectProduct;
    liveLink.innerHTML = "Live Site";
    liveLink.target = "_blank";
    gitCode.innerHTML = "GitHub";
    gitCode.target = "_blank";

    // Appending Items
    singleProjectContainerDiv.append(
      projectHeadingElement,
      projectDetailsPElement,
      tagContainer,
      projectButtonsDiv
    );

    projectButtonsDiv.append(liveButton, codeButton);
    liveButton.append(liveLink);
    codeButton.append(gitCode);

    tagContainer.append(
      productTagLiElement,
      freelanceTagLiElement,
      webTagLiElement
    );

    const projectsSectionProjectPage = document.querySelector(
      ".projectsProjectPage"
    );

    projectsSectionProjectPage.append(singleProjectContainerDiv);

    // On Hover backgroundImage shows

    const handleMouseEnter = () => {
      singleProjectContainerDiv.style.backgroundImage = `url(${projectImage})`;
      singleProjectContainerDiv.style.backgroundSize = "contain";

      // Hide the h2, p, and .tags elements
      projectHeadingElement.style.opacity = "0";
      projectDetailsPElement.style.opacity = "0";
      productTagLiElement.style.opacity = "0";
      freelanceTagLiElement.style.opacity = "0";
      webTagLiElement.style.opacity = "0";
    };
    singleProjectContainerDiv.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseLeave = () => {
      singleProjectContainerDiv.style.backgroundImage = "";

      // Show the h2, p, and .tags elements again
      projectHeadingElement.style.opacity = "1";
      projectDetailsPElement.style.opacity = "1";
      productTagLiElement.style.opacity = "1";
      freelanceTagLiElement.style.opacity = "1";
      webTagLiElement.style.opacity = "1";
    };

    singleProjectContainerDiv.addEventListener("mouseleave", handleMouseLeave);
  }
});
