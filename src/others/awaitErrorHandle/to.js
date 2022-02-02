/**
 * @param {*} promise
 * @return {*} promise
 */
function to(promise) {
  return promise.then((data) => [data, null]).catch((err) => [null, err]);
}
