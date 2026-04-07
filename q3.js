let n = Number(prompt("Enter n:"));
let k = Number(prompt("Enter k:"));

let ans = -1;

for (let x = 0; x <= 100000; x++) {
    let val = n + x;

    let s = val.toString();
    let rev = s.split('').reverse().join('');

    if (s === rev && val % k === 0) {
        ans = x;
        break;
    }
}

alert(ans);
