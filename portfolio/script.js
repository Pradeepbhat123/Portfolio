function filterProjects(type) {
  const items = document.querySelectorAll('.portfolio-item');
  items.forEach(item => {
      if (type === 'all' || item.classList.contains(type)) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});