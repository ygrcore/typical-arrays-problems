
exports.min = function min (array) {
  if (array == undefined) {
    return 0;
  }
  let minChar = array.length ? array[0] : 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < minChar) {
      minChar = array[i];
    }
  }
  return minChar
}

exports.max = function max (array) {
  if (array == undefined) {
    return 0;
  }
  let minChar = array.length ? array[0] : 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > minChar) {
      minChar = array[i];
    }
  }
  return minChar
}

exports.avg = function avg (array) {
  if (array === undefined) {
    return 0;
  }
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let avg = array.length ? sum / array.length : 0;
  return avg;
}
