// setTimeout, setInterval 不能保证在预期的时间执行任务
// setInterval 如果定时器执行过程中出现了耗时操作
// 多个回调函数会在耗时操作结束以后同时执行，这样可能就会带来性能上的问题

function setIntervalX(callback, interval) {
  let timer;

  let startTime = Date.now();
  let endTime = startTime;

  const loop = () => {
    // 下一帧再call requestAnimationFrame
    timer = window.requestAnimationFrame(loop);
    endTime = Date.now();
    if (endTime - startTime >= interval) {
      startTime = endTime = Date.now();
      callback(timer);
    }
  };

  // requestAnimationFrame 是一次性的
  timer = window.requestAnimationFrame(loop);
  return timer;
}

let a = 0;
setIntervalX((timer) => {
  console.log(1);
  a++;
  if (a === 3) window.cancelAnimationFrame()(timer);
}, 1000);
