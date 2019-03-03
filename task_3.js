class Warrior {
  constructor(name, attackType, hp) {
    this.name = name;
    this.attackType = attackType;
    this.hp = hp;
  }

  attack() {
    let min, max;

    if (this.attackType === 1) {
      min = 1;
      max = 10;
    } else {
      min = 5;
      max = 15;
    }

    return Math.random() * (max - min) + min;
  }
}

class Gladiator extends Warrior {
  constructor(name, attackType = 1, hp = 150) {
    super(name, attackType, hp);
  }
}

class Monster extends Warrior {
  constructor(name, attackType = 2, hp = 85) {
    super(name, attackType, hp);
  }
}

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.winner = '';
  }

  start() {
    const hit = (p1, p2) => {
      p2.hp -= p1.attack();
      if (p2.hp <= 0) {
        return true;
      }
    };

    while(true) {
      if(hit(this.player1, this.player2)) {
        this.winner = this.player1.name;
        break;
      }

      if(hit(this.player2, this.player1)) {
        this.winner = this.player2.name;
        break;
      }
    }
  }
}

const gladiator = new Gladiator('Maximus');
const monster = new Monster('Monster');
const game = new Game(gladiator, monster);

game.start();
console.log(game.winner);
