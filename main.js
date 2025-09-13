const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const overlay = document.querySelector('#overlay')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    overlay.classList.toggle('active')
})




// Close menu when clicking overlay

const menuCards = document.querySelector('.menu-cards');
menuCards.innerHTML += menuCards.innerHTML;  // duplicate all cards


let scrollSpeed = 1;  
let autoScrollInterval;

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    menuCards.scrollLeft += scrollSpeed;

    // Reset earlier (halfway point, because we doubled cards)
    if (menuCards.scrollLeft >= menuCards.scrollWidth / 2) {
      menuCards.scrollLeft = 0;
    }
  }, 20);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

startAutoScroll();

// Pause when hovering over a card
document.querySelectorAll('.menu-cards .card').forEach(card => {
  card.addEventListener('mouseenter', stopAutoScroll);
  card.addEventListener('mouseleave', startAutoScroll);
});



