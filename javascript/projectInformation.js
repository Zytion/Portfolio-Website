let toProject = (e) => {
    window.scrollTo(0, 0);
    page2.className = "";
    page1.className = "hidden";
//load();
    switch (e.target.value) {
        case 'Spearit':
            changeDetails("Spearit",
                "Class Project",
                "September 2021 - Present",
                "Project Manager & Programmer",
                "" +
                "" +
                "" +
                "" +
                "",
                '',
                '',
                '');
            break;
        case 'REU':
            changeDetails("Research in Immersive Media Computing at Georgia State University",
                "Summer Internship",
                "July 2021 - November 2021",
                "Intern",
                "" +
                "" +
                "" +
                "" +
                "",
                '',
                '',
                '');
            break;
        case 'WWO':
            changeDetails("Witch Way Out",
                "Class Project",
                "October 2019",
                "Team Lead and Game Designer",
                "" +
                "" +
                "" +
                "" +
                "",
                '',
                '',
                'https://zytion-levin.itch.io/witch-way-out');
            break;
        case 'hegemony':
            changeDetails("Hegemony",
                "Class Project",
                "September 2019",
                "Team Lead and Game Designer",
                "Created a 2-6 person board game based on the Ethshar book series." +
                "In hegemony you play as...." +
                "" +
                "" +
                "",
                '',
                '',
                'https://www.youtube.com/watch?v=ZXgnS97QkDk&t=15s');
            break;
        case 'aries':
            changeDetails("Aries Defense",
                "Paid Internship",
                "July 2019 - Present",
                "Software Enginner",
                "Worked for 7 months as a Software Enginner intern at Aries Defense, LLC. " +
                "Durring my time there I worked on devolping a WPF application that delt with transfering files on our devices. " +
                "This program required the use of multiple file transfer protocols (FTP and SFTP), multithreading tasks, and UI/UX design. " +
                "After my summer intership, I was kept on for an additional 3 months remotely." +
                "I helped with implimenting user feedback, creating a user manual for my program, and performing bugfixes.",
                'tntb.jpg',
                'TNTCo.jpg',
                'http://www.ariesdefense.com/');
            break;
        case 'riptide':
            changeDetails("Project Riptide",
                "Game Project",
                "January 2019 - July 2021",
                "UI/UX Programmer, Project Manager, & Publisher",
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
                "My role in this game was programming the player’s movement. I created the movement, wall bouncing, grapple power, and sprint abilities for the player. I also helped out the level design team with learning to use Unity’s new level painting tools.",
                'Chromatic1.png',
                'chromatic2.png',
                'https://zytion-levin.itch.io/chromatic-intensity');
            break;
        case 'ship':
            changeDetails("Untitled Ship Game",
                "Game Jam: RIT CSH Fall Hackathon 2018",
                "October 2018",
                "Solo-Devloper",
                "I decided to do this by creating a game concept where you patrol an island where enemy ships spawn in and patrol the area. When the player gets close to an enemy ship it will stop patrolling and begin following and attacking the player ship. The ships are programed to flee back to their starting point if they are too damaged or if the player gets too far away from them.",
                '',
                '',
                'https://zytion-levin.itch.io/csh-hackathon-fall-2018');
            break;
        case 'omp':
            changeDetails("One Moment Please",
                "Game Jam: GMTK Game Jam 2019",
                "April 2019",
                "Gameplay Programmer, UI/UX Programmer, Game Designer",
                "My role in this game was programming the player’s movement. I created the movement, wall bouncing, grapple power, and sprint abilities for the player. I also helped out the level design team with learning to use Unity’s new level painting tools.",
                '',
                '',
                'https://zytion-levin.itch.io/one-moment-please');
            break;
        case 'dunce':
            changeDetails("Daily Dunce",
                "Game Jam: RIT Game Dev Club 2018",
                "November 2018",
                "Gameplay & AI Programmer",
                "My role in this project was the gameplay and AI programming. I created the gameplay for all 3 levels for our game. My teammates created the levels and art assets while I wrote the player controls and NPC AI algorithms using Unity's NavMesh AI.",
                '',
                '',
                'https://zytion-levin.itch.io/daily-dunce');
            break;
        case 'ducks':
            changeDetails("Server Ducks",
                "Game Jam: RIT BrickHack V",
                "Februrary 2019",
                "Server Programmer",
                "My role in this project was writing the software that initialized the servers and handle sending data to and from the server client. Once I set up the server and client software I would write the code that would send information that the game programmers needed to make the game playable.                ",
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
                "This allows employers to see any projects that do no fit into my resume or see pictures and or videos of my projects to get a better picture of what I can do.\n" +
                "This site was built from scratch by me using HTML5, CSS, Javascript, and PHP and is currently hosted on the RIT web servers.",
                '',
                '',
                'index.html');
            break;
        case 'hinterworld':
            changeDetails("Meat Clicker",
                "School Project",
                "October 2019",
                "Devloper",
                "Created a fully working web browser game using HTML, CSS, and JS. I worked on creating the DOM for the game and connecting the various elements of our script to it. My role was to basically create the working game from the game loop that my partner had written. I also delt with adding things like music, animations, and effects.",
                'meatclicker1.PNG',
                'meatclicker2.PNG',
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
        case 'crunchy':
            changeDetails("Crunchy",
            "Hackathon: BrickHack 6",
            "February 2020",
            "Backend Devloper",
            "My role in this project was to create the swiping feature for the website. " +
            "This involved the HTML setting up the pictures, the CSS that fit the swiping into our page, and the JS/jQuerry to swipe. " +
            "I also assised my two partners with bugfixing involded with CSS issues and impimenting our recipie and wegmans API's.",
            'crunchy-header.jpg',
            'crunchy-preview.png',
            'https://devpost.com/software/crunchy-5gvd6o');
            break;
        default:
            changeDetails("title", "type", "date", "role", "info", '', '', '');
            break;
    }
}


for (let button of projectButtons) {
    button.addEventListener("click", toProject);
}