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

// Dynamically add to leaderboard 
/* <tr>
      <th scope="row">PASS</th>
        <td>Larry Bird</td>
          <td>Magic Johnson</td>
          <td>Michael Jordan</td>
        </tr> */
        //Append to tbody

const newRow = document.createElement("tr");
const column1 = document.createElement("th");
column1.setAttribute("scope", "row");
column1.innerText = username;
newRow.appendChild(column1);


const column2 = document.createElement("td");
column1.innerText = user.team[0];
newRow.appendChild(column2);

const column3 = document.createElement("td");
column1.innerText = user.team[1];
newRow.appendChild(column3);

const column4 = document.createElement("td");
column1.innerText = user.team[2];
newRow.appendChild(column4);


const column5 = document.createElement("td");
column1.innerText = "Victors";
newRow.appendChild(column5);


const tbody = document.getElementById("tbody");
tbody.appendChild(newRow);
