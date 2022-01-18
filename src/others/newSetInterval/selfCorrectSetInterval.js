function selfCorrectSetInterval(callback, interval, totalTimes = 0) {
  let timer;
  let count = 0;
  const startTime = new Date().getTime();

  const loop = () => {
    count++;

    const offset = new Date().getTime() - startTime - count * interval;

    let nextTime = interval - offset;
    if (nextTime < 0) nextTime = 0;

    timer = setTimeout(loop, nextTime);
    callback(timer);

    if (count === totalTimes) {
      clearTimeout(timer);
    }
  };

  timer = setTimeout(loop, interval);
}

let a = 1;
selfCorrectSetInterval((timer) => {
  console.log(a);
  a++;
}, 1000, 1);
