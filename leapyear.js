function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} est une année bissextile.`;
    } else {
        return `${year} n'est pas une année bissextile.`;
    }
}

// Exemple d'utilisation
const yearInput = prompt("Entrez une année :");
alert(isLeapYear(parseInt(yearInput)));