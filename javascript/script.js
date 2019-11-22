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
let loadtime = 1000;
let filterClick = (e) => {
    load();
    setTimeout(() => {
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
    }, loadtime/2);
}

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
    let projectLink = document.querySelector("#pjLink span");

    header.innerHTML = title;
    details[0].innerHTML = type;
    details[1].innerHTML = date;
    details[2].innerHTML = role;
    details[3].innerHTML = info;
    imgs[0].src = img0;
    imgs[1].src = img1;
    console.log(link);
    if (link == '')
        projectLink.innerHTML = '';
    else if (link.indexOf('iframe') >= 0)
        projectLink.innerHTML = 'Link to Project: <br>' + link;
    else
        projectLink.innerHTML = '<a href=' + link + ` target="_blank">Project Website <i class="fa fa-external-link" aria-hidden="true"></i></a>`;
}

let backToMain = () => {
    page2.className = "OOF";
}

const projectButtons = document.querySelectorAll(".infoButton");

page2.addEventListener("click", backToMain);

const mainPage = document.querySelector("main").innerHTML;

function load() {
    document.querySelector("#loadingTop").className = "load";
    document.querySelector("#loadingBot").className = "load";

    setTimeout(() => {
        document.querySelector("#loadingTop").className = "unload";
        document.querySelector("#loadingBot").className = "unload";

        setTimeout(() => {
            document.querySelector("#loadingTop").className = "reset";
            document.querySelector("#loadingBot").className = "reset";
        }, loadtime);
        
    }, loadtime);
}

function unload() {

}

let toProject = (e) => {
    load();

    page2.className = "";

    switch (e.target.value) {
        case 'aries':
            changeDetails("Aries Defense",
                "Paid Internship",
                "July 2019 - Present",
                "Software Enginner",
                "",
                'Files/Images/tntb.jpg',
                'Files/Images/TNTCo.jpg',
                'http://www.ariesdefense.com/');
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
                'https://zytion-levin.itch.io/chromatic-intensity');
            break;
        case 'ship':
            changeDetails("Untitle Ship Game",
                "Game Jam: RIT CSH Fall Hackathon 2018",
                "October 2018",
                "Solo-Devloper",
                "",
                '',
                '',
                'https://zytion-levin.itch.io/csh-hackathon-fall-2018');
            break;
        case 'omp':
            changeDetails("One Moment Please",
                "Game Jam: GMTK Game Jam 2019",
                "April 2019",
                "Gameplay Programmer, UI/UX Programmer, Game Designer",
                "",
                '',
                '',
                'https://zytion-levin.itch.io/one-moment-please');
            break;
        case 'dunce':
            changeDetails("Daily Dunce",
                "Game Jam: RIT Game Dev Club 2018",
                "November 2018",
                "Gameplay & AI Programmer",
                "",
                '',
                '',
                'https://zytion-levin.itch.io/daily-dunce');
            break;
        case 'ducks':
            changeDetails("Server Ducks",
                "Game Jam: RIT BrickHack V",
                "Februrary 2019",
                "Server Programmer",
                "",
                '',
                '',
                'https://zytion-levin.itch.io/server-ducks');
            break;
        case 'edlogics':
            changeDetails("Edlogics",
                "Intern",
                "July 2017 - October 2017",
                "Research Intern",
                "",
                '',
                '',
                'http://www.edlogics.com/')
            break;
        case 'portfolio':
            changeDetails("Portfolio Website",
                "Personal Project",
                "October 2018 - Present",
                "Solo-Devloper",
                "",
                '',
                '',
                'index.html');
            break;
        case 'hinterworld':
            changeDetails("Hinterworld",
                "School Project",
                "October 2019",
                "Solo-Devloper",
                "",
                '',
                ' ',
                'https://people.rit.edu/bil1616/235/project1/');
            break;
        case 'luv':
            changeDetails("Level Up Village",
                "Afterschool Camp",
                "March 2016 - April 2016",
                "Teacher Assistant",
                "",
                '',
                '',
                'https://www.levelupvillage.com/');
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