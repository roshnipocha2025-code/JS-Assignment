let L = Number(prompt("Enter L:"));
let R = Number(prompt("Enter R:"));
let K = Number(prompt("Enter K:"));

let count = 0;

for (let i = L; i <= R; i++) {

  if (i % K !== 0) continue;

  let str = "" + i;

  if (str.includes('0')) continue;

  let sum = 0;
  for (let j = 0; j < str.length; j++) {
    sum += +str[j];
  }

  let prime = true;
  if (sum < 2) prime = false;

  for (let j = 2; j < sum; j++) {
    if (sum % j === 0) {
      prime = false;
      break;
    }
  }

  if (prime) count++;
}

alert(count);
