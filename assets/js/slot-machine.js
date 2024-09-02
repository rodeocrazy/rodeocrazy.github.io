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
  
      this.render();
      this.attachEventListeners();
    }
  
    render() {
      this.element.innerHTML = `
        <div class="slot-machine">
          <h2 class="title">Slot Machine</h2>
          <div class="reels">
            ${this.reels.map(reel => `<div class="reel">${symbols[reel].icon}</div>`).join('')}
          </div>
          <p class="result">${this.result}</p>
          <button class="spin-button">${this.spinning ? 'Spinning...' : 'Spin'}</button>
        </div>
      `;
      this.attachEventListeners(); // Reattach event listeners after each render
    }
  
    attachEventListeners() {
      const spinButton = this.element.querySelector('.spin-button');
      spinButton.addEventListener('click', () => this.spin());
    }
  
    spin() {
      if (this.spinning) return;
  
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
        this.result = 'Jackpot! You win!';
      } else if (this.reels[0] === this.reels[1] || this.reels[1] === this.reels[2] || this.reels[0] === this.reels[2]) {
        this.result = 'Two matches! Small win!';
      } else {
        this.result = 'No match. Try again!';
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const slotMachineElement = document.getElementById('slot-machine');
    if (slotMachineElement) {
      new SlotMachine(slotMachineElement);
    }
  });