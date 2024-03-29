// https://juejin.cn/post/7001767658265772039#heading-2
// count自增，记录理想执行时间
// 获取当前时间减去刚开始记录的startTime再减去理想执行时间得到时间偏差：等待执行栈为空的时间
// 根据时间偏差，计算下次倒计时设定的回调时间，从而达到纠正的目的
function selfCorrectSetInterval() {
  const timer = { value: null };

  const loop = (interval, cb) => {
    const startTime = Date.now();
    let count = 0;

    const fn = () => {
      count += 1;
      const offset = Date.now() - startTime - count * interval;
      const nextTime = interval - offset;

      if (nextTime < 0) {
        nextTime = 0;
      }

      timer.value = setTimeout(fn, nextTime);
      cb(timer.value);
    };
    timer.value = setTimeout(fn, interval);
  };

  return { call: loop, cancel: () => clearTimeout(timer.value) };
}

let a = 0;
const interval = selfCorrectSetInterval();
interval.call(1000, () => {
  a += 1;
  console.log(a);

  if (a === 5) interval.cancel();
});
