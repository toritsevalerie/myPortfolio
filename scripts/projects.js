import {
  ref,
  getDatabase,
  push,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// reference the database

const database = getDatabase(app);

//reference projects database

const projectRef = ref(database, "/projects");

// geting our projects from the database and displaying our data onto the page

get(projectRef).then((snapshot) => {
  const projectData = snapshot.val();

  //loop through the array to render each array item on the page
  for (let id in projectData) {
    //variable for each project object
    const eachProject = projectData[id];

    // Storing json data/object items in variables

    const projectTitle = eachProject.title;
    const projectDescription = eachProject.description;
    const projectTags = eachProject.tags;
    const githubLink = eachProject.gitHubLink;
    const liveSiteLink = eachProject.liveSiteLink;

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
  }
});
