let filterClick = (e) => {
    filterProjects(e.target.dataset.filter);
}

function filterProjects(filter)
{
    let small = document.querySelector("#filters small");
    small.innerHTML = "Showing " + filter + " projects by date";
    let projects = document.querySelectorAll(".project");
    for (let project of projects) {
        if ((filter == "All" || project.dataset.filter.indexOf(filter) != -1) && project.dataset.filter.indexOf("hide") == -1) {
            project.className = "project";
        }
        else {
            project.className = "project hidden";
        }
    }
}

window.onload = function() {
    let filters = document.querySelectorAll("#filters li");
    for (let li of filters) {
        li.addEventListener("click", filterClick);
    }
}