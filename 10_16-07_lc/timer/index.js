export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,

  startTimer() {
    // input: callBack, number
    // output: number (timer ID)

    //callback
    //input: none
    //output und
    // const callBackk = function() {
    //   console.log('this VALUE', this);
    //   this.secondPassed += 1;

    //   if (this.secondPassed === 60) {
    //     this.minsPassed += 1;
    //     this.secondPassed = 0;
    //   }

    //   console.log(this.minsPassed, this.secondPassed);
    // };
    // const callbackBinded = callBackk.bind(this);

    this.timerId = setInterval(() => {
      console.log('this VALUE', this);
      this.secondsPassed += 1;

      if (this.secondsPassed === 5) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }

      console.log(this.minsPassed, this.secondsPassed);
    }, 1000);
  },

  stopTimer() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  },

  getTime() {
    return `${this.minsPassed}:${this.secondsPassed > 9 ? this.secondsPassed : '0' + this.secondsPassed}`;
  },

  resetTimer() {
    this.stopTimer();
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// timer.getTime();

// timer.startTimer();

// setTimeout(() => {
//   timer.stopTimer();
// }, 10000);

// timer.getTime();
