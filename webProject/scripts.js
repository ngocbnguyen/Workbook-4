"use strict";

let teams = [
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" }, 
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
];
teams.sort (function (a,b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name == b.name){
        return 0;
    } else {return 1;}
});
window.onload = function () {
  initTeamDropdown();
};
function initTeamDropdown() {
  const teamList = document.getElementById("teamList");
  for (const team of teams) {
    let option = new Option(team.name);
    option.value = team.code;
    teamList.appendChild(option);
  }
}

function displayTeam() {
    const teamList = document.getElementById("teamList");
    const teamCode = teamList.value;
    for (let index = 0; index < teams.length; index++) {
        const team = teams[index];
        if (team.code ==  teamCode) {
            document.getElementById("message").innerText = `You have selected ${team.name} (${team.code}) who plays in ${team.plays}.`
        } 
    }
}
