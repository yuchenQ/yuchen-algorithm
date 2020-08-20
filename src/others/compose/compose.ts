/**
 * @template T
 * @param {Array<(param: T | any) => any>} funcs
 * @param {<T>} param
 * @returns {any}
 */
const compose = <T>(...funcs: Array<(param: T | any) => any>): any => (param: T) => {
  return funcs.reduceRight((p, f) => f(p), param);
};

/**
 * @template T
 * @param {Array<(param: T | any) => any>} funcs
 * @param {<T>} param
 * @returns {any}
 */
const pipe = <T>(...funcs: Array<(param: T | any) => any>): any => (param: T) => {
  return funcs.reduce((p, f) => f(p), param);
};

