let N = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed:"));

let m = 0;
let sum = 0;
let d = seed + 2;

while (sum < N) {
    m++;

    if (m % d !== 0) {
        sum += m;
    }
}

alert(m + " " + sum);
