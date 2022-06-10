let userInput = prompt("Input string to check below");
const pattern = /^(A|E|I|O|U)/;

if (pattern.test(userInput)) {
    console.log("Deze string begint met een gekapitaliseerde medeklinker.");
} else {
    console.error("Deze string begint NIET met een gekapitaliseerde medeklinker.");
}