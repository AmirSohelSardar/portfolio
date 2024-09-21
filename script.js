document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const routes = document.getElementById('routes');
  
    hamburger.addEventListener('click', () => {
        routes.classList.toggle('active');
    });
  });
  