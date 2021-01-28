export function randomNumber(min, max) {
    if (min > max) {
      let temp = max;
      max = min;
      min = temp;
    }
  
    if (min <= 0) {
      return Math.floor(Math.random() * (max + Math.abs(min) + 1)) + min;
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

