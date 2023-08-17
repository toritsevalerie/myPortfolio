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
    const projectTags = eachProject.tags;
    const githubLink = eachProject.gitHubLink;
    const liveSiteLink = eachProject.liveSiteLink;
    const projectImage = eachProject.projectImg;
    const projectImageAlt = eachProject.alt;

    // Creating P & H2 Elements
    const projectHeadingElement = document.createElement("h2");
    const projectDetailsPElement = document.createElement("p");
    const projectTagsPElement = document.createElement("p");
    projectTagsPElement.className = "tags";

    // Creating Div Containers Elements
    const singleProjectContainerDiv = document.createElement("div");
    singleProjectContainerDiv.className = "individualProject";
    const projectButtonsDiv = document.createElement("div");
    projectButtonsDiv.className = "projectButtonContainer";

    // Creating Button Elements
    const liveButton = document.createElement("button");
    const codeButton = document.createElement("button");
    const uxButton = document.createElement("button");

    // Creating a elements
    const liveLink = document.createElement("a");
    liveLink.href = liveSiteLink;
    const gitCode = document.createElement("a");
    gitCode.href = githubLink;
    const uxLink = document.createElement("a");

    // Assigning values to the elements
    projectHeadingElement.innerHTML = projectTitle;
    projectDetailsPElement.innerHTML = projectDescription;
    projectTagsPElement.innerHTML = projectTags;
    liveLink.innerHTML = "Live Site";
    liveLink.target = "_blank";
    gitCode.innerHTML = "GitHub";
    gitCode.target = "_blank";
    uxLink.innerHTML = "Case Study";
    uxLink.target = "_blank";

    // Appending Items
    singleProjectContainerDiv.append(
      projectHeadingElement,
      projectDetailsPElement,
      projectTagsPElement,
      projectButtonsDiv
    );

    projectButtonsDiv.append(liveButton, codeButton, uxButton);
    liveButton.append(liveLink);
    codeButton.append(gitCode);
    uxButton.append(uxLink);

    const projectsSectionProjectPage = document.querySelector(
      ".projectsProjectPage"
    );

    projectsSectionProjectPage.append(singleProjectContainerDiv);

    // On Hover backgroundImage shows

    const updateEventListener = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        singleProjectContainerDiv.addEventListener(
          "click",
          handleIndividualProjectClick
        );
        singleProjectContainerDiv.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        singleProjectContainerDiv.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      } else {
        singleProjectContainerDiv.addEventListener(
          "mouseenter",
          handleMouseEnter
        );
        singleProjectContainerDiv.addEventListener(
          "mouseleave",
          handleMouseLeave
        );
        singleProjectContainerDiv.removeEventListener(
          "click",
          handleIndividualProjectClick
        );
      }
    };

    
    window.addEventListener("resize", updateEventListener);

    const handleMouseEnter = () => {
      singleProjectContainerDiv.style.backgroundImage = `url(${projectImage})`;
      singleProjectContainerDiv.style.backgroundSize = "contain";

      // Hide the h2, p, and .tags elements
      projectHeadingElement.style.opacity = "0";
      projectDetailsPElement.style.opacity = "0";
      projectTagsPElement.style.opacity = "0";
    };
    singleProjectContainerDiv.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseLeave = () => {
      singleProjectContainerDiv.style.backgroundImage = "";

      // Show the h2, p, and .tags elements again
      projectHeadingElement.style.opacity = "1";
      projectDetailsPElement.style.opacity = "1";
      projectTagsPElement.style.opacity = "1";
    };

    singleProjectContainerDiv.addEventListener("mouseleave", handleMouseLeave);

    const handleIndividualProjectClick = () => {
      if (singleProjectContainerDiv.style.backgroundImage) {
        // If the backgroundImage is set, revert back to the original state
        singleProjectContainerDiv.style.backgroundImage = "";
        projectHeadingElement.style.opacity = "1";
        projectDetailsPElement.style.opacity = "1";
        projectTagsPElement.style.opacity = "1";
      } else {
        // Otherwise, display the image and hide the other elements
        singleProjectContainerDiv.style.backgroundImage = `url(${projectImage})`;
        singleProjectContainerDiv.style.backgroundSize = "contain";
        projectHeadingElement.style.opacity = "0";
        projectDetailsPElement.style.opacity = "0";
        projectTagsPElement.style.opacity = "0";
      }
    };
  }
});
