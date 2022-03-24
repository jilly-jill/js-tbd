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
        'Your Bard was killed',
        'You smote the orc',
        'You escaped the Ice Dragon',
        'Lightning Bolt succeeded',
        'Critical hit',
        'You are Lawful Evil',
        'You fell into the Well of Sorrows',
        'You found the Goblet of Endless Grog',
        'You encountered a Harpy',
        'Charisma + 10',
        'You lose 11 Hit Points',
        'You disarmed the trap',
        'Plate Mail + 3',
        '14 Damage',
        'Spell failure',
        'Backstab successful',
        'Your wand broke',
        'Surprise Attack',
        'You broke through the door',
        'You turned to stone'
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



