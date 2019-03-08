const sum = (...arguments) => {
  return Object.keys(arguments).reduce((sum, current) => {
    return sum += arguments[current];
  }, 0);
};

const multiply = (x, y) => {
  return x * y;
};

const getMemoization = () => {
  let cache = {};
  return (func) => {
    return (...arguments) => {
      const key = func.toString() + Object.values(arguments).toString();
      let fromCache = true;

      if (!cache.hasOwnProperty(key)) {
        cache[key] = func.apply(null, arguments);
        fromCache = false;
      }

      return `${cache[key]} ${fromCache ? 'взято из кеша' : 'вычислено'}`;
    }
  }
};

const memoization = getMemoization();

console.log(memoization(multiply)(1 ,2)); // вычислено
console.log(memoization(multiply)(1 ,3)); // вычислено
console.log(memoization(multiply)(1 ,2)); // взято из кеша
console.log(memoization(sum)(1 ,3, 4));  // вычислено
console.log(memoization(sum)(10));  // вычислено
console.log(memoization(sum)(10));  // взято из кеша
