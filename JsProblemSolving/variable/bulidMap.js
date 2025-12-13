Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }

  return result;
};

const nums = [1, 2, 3];

const doubled = nums.myMap(num => num * 2);
console.log(doubled); // [2, 4, 6]
