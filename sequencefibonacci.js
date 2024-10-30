function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exemple d'utilisation
const nInput = prompt("Entrez un nombre pour le nième Fibonacci :");
alert(`Le ${nInput}ème nombre de Fibonacci est ${fibonacci(parseInt(nInput))}.`);