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
    const _this = this;
    const args = arguments;

    let now = Date.now();

    if (now - prev > delay) {
      fn.apply(_this, args);
      previous = now;
    }
  };
}

// 函数节流的应用场景
// 间隔一段时间执行一次回调的场景有：
// - 滚动加载，加载更多或滚到底部监听
// - 谷歌搜索框，搜索联想功能
// - 高频点击提交，表单重复提交
