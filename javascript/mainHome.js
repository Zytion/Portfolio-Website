window.onload = function load() {
    filterProjects("All");
}

let projects = document.querySelectorAll(".project");
let small = document.querySelector("#filters small");
let loadtime = 1000;
let filterClick = (e) => {
    load();
    setTimeout(() => {
        filterProjects(e.target.dataset.filter);
    }, loadtime / 2);
}

function filterProjects(filter)
{
    small.innerHTML = "Showing " + filter + " projects by date";
    for (let project of projects) {
        if ((filter == "All" || project.dataset.filter.indexOf(filter) != -1) && project.dataset.filter.indexOf("hide") == -1) {
            project.className = "project";
        }
        else {
            project.className = "project hidden";
        }
    }
}

const filters = document.querySelectorAll("#filters li");
for (let li of filters) {
    li.addEventListener("click", filterClick);
}

const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");

let changeDetails = (title, type, date, role, info, headerImg, img0, link) => {
    let header = document.querySelector("#projectContents h1");
    let details = document.querySelectorAll("#projectContents dd");
    let imgs = document.querySelectorAll("#projectContents img");
    let projectLink = document.querySelector("#pjLink span");
    let headImage = document.querySelector("#page2 div.heading");

    header.innerHTML = title;
    details[0].innerHTML = type;
    details[1].innerHTML = date;
    details[2].innerHTML = role;
    details[3].innerHTML = info;
    if(headerImg == '')
        $(headImage).css('background-image', `url("235/portfolio/Files/Images/me.jpg")`);
    else
        $(headImage).css('background-image', `url("235/portfolio/${headerImg}")`);
    if(img0 != '')
        img0 = '235/portfolio/' + img0;
    imgs[0].src = img0;
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
    page1.className = "";
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