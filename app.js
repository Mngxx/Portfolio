// Mobile Navigation Toggle
const navToggleButton = document.querySelector('#navlisticon');
const navList = document.querySelector('#navlist');
const navItems = document.querySelectorAll('.navitems');

navToggleButton.addEventListener('click', () => {
  navList.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navList.classList.add('hidden');
  });
});

// Close mobile menu on window resize if above tablet breakpoint
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    navList.classList.add('hidden');
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
