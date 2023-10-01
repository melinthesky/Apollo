// menu fluid
$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});

const menuLinks = document.querySelectorAll('.nav a');


menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 
    
    const targetId = link.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId); 
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' }); 
    }
  });
});

// Slider
const slider = document.querySelector('#full-slide');
const sliderItems = slider.querySelectorAll('.banner li');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');
let currentIndex = 0;


function showSlide(index) {
  sliderItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= sliderItems.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderItems.length - 1;
  }
  showSlide(currentIndex);
});

showSlide(currentIndex);

//map leafletjs.com

var mymap = L.map('map').setView([45.4000, -71.9000], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mymap);

L.marker([45.4000, -71.9000]).addTo(mymap)
    .bindPopup('Sherbrooke, Québec, Canada').openPopup();

// Ajoutez la classe pour rendre la carte en  noir et blanc
var mapContainer = document.getElementById('map');
mapContainer.classList.add('black-and-white-map');
