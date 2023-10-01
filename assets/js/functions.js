$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});

const menuLinks = document.querySelectorAll('.nav a');

// Ajoutez un gestionnaire d'événements à chaque lien du menu
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    
    const targetId = link.getAttribute('href').substring(1); // Récupère l'ID de la section cible
    const targetSection = document.getElementById(targetId); // Sélectionne la section cible
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Faites défiler la section cible de manière fluide
    }
  });
});

const slider = document.querySelector('#full-slide');
const sliderItems = slider.querySelectorAll('.banner li');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');
let currentIndex = 0;

// Fonction pour afficher une diapositive spécifique
function showSlide(index) {
  sliderItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Gestionnaire d'événement pour le bouton "Suivant"
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= sliderItems.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});

// Gestionnaire d'événement pour le bouton "Précédent"
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderItems.length - 1;
  }
  showSlide(currentIndex);
});

// Affiche la première diapositive au chargement de la page
showSlide(currentIndex);

//map de leafletjs.com

 