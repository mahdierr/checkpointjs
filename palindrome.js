function isPalindrome(str) {
    // Nettoyer la chaîne (ignorer espaces, ponctuation et majuscules)
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    if (cleanStr.length <= 1) return true;
    if (cleanStr[0] !== cleanStr[cleanStr.length - 1]) return false;
    return isPalindrome(cleanStr.slice(1, -1));
}

// Exemple d'utilisation
const stringInput = prompt("Entrez une chaîne :");
alert(isPalindrome(stringInput) ? "C'est un palindrome." : "Ce n'est pas un palindrome.");