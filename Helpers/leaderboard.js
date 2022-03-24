const username = require('win');



// grab the user.name field (from /Win) and set to map
//map the users team and the users enemies defeated
const leaderboardMap = new Map();
//name ,  team,  enemies
//const username is set on /win page
const teamsMap = new Map();

const playerTeam = user.team;
const cpuTeam = cpu.team;

teamsMap.set(playerTeam, cpuTeam);


//const name = username;
const userTeam = teamsMap.keys();
const enemyTeam = teamsMap.values();


console.log(username);
console.log(userTeam.next().value);
console.log(enemyTeam.next().value);


leaderboardMap.set(username, teamsMap);

const leaderboardKeys = leaderboardMap.keys();
const leaderboardValues = leaderboardMap.values();

console.log(leaderboardMap.keys);
console.log(leaderboardMap.value);

