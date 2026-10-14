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

    // On ouvre toujours l'onglet "À propos de moi" en premier
    changerPage('page-apropos');
}

// Navigation entre les onglets principaux (À propos, Parcours, Tarifs)
function changerPage(idPage) {
    let pages = document.querySelectorAll('.page-principale');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    let liens = document.querySelectorAll('.lien-nav');
    liens.forEach(function(lien) {
        lien.classList.remove('actif');
    });

    document.getElementById(idPage).classList.add('active');
    document.querySelector('[data-page="' + idPage + '"]').classList.add('actif');
    window.scrollTo(0, 0);
}

// Bouton "Changer de profil" dans la navigation
function changerProfil() {
    document.getElementById('portfolio-principal').classList.add('hidden');
    document.getElementById('choix-profil').classList.remove('hidden');
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

// 4. Les données de chaque projet (le nom doit être identique à celui de ouvrirModal('...'))
let projets = {
    'SOLEYADOM': {
        categorie: 'Projet client',
        images: ['assets/soleyadom-logo.png'],
        description: "Création d'une identité visuelle complète et déclinaison sur de multiples supports de communication, imprimés et digitaux.",
        client: [
            'Identité visuelle : création du nouveau logo.',
            'Supports print : 1 carte de visite et 2 flyers.',
            'Plaquettes commerciales : "Pourquoi choisir Soleyadom", offres B2B Ménage et présentation aide à domicile.',
            'Diaporamas : présentation de la charte graphique et du projet newsletter.',
            'Réseaux sociaux : 11 contenus (vidéo "La patience", posts LinkedIn, affiches et séries éditoriales).'
        ],
        recruteur: [
            'Branding : conception de logo et présentation de charte graphique.',
            'Édition et print : mise en page de 4 plaquettes commerciales, cartes de visite et flyers.',
            'Création de contenu : formats digitaux variés, storytelling et montage vidéo.',
            'Stratégie de communication : adaptation du discours visuel pour le B2B et le B2C.'
        ]
    },
    'Numelya': {
        categorie: 'Stage',
        images: ['assets/numelya.png'],
        description: "Stage de chargée de communication (mai – juillet 2026) : événements professionnels, réseaux sociaux et supports imprimés.",
        client: [
            'Cartes de visite et dépliants.',
            'Kakémonos et goodies.',
            'Reportages photo des événements.'
        ],
        recruteur: [
            "Organisation et coordination d'événements professionnels.",
            "Gestion et animation des réseaux sociaux de l'entreprise.",
            'Création de supports de communication print.',
            'Couverture photographique pour la communication digitale.'
        ]
    },
    'Caritavia': {
        categorie: 'Projet personnel',
        images: ['assets/caritavia.png'],
        description: "Association humanitaire et environnementale que j'ai co-fondée. J'en ai conçu toute l'image et la communication.",
        client: [
            'Identité visuelle de l\'association.',
            'Site web.',
            'Supports pour les réseaux sociaux et les événements.'
        ],
        recruteur: [
            'Conception d\'une identité visuelle de A à Z.',
            'Communication globale : réseaux sociaux, supports, événements.',
            'Gestion de projet et organisation d\'actions sur le terrain.'
        ]
    },
    'Rchdaa Design': {
        categorie: 'Projet personnel',
        images: ['assets/rchdaa-design.png'],
        description: "L'identité de mon activité freelance : un univers d'atelier créatif, discret et chaleureux.",
        client: [
            'Logo.',
            'Charte graphique (couleurs, typographies).'
        ],
        recruteur: [
            'Création de logo et de charte graphique.',
            'Construction d\'une image de marque personnelle.'
        ]
    },
    'Forum de Vauréal': {
        categorie: 'Projet scolaire',
        images: ['assets/forum-vaureal.png'],
        description: 'Description à venir.',
        client: [],
        recruteur: []
    },
    'Lycée Galilée': {
        categorie: 'Projet scolaire',
        images: ['assets/lycee-galilee.png'],
        description: 'Description à venir.',
        client: [],
        recruteur: []
    },
    'Ultrabrite': {
        categorie: 'Projet scolaire',
        images: ['assets/ultrabrite.png'],
        description: 'Description à venir.',
        client: [],
        recruteur: []
    },
    'Éternelle Harmonie': {
        categorie: 'Projet personnel',
        images: ['assets/eternelle-harmonie.png'],
        description: 'Description à venir.',
        client: [],
        recruteur: []
    },
    'Hidden Souls': {
        categorie: 'Projet personnel',
        images: ['assets/hidden-souls.png'],
        description: 'Description à venir.',
        client: [],
        recruteur: []
    }
};

let projetOuvert = null;
let imageActuelle = 0;

// 5. Fonctions pour la fenêtre modale (détails du projet)
function ouvrirModal(nomProjet) {
    projetOuvert = projets[nomProjet];
    imageActuelle = 0;

    document.getElementById('categorie-modale').innerText = projetOuvert.categorie;
    document.getElementById('titre-modale').innerText = nomProjet;
    document.getElementById('description-modale').innerText = projetOuvert.description;
    remplirListe('liste-client', projetOuvert.client);
    remplirListe('liste-recruteur', projetOuvert.recruteur);
    afficherImage();

    document.getElementById('fenetre-modale').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fermerModal() {
    document.getElementById('fenetre-modale').classList.add('hidden');
    document.body.style.overflow = '';
}

function remplirListe(idListe, elements) {
    let liste = document.getElementById(idListe);
    liste.innerHTML = '';
    elements.forEach(function(texte) {
        let li = document.createElement('li');
        li.innerText = texte;
        liste.appendChild(li);
    });
    // On cache le bloc entier si le projet n'a rien à afficher
    liste.parentElement.classList.toggle('hidden', elements.length === 0);
}

// Carrousel : on avance (+1) ou on recule (-1) dans les images du projet
function changerImage(sens) {
    let total = projetOuvert.images.length;
    imageActuelle = (imageActuelle + sens + total) % total;
    afficherImage();
}

function afficherImage() {
    let image = document.getElementById('image-modale');
    image.src = projetOuvert.images[imageActuelle];
    image.alt = document.getElementById('titre-modale').innerText;

    // Les flèches n'apparaissent que s'il y a plusieurs images
    let plusieurs = projetOuvert.images.length > 1;
    document.querySelectorAll('.fleche').forEach(function(fleche) {
        fleche.classList.toggle('hidden', !plusieurs);
    });
}

// Fermer la modale avec la touche Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fermerModal();
    }
});