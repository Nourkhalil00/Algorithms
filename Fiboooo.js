function fibo(n) { // Dette er en rekrusiv metode bare så du vet det!!!!
    // Sjekk for base tilfeller
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    // Fibonacci er summen av de to foregående tallene
    return fibo(n - 1) + fibo(n - 2);
}

const userInput = prompt("Skriv inn et tall(:"); // Be brukeren om input
const n = parseInt(userInput); // Konverter input til et tall

if (isNaN(n) || n < 0) {
    alert("KUN POSITIVE TALL ):"); // Feilmelding for negative tall eller ugyldig input
} else {
    const fibonacciNumber = fibo(n); // Beregn Fibonacci-tallet for n
    alert(`Fibonacci-tallet for ${n} er: ${fibonacciNumber}`);
}
