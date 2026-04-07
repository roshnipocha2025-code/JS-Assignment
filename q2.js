let n = Number(prompt("Enter n:"));
let seed = Number(prompt("Enter seed:"));

let cur = n;

for (let i = 0; i < 3; i++) {
    if (cur % 2 === 0) {
        cur = Math.floor(cur / 2) + seed;
    } else {
        cur = cur * 3 - seed;
    }
}

let mid = Math.floor(cur / 10) % 10;

if (cur >= 100 && cur <= 999 && mid === seed) {
    alert("YES, " + cur);
} else {
    alert("NO, " + cur);
}
