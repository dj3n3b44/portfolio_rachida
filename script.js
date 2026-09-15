// 1. Fonction pour le bouton "Découvrir portfolio" sur la vidéo
function allerAuxProfils() {
    document.getElementById('accueil').classList.add('hidden');
    document.getElementById('choix-profil').classList.remove('hidden');
}

// 2. Fonction pour le choix du profil (Recruteur, Client, Visiteur)
function choisirProfil(profil) {
    // On nettoie les anciennes classes
    document.body.classList.remove('vue-visiteur', 'vue-client', 'vue-recruteur');
    // On ajoute la classe du profil choisi
    document.body.classList.add('vue-' + profil);
    
    // On cache l'écran de sélection et on affiche le portfolio
    document.getElementById('choix-profil').classList.add('hidden');
    document.getElementById('portfolio-principal').classList.remove('hidden');
}

// 3. Fonction pour les onglets du portfolio
function changerOnglet(idCategorie) {
    // On cache toutes les catégories
    let categories = document.querySelectorAll('.categorie-portfolio');
    categories.forEach(function(categorie) {
        categorie.classList.remove('active');
    });

    // On enlève le soulignement de tous les onglets
    let onglets = document.querySelectorAll('.onglet');
    onglets.forEach(function(onglet) {
        onglet.classList.remove('actif');
    });

    // On affiche la bonne catégorie et on souligne le bon onglet
    document.getElementById(idCategorie).classList.add('active');
    event.currentTarget.classList.add('actif');
}

// 4. Fonctions pour la fenêtre modale (détails du projet)
function ouvrirModal(titreProjet) {
    document.getElementById('titre-modale').innerText = titreProjet;
    document.getElementById('fenetre-modale').classList.remove('hidden');
}

function fermerModal() {
    document.getElementById('fenetre-modale').classList.add('hidden');
}