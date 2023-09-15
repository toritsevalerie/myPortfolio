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

  const projectsArray = Object.values(projectData);

  const recentThreeProjects = projectsArray.slice(-3);

  //loop through the array to render each array item on the page
  for (let eachProject of recentThreeProjects) {
    // Storing json data/object items in variables

    const projectTitle = eachProject.title;
    const projectDescription = eachProject.description;
    const projectWeb = eachProject.webTags;
    const projectProduct = eachProject.designTags;
    const projectFreelance = eachProject.freelanceTags;
    const githubLink = eachProject.gitHubLink;
    const liveSiteLink = eachProject.liveSiteLink;
    const projectImage = eachProject.projectImg;
    const mobileProjectImage = eachProject.mobileImgOne;
    const mobileProjectImageAlt = eachProject.mobileImgOneAlt;

    // Creating P & H2 & li Elements
    const projectHeadingElement = document.createElement("h2");
    const projectDetailsPElement = document.createElement("p");

    // Creating Div Containers Elements
    const singleProjectContainerDiv = document.createElement("div");
    singleProjectContainerDiv.className = "individualProject";
    const projectButtonsDiv = document.createElement("div");
    projectButtonsDiv.className = "projectButtonContainer";
    const mobileImageContainerDiv = document.createElement("div");
    mobileImageContainerDiv.className = "mobileImageContainer";
    const mobileImage = document.createElement("img");
    mobileImage.className = "mobileImage";

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

    let webTagLiElement;
    let productTagLiElement;
    let freelanceTagLiElement;

    if (projectWeb.trim()) {
      // Check if projectWeb is not empty or just whitespace
      webTagLiElement = document.createElement("li");
      webTagLiElement.innerHTML = projectWeb;
      tagContainer.append(webTagLiElement);
    }

    if (projectProduct.trim()) {
      // Check if projectProduct is not empty or just whitespace
      productTagLiElement = document.createElement("li");
      productTagLiElement.innerHTML = projectProduct;
      tagContainer.append(productTagLiElement);
    }

    if (projectFreelance.trim()) {
      // Check if projectFreelance is not empty or just whitespace
      freelanceTagLiElement = document.createElement("li");
      freelanceTagLiElement.innerHTML = projectFreelance;
      tagContainer.append(freelanceTagLiElement);
    }

    projectHeadingElement.innerHTML = projectTitle;
    projectDetailsPElement.innerHTML = projectDescription;
    liveLink.innerHTML = "Live Site";
    liveLink.target = "_blank";
    gitCode.innerHTML = "GitHub";
    gitCode.target = "_blank";

    mobileImage.src = mobileProjectImage;
    mobileImage.alt = mobileProjectImageAlt;

    // Appending Items
    singleProjectContainerDiv.append(
      projectHeadingElement,
      projectDetailsPElement,
      tagContainer,
      mobileImageContainerDiv,
      projectButtonsDiv
    );

    projectButtonsDiv.append(liveButton, codeButton);
    liveButton.append(liveLink);
    codeButton.append(gitCode);

    mobileImageContainerDiv.append(mobileImage);

    const recentProjectsHomePage = document.querySelector(".recentProjects");

    recentProjectsHomePage.append(singleProjectContainerDiv);

    // On Hover backgroundImage shows

    const handleMouseEnter = () => {
      if (window.innerWidth > 768) {
        // Check for screen width
        singleProjectContainerDiv.style.backgroundImage = `url(${projectImage})`;
        singleProjectContainerDiv.style.backgroundSize = "contain";

        // Hide the h2, p, and .tags elements
        projectHeadingElement.style.opacity = "0";
        projectDetailsPElement.style.opacity = "0";
        if (projectWeb.trim()) webTagLiElement.style.opacity = "0";
        if (projectProduct.trim()) productTagLiElement.style.opacity = "0";
        if (projectFreelance.trim()) freelanceTagLiElement.style.opacity = "0";
      }
    };

    singleProjectContainerDiv.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseLeave = () => {
      if (window.innerWidth > 768) {
        // Check for screen width
        singleProjectContainerDiv.style.backgroundImage = "";

        // Show the h2, p, and .tags elements again
        projectHeadingElement.style.opacity = "1";
        projectDetailsPElement.style.opacity = "1";
        if (projectWeb.trim()) webTagLiElement.style.opacity = "1";
        if (projectProduct.trim()) productTagLiElement.style.opacity = "1";
        if (projectFreelance.trim()) freelanceTagLiElement.style.opacity = "1";
      }
    };

    singleProjectContainerDiv.addEventListener("mouseleave", handleMouseLeave);
  }
});
