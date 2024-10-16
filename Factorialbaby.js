function factorial(n) {
    if (n === 0) {
        return 1;  // 0! er definert som 1
    }
    return n * factorial(n - 1);
}

// Be brukeren om input
const userInput = prompt("Skriv inn et tall for å beregne fakultetet: ");
const n = parseInt(userInput);  // Konverter input til et tall

// Sjekk om input er et gyldig positivt tall
if (isNaN(n) || n < 0) {
    alert("KUN POSITIVE TALL");
} else {
    const result = factorial(n);  // Beregn fakultet
    alert(`Fakultet av ${n} er ${result}`);  // Vis resultatet som en alert
}
