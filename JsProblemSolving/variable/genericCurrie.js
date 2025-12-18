function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...next) => curried(...args, ...next);
  };
}
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
