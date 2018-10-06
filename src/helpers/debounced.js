export default (delay, fn) => {
  let timerId;
  return function(...args) {
    return new Promise(resolve => {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        timerId = null;
        resolve(fn(...args));
      }, delay);
    });
  };
};
