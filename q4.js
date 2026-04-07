let base = Number(prompt("Enter base fare:"));
let distance = Number(prompt("Enter distance:"));
let late = Number(prompt("Enter late minutes:"));
let seed = Number(prompt("Enter seed:"));

let fare = base + 7 * distance;

if (late > 15) fare += 20;

if (distance > 10) {
    fare += fare * 0.1;
}

if (seed % 2 === 1) {
    fare -= seed;
} else {
    fare += seed;
}

fare = Math.ceil(fare / 5) * 5;

alert(fare);
