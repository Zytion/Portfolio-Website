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
        if (project.dataset.filter.indexOf(filter) != -1 || filter == "All") {
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

let toProject = () => {
    document.querySelector("main").innerHTML = '';
}

let backToMain = () => {
    document.querySelector("main").innerHTML = mainPage;
}

document.querySelector("#bodyBack").addEventListener("click", backToMain);

const mainPage = document.querySelector("main").innerHTML;