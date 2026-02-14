// Ludo Game Logic in JavaScript

class Player {
    constructor(name) {
        this.name = name;
        this.position = 0;
        this.color = this.assignColor();
    }

    assignColor() {
        const colors = ['red', 'green', 'blue', 'yellow'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    move(steps) {
        this.position += steps;
        // Logic for landing on a square can go here
    }
}

class LudoGame {
    constructor(players) {
        this.players = players;
        this.currentTurn = 0;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    playTurn() {
        const player = this.players[this.currentTurn];
        const steps = this.rollDice();
        player.move(steps);
        console.log(`${player.name} rolled a ${steps} and moved to position ${player.position}`);
        this.currentTurn = (this.currentTurn + 1) % this.players.length; // Switch turn
    }
}

// Example usage:
const players = [new Player('Alice'), new Player('Bob')];
const game = new LudoGame(players);
game.playTurn(); // Play a turn

