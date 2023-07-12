function restartAnimation() {
    var e = document.querySelector('.fade-in-left');
    e.classList.remove('fade-in-left');
    void e.offsetWidth; // Forcez le recalcul du style
    e.classList.add('fade-in-left');
  }
  
  // Réinitialisez l'animation toutes les 2 minutes
  setInterval(restartAnimation, 8 * 1000);