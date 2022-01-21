// setTimeout, setInterval 不能保证在预期的时间执行任务
// setInterval 如果定时器执行过程中出现了耗时操作
// 多个回调函数会在耗时操作结束以后同时执行，这样可能就会带来性能上的问题

function setIntervalX() {
  const timer = { value: null };

  const loop = (interval, cb) => {
    if (!window || !window.requestAnimationFrame) return;

    let startTime = Date.now();
    let endTime = startTime;

    const fn = () => {
      timer.value = window.requestAnimationFrame(fn);

      endTime = Date.now();
      if (endTime - startTime >= interval) {
        endTime = startTime = Date.now();
        cb(timer);
      }
    };

    timer.value = window.requestAnimationFrame(fn);
  };

  return { timer, loop };
}

let a = 0;
const interval = setIntervalX();
const timer = interval.timer;
const intervalFn = interval.loop;

intervalFn((timer) => {
  console.log(1);
  a++;
  if (a === 3) window.cancelAnimationFrame(timer.value);
}, 1000);
