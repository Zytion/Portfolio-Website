window.onload = function load() {
    createAllProjects();
    filterProjects("All");
}

function createAllProjects() {
    // createProject("One Moment Please", 
    //             "Game C# Unity Jam",
    //             "-201908", 
    //             "omp.jpg", 
    //             "omp-hover.gif", 
    //             "My submission for the Game Maker’s Toolkit Game Jam for 2019." +
    //             " This is a top-down turn-based puzzle game, where you have one minute " +
    //             "to enter commands for your worker before he executes your commands in turn order against the robots.", 
    //             "omp");
}
function createProject(title, filters, order, baseImg, hoverImg, text, buttonValue) {
    $('#portfolio').append(
    $('<li></li>', {'class': 'project', 'data-filter': filters, "style": "order: " + order + ";"}).append(
        $('<figure></figure>', {"class" : "projectFig"}).append(
            $('<img></img>', {'class': 'baseImg', 'src': "Files/Images/ProjectBases/" + baseImg, 'alt' : ''}),
            $('<img></img>', {'class': 'hoverImg', 'src': "Files/Images/ProjectHovers/" + hoverImg, 'alt' : ''}),
            $('<figcaption></figcaption>').append(
                $('<h2></h2>').text(title),
                $('<div></div>').text(text),
                $('<button></button>', {'class': 'infoButton', 'value': buttonValue}).html(`More Info <i class="fa fa-angle-right" aria-hidden="true"></i>`).click(toProject)
            )
        )
    ));
}