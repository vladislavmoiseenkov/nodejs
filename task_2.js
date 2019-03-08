
function integers() {
  return {
    [Symbol.iterator]() {
      let value = 0;
      return {
        next() {
          return {
            done: false,
            value: value++
          };
        }
      };
    }
  };
}

function take(n, iter) {
  return {
    [Symbol.iterator]() {
      let count = 0;
      const iterator = iter[Symbol.iterator]();

      return {
        next() {
          count++;
          return {
            done: !(count - 1 <= n),
            value: iterator.next().value
          };
        }
      };
    }
  };
}

const iter = integers();

for (let i of take(3, iter)) {
  console.log(i)
}
// 0, 1, 2, 3
