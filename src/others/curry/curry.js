// https://zh.javascript.info/currying-partials
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.call(this, ...args);
    } else {
      return function(...args1) {
        return curried.apply(this, [args, args1].flat());
      }
    }
  }
}
