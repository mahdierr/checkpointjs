function ticketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Exemple d'utilisation
const ageInput = prompt("Entrez votre âge :");
alert(`Le prix du billet est de ${ticketPrice(parseInt(ageInput))} $.`);