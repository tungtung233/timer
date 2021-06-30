const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const questions = function () {
  rl.question('Press \'b\' to beep immediately, else input any number between 1-9 to set timer.', (answer1) => {

    if (answer1 === 'b') {
      process.stdout.write(`\x07`)
      questions()

    } else if (/[1-9]/.test(Number(answer1)) && Number(answer1) <= 9 && Number(answer1) >= 1) {

      console.log(`setting timer for ${answer1} seconds...`)

      let time = Number(answer1) * 1000

      setTimeout(() => {
        process.stdout.write(`\x07`);
      }, time);

      questions()

    } else {
      console.log('Please input \'b\' or a number between 1-9')
      questions()
    }

  })
}

questions()

rl.on('SIGINT', () => {
  rl.close(process.stdout.write('\nThanks for using me, ciao!\n'));
});