/* script.js */
function calculate() {
    // Récupérer le lien du bien immobilier
    const propertyLink = document.getElementById('property-link').value;
    
    // Simuler l'extraction des données à partir du lien
    // Remplacer par une vraie extraction des données selon le format du site
    const extractedData = {
        price: 250000, // Exemple de prix extrait
        surface: 85,   // Exemple de surface extraite
        location: "Paris", // Exemple de localisation extraite
        travaux: true, // Exemple de travaux
        cost_travaux: 50000 // Exemple de coût des travaux
    };

    // Calculer le coût total du projet
    const totalOperationCost = extractedData.price + (extractedData.travaux ? extractedData.cost_travaux : 0);

    // Calculer le rendement locatif (Exemple: 10% du prix par an)
    const rentalIncomePerYear = extractedData.surface * 30 * 12; // Exemple de calcul
    const rentalYield = (rentalIncomePerYear / totalOperationCost) * 100;

    // Calculer le bénéfice à la revente (Exemple: 20% d'appréciation)
    const resaleValue = totalOperationCost * 1.2;
    const resaleProfit = resaleValue - totalOperationCost;

    // Afficher les résultats
    document.getElementById('results').innerHTML = `
        <p>Coût total de l'opération : ${totalOperationCost.toFixed(2)} €</p>
        <p>Revenu locatif annuel total : ${rentalIncomePerYear.toFixed(2)} €</p>
        <p>Rendement locatif : ${rentalYield.toFixed(2)} %</p>
        <p>Bénéfice à la revente : ${resaleProfit.toFixed(2)} €</p>
    `;
}
