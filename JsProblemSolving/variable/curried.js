function currySum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(currySum(1)(2)(3)); // 6
