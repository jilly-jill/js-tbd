const team = require('searching');

// define the user and cpu
const user = {
  "health": 100,
  "team": teamData,
  "enemies_defeated": [],
  "isPlaying": false
}

function getCpuTeam() {

}

const cpu = {
  "health": 100,
  "team": [],
  "isPlaying": true
}



//call functions then loop while in play
fight(userTeam, cpuTeam);

while (user.isPlaying === true && cpu.isPlaying === true) {
    fight(user.team, cpu.team)
}



function rollDice() {
    // return Math.floor(Math.random() * 20);
    let randomNumber = function(low, high) {
        return Math.floor( Math.random() * (1 + high - low) ) + low;
      };
      
      let cube = document.getElementById('cube');
      let outcome = document.getElementById('outcome');
      let outcomeText = document.getElementById('text');
      let messageDelay; //timer
      let fadeout; //timer
      const messages = [
        'A T T A C K ! -1',
        'Martial Arts Kick! -2',
        'Weaponed Summoned! -3',
        'Combo Punches -4',
        'Dart Attack -5',
        'Lightning bolt succeeded -6',
        'Landing Stomp -7',
        'Heat Blast -8',
        'Ebony Blade Cut -9',
        'We Could Do This All Day." -10',
        'Lets Get Nuts! -11',
        'Level 3 HYPER COMBO! -12',
        'Tell Us: Do You Bleed? You Will." -13',
        'Throws a Car!  -14',
        'Throws a Train! -15',
        'Dual Attack -16',
        'S.H.E.I.L.D. fires all airship cannons  -17',
        'Army Uses Predator Drone! -18',
        'Punched With Infinity Stone!! -19',
        'T E A M  A S S E M B L E S -20'
      ];
}


function fight(userTeam=user.team, cpuTeam=cpu.team) {
    user.isPlaying = true;

    // cpu.current_fighter = cpuFighter;
    // user.current_fighter = userFighter;
   // let defeated;
    const winMessage = `You injured ${defeated}! Enemies health is now ${cpu.health}`;
    const loseMessage = `Your ${defeated} was injured! Team Health is now ${user.health}`;

    // USER TURN
    /* button roll = rollDice() , button calls rollDice() on click?*/
    cpu.health -= randomNumber;  // subtract return variable from CPU health

    if (cpu.health < 70 && cpu.health > 50) {
        cpu.team.shift();
    } 

    if (cpu.health < 70 && cpu.health < 50) {
        cpu.team.pop();
    }

    if (cpu.health === 0) {
        cpu.team.shift();
        user.enemies_defeated = cpu.team;
        cpu.isPlaying = false;
    }

    //CPU TURN
    /* button roll = rollDice() , button calls rollDice() for CPU fake press*/
    user.health -= randomNumber;// subtract from User health
    
    
    if (user.health < 70 && user.health > 50) {
        user.team.shift();
    } 
    
    if (user.health < 70 && user.health < 50) {
        user.team.pop();
    }

    if (user.health === 0) {
        user.team.shift();
        user.isPlaying = false;
    }

}



