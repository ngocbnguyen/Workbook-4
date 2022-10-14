let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
    ];

// Who is the Academy Member whose ID is 187?
function idSearch(members,id) {
    for (let index = 0; index < members.length; index++) {
        const member = members[index];
        if (member.memID == id) {
            console.log(member);
        }
    }
}
// idSearch(academyMembers,187);
// Who has have been in at least 3 films?

function participationCount(members,numberofmovies) {
    for (let index = 0; index < members.length; index++) {
        const member = members[index];
        if (member.films.length >= numberofmovies) {
            console.log(member);
        }
    }
}
// participationCount(academyMembers,3);
// Who has a name that starts with "Bob"?
function nameSearch(members,name) {
    for (let index = 0; index < members.length; index++) {
        const member = members[index];
        if (member.name.indexOf(name) != -1) {
            console.log(member);
        }
    }
}
// nameSearch(academyMembers,"Bob");
// HARDER: Which Academy Members have been in a film that starts with "A"
function filmSearch(members,filmName) {
    for (let index = 0; index < members.length; index++) {
        const member = members[index];
        for (let i = 0; i < member.films.length; i++) {
            const film = member.films[i];
            if (film.startsWith(filmName)) {
                console.log(member.name);
            }
        }
    }
}
filmSearch(academyMembers,"A");