//https://adventofcode.com/2021/day/1
//https://adventofcode.com/2021/day/1/input
//part 1
const measurements = document.getElementsByTagName("pre")[0].textContent.split("\n").map((value) => Number(value));
measurements.reduce((acc, value, currentIndex, arr) => {
  if (currentIndex > 0) {
    let prevValue = arr[currentIndex - 1];
    if (value > prevValue) {
      return acc + 1;
    }
    return acc;
  }
  return 1;
}, 0);


//part 2
function getMeasurements() {
  const MEASUREMENT_WINDOW = 3;
  let sum1 = measurements[0];
  let sum2 = 0;
  let count = 0;
  for(let i = 1; i < measurements.length; i++) {
    let value = measurements[i];
    sum1 += value;
    sum2 += value;
    if(i >= MEASUREMENT_WINDOW - 1) {
      let nextValue = measurements[i + 1] ? measurements[i + 1] : 0;
      sum2 += nextValue;
      count += sum2 > sum1 ? 1 : 0;

      let prevValue = measurements[i - 1];
      sum1 = prevValue + value;
      sum2 = value;
    }
  }
  return  count;
}
