// https://segmentfault.com/a/1190000018445196
// 每隔一段时间，只执行一次函数。
function throttle(fn, delay) {
  let timer;

  return function () {
    const _this = this;
    const args = arguments;

    if (timer) return;

    timer = setTimeout(function () {
      fn.apply(_this, args);
      // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
      timer = null;
    }, delay);
  };
}

function throttleX(fn, delay) {
  let prev = 0;
  return function () {
    let now = Date.now();

    if (now - prev > delay) {
      fn.apply(this, arguments);
      prev = now;
    }
  };
}

function throttle(fn, delay) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
    canRun = false; // 立即设置为false
    setTimeout(() => {
      // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, arguments);
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
      // 当定时器没有执行的时候标记永远是false，在开头被return掉
      canRun = true;
    }, delay);
  };
}

// 函数节流的应用场景
// 间隔一段时间执行一次回调的场景有：
// - 滚动加载，加载更多或滚到底部监听
// - 谷歌搜索框，搜索联想功能
// - 高频点击提交，表单重复提交
