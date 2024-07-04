/* script.js */
function calculate() {
    // Récupérer le lien du bien immobilier
    const propertyLink = document.getElementById('property-link').value;
    
    // Simuler l'extraction des données à partir du lien
    // Remplacer par une vraie extraction des données selon le format du site
    const extractedData = {
        name: "Exemple de Bien",
        price: 250000, // Exemple de prix extrait
        surface: 85,   // Exemple de surface extraite
        location: "Paris", // Exemple de localisation extraite
        travaux: true, // Exemple de travaux
        cost_travaux: 50000, // Exemple de coût des travaux
        loyer_mensuel: 1500 // Exemple de loyer mensuel extrait
    };

    // Calculer le coût total du projet
    const totalOperationCost = extractedData.price + (extractedData.travaux ? extractedData.cost_travaux : 0);

    // Calculer le rendement locatif
    const rentalIncomePerYear = extractedData.loyer_mensuel * 12;
    const rentalYield = (rentalIncomePerYear / totalOperationCost) * 100;

    // Calculer le bénéfice à la revente
    const appreciationRate = 0.20; // Exemple d'appréciation de 20%
    const resaleValue = totalOperationCost * (1 + appreciationRate);
    const resaleProfit = resaleValue - totalOperationCost;

    // Afficher les résultats
    document.getElementById('results').innerHTML = `
        <h3>Nom du bien : ${extractedData.name}</h3>
        <p><strong>Coût total de l'opération :</strong> ${totalOperationCost.toFixed(2)} €</p>
        <p><strong>Revenu locatif annuel total :</strong> ${rentalIncomePerYear.toFixed(2)} €</p>
        <p><strong>Rendement locatif :</strong> ${rentalYield.toFixed(2)} %</p>
        <p><strong>Bénéfice à la revente :</strong> ${resaleProfit.toFixed(2)} €</p>
    `;
}
