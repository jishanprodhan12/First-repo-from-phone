function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  const clone = {};
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      clone[key] = deepClone(value[key]);
    }
  }
  return clone;
}


const obj = {
  name: "JS",
  info: {
    year: 1995,
    creators: ["Brendan"]
  }
};

const copied = deepClone(obj);
copied.info.year = 2025;

console.log(obj.info.year);   // 1995
console.log(copied.info.year); // 2025
