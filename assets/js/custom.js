

const infoButton = $('#infoButton');
const infoModal = $('#infoModal');
const closeModal = $('#closeModal');

infoButton.on('click', () => {
    infoModal.fadeIn();  
    infoModal.removeClass('hidden');
});

closeModal.on('click', () => {
    infoModal.fadeOut();  
    infoModal.addClass('hidden');
});



const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});





