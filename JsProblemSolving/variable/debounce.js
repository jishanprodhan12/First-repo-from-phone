function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
const debouncedFn = debounce(() => {
  console.log("API Call");
}, 500);

// Multiple calls
debouncedFn();
debouncedFn();
debouncedFn();
// "API Call" শুধু একবার print হবে
