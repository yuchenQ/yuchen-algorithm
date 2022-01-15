// https://segmentfault.com/a/1190000018445196
// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
let timer;
function debounce(fn, delay) {
  clearTimeout(timer);

  timer = setTimeout(fn, delay);
}

// 在上面的代码中，会出现一个问题，var timer只能在setTimeout的父级作用域中，这样才是同一个timer，
// 并且为了方便防抖函数的调用和回调函数fn的传参问题，我们应该用闭包来解决这些问题。
function debounceX(fn, delay) {
  let timer;

  return function () {
    const _this = this,
    const args = arguments;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, delay);
  };
}

// 函数防抖的应用场景
// 连续的事件，只需触发一次回调的场景有：
// - 搜索框搜索输入。只需用户最后一次输入完，再发送请求
// - 手机号、邮箱验证输入检测
// - 窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染
