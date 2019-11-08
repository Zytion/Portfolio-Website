function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let projects = document.querySelectorAll(".project");
let small = document.querySelector("#filters small");

let filterClick = (e) => {
    let filter = e.target.dataset.filter;
    small.innerHTML = "Showing " + filter + " projects by date";
    for (let project of projects) {
        if ((project.dataset.filter.indexOf(filter) != -1 || filter == "All") && project.dataset.filter.indexOf("hide") == -1) {
            project.className = "project";
        }
        else {
            project.className = "project hidden";
        }
    }
}

const backButton = document.querySelector("#bodyBack");
const filters = document.querySelectorAll("#filters li");
for (let li of filters) {
    li.addEventListener("click", filterClick);
}

const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");

let changeDetails = (title, type, date, role, info, img0, img1, link) => {
    let header = document.querySelector("#projectContents h1");
    let details = document.querySelectorAll("#projectContents dd");
    let imgs = document.querySelectorAll("#projectContents img");
    let projectLink = document.querySelector("#pjLink");

    header.innerHTML = title;
    details[0].innerHTML = type;
    details[1].innerHTML = date;
    details[2].innerHTML = role;
    details[3].innerHTML = info;
    imgs[0].src = img0;
    imgs[1].src = img1;
    console.log(link);
    if (link == '')
        document.querySelector("#pjLink").innerHTML = '';
    else if (link.indexOf('iframe') >= 0)
        projectLink.innerHTML = 'Link to Project: <br>' + link;
    else
        projectLink.innerHTML = 'Link to Project: ' + link;
}

let backToMain = () => {
    page2.className = "OOF";
}

const projectButtons = document.querySelectorAll(".infoButton");

backButton.addEventListener("click", backToMain);

const mainPage = document.querySelector("main").innerHTML;

let toProject = (e) => {
    page2.className = "";

    switch (e.target.dataset.project) {
        case 'aries':
            changeDetails("Aries Defense",
                "Paid Internship",
                "July 2019 - Present",
                "Software Enginner",
                "",
                '../Files/Images/tntb.jpg',
                '../Files/Images/TNTCo.jpg',
                '<a href="http://www.ariesdefense.com/">Aries Defense Homepage</a>');
            break;
        case 'riptide':
            changeDetails("Project Riptide",
                "Game Project",
                "January 2019 - Present",
                "UI/UX Programmer & Logistics Lead",
                "Project Riptide is my first attempt at a long term, large scale game project." + 
                "We are a team of 7 working to develop (and hopefully release) a fully working mobile sailing game." + 
                "My role in this project is logistics manager and a UI/UX programmer." + 
                "I wrote up contracts for our members and worked with another group member and staff at RIT to create a financial" +
                "plan for our game project. On top of these tasks, I also handle the programming of parts of the game." + 
                "I created the sailing port UI system and am currently working on UI/UX elements for the sailing controls, " +
                "such as a steering interface and indicators for speed and firing controls.",
                '',
                '',
                '');
            break;
        case 'chromatic':
            changeDetails("Chromatic Intensity",
                "Game Jam: Global Game Jam",
                "January 2019",
                "Game Play Programmer",
                "",
                '',
                '',
                '<iframe src="https://itch.io/embed/362109?dark=true" width="552" height="167" frameborder="0"></iframe>');
            break;
        case 'ship':
            changeDetails("Untitle Ship Game",
                "Game Jam: RIT CSH Fall Hackathon 2018",
                "October 2018",
                "Solo-Devloper",
                "",
                '',
                '',
                '<iframe src="https://itch.io/embed/314125?dark=true" width="552" height="167" frameborder="0"></iframe>');
            break;
        case 'omp':
            changeDetails("One Moment Please",
                "Game Jam: GMTK Game Jam 2019",
                "April 2019",
                "Gameplay Programmer, UI/UX Programmer, Game Designer",
                "",
                '',
                '',
                '<iframe src="https://itch.io/embed/462130?dark=true" width="552" height="167" frameborder="0"></iframe>');
            break;
        case 'dunce':
            changeDetails("Daily Dunce",
                "Game Jam: RIT Game Dev Club 2018",
                "November 2018",
                "Gameplay & AI Programmer",
                "",
                '',
                '',
                '<iframe src="https://itch.io/embed/328846?dark=true" width="552" height="167" frameborder="0"></iframe>');
            break;
        case 'ducks':
            changeDetails("Server Ducks",
                "Game Jam: RIT BrickHack V",
                "Februrary 2019",
                "Server Programmer",
                "",
                '',
                '',
                '<iframe src="https://itch.io/embed/371924?dark=true" width="552" height="167" frameborder="0"></iframe>');
            break;
        case 'edlogics':
            changeDetails("Edlogics",
                "Intern",
                "July 2017 - October 2017",
                "Research Intern",
                "",
                '',
                '',
                '<a href="http://www.edlogics.com/">Edlogics Homepage</a>')
            break;
        case 'portfolio':
            changeDetails("Portfolio Website",
                "Personal Project",
                "October 2018 - Present",
                "Solo-Devloper",
                "",
                '',
                '',
                '<a href="index.html">www.people.rit.edu/bil1616</a>');
            break;
        case 'hinterworld':
            changeDetails("Hinterworld",
                "School Project",
                "October 2019",
                "Solo-Devloper",
                "",
                '',
                ' ',
                '<a href="https://people.rit.edu/bil1616/235/project1/">Hinterworld Webpage</a>');
            break;
        case 'luv':
            changeDetails("Level Up Village",
                "Afterschool Camp",
                "March 2016 - April 2016",
                "Teacher Assistant",
                "",
                '',
                '',
                '<a href="https://www.levelupvillage.com/">Level Up Village Homepage</a>');
            break;
        case 'compcamp':
            changeDetails("NSA Computer Camp",
                "Summer Camp",
                "July 2016",
                "Teacher's Assistant",
                "",
                '',
                '',
                '');
            break;
        default:
            header.innerHTML = "Project Not Found";
            for (let detail of details) {
                detail.innerHTML = "N/A";
            }
            break;
    }
}
for (let button of projectButtons) {
    button.addEventListener("click", toProject);
}