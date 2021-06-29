const args = process.argv.slice(2);

const times = args.map(element => Number(element) * 1000);

times.forEach(element => {
  if (element > 0) {
    setTimeout(() => {
      process.stdout.write(`\x07`);
    }, element);
  }
});



