function sum() {
  return Object.keys(arguments).reduce((sum, current) => {
    return sum += arguments[current];
  }, 0);
}
