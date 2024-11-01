// assets/js/slot-machine.js
const symbols = [
  { icon: '🍒', name: 'Cherry' },
  { icon: '🍋', name: 'Lemon' },
  { icon: '🍎', name: 'Apple' },
];

class SlotMachine {
  constructor(element) {
    this.element = element;
    this.reels = [0, 0, 0];
    this.spinning = false;
    this.result = '';
    this.balance = 100; // Initial balance
    this.spinCost = 10; // Cost per spin

    this.render();
    this.attachEventListeners();
  }

  render() {
    this.element.innerHTML = `
      <div class="slot-machine">
        <h2 class="title">Slot Machine</h2>
        <p class="balance">Balance: $${this.balance}</p>
        <div class="reels">
          ${this.reels.map(reel => `<div class="reel">${symbols[reel].icon}</div>`).join('')}
        </div>
        <p class="result">${this.result}</p>
        <button class="spin-button" ${this.balance < this.spinCost ? 'disabled' : ''}>
          ${this.spinning ? 'Spinning...' : 'Spin ($10)'}
        </button>
      </div>
    `;
    this.attachEventListeners();
  }

  attachEventListeners() {
    const spinButton = this.element.querySelector('.spin-button');
    spinButton.addEventListener('click', () => this.spin());
  }

  spin() {
    if (this.spinning || this.balance < this.spinCost) return;

    this.balance -= this.spinCost;
    this.spinning = true;
    this.result = '';
    this.render();

    setTimeout(() => {
      this.reels = this.reels.map(() => Math.floor(Math.random() * symbols.length));
      this.spinning = false;
      this.checkWin();
      this.render();
    }, 1000);
  }

  checkWin() {
    if (this.reels[0] === this.reels[1] && this.reels[1] === this.reels[2]) {
      const winAmount = this.spinCost * 3;
      this.balance += winAmount;
      this.result = `Jackpot! You win $${winAmount}!`;
    } else if (this.reels[0] === this.reels[1] || this.reels[1] === this.reels[2] || this.reels[0] === this.reels[2]) {
      const winAmount = this.spinCost * 0.5;
      this.balance += winAmount;
      this.result = `Two matches! You win $${winAmount}!`;
    } else {
      this.result = 'No match. Try again!';
    }

    if (this.balance < this.spinCost) {
      this.result += ' Game over. Refresh to play again.';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const slotMachineElement = document.getElementById('slot-machine');
  if (slotMachineElement) {
    new SlotMachine(slotMachineElement);
  }
});