// Fonction pour passer de l'accueil au choix des profils
function allerAuxProfils() {
    // On cache l'accueil
    document.getElementById('accueil').classList.add('hidden');
    
    // On affiche la section des profils
    document.getElementById('choix-profil').classList.remove('hidden');
    
    console.log("Passage à la sélection des profils !");
}