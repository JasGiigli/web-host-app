document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const sidebar = document.querySelector('.sidebar');
  const mediaQuery = window.matchMedia('(max-width: 768px)'); // Define your preferred media query breakpoint
  
  // Set sidebar visibility based on screen size
  if (!mediaQuery.matches) {
    sidebar.style.display = 'block';
    sidebar.style.width = '25%'; // Adjust the width as desired for larger screens
  }

  // Toggle sidebar visibility on hamburger button click for smaller screens
  hamburgerBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (mediaQuery.matches) {
      if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block';
        sidebar.style.width = '60%'; // Adjust width for smaller screens when toggling
        } else {
        sidebar.style.display = 'none';
      }
    }
  });

  // Hide sidebar when clicking outside of it for smaller screens
  document.addEventListener('click', (event) => {
    const isClickOutsideSidebar = !sidebar.contains(event.target) && !event.target.closest('.hamburger-btn');
    if (mediaQuery.matches && isClickOutsideSidebar) {
      sidebar.style.display = 'none';
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
    // ... your existing code
    
    const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
    
    // Scroll to top function
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll behavior
      });
    });
    
    // Show or hide scroll to top button based on scroll position
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
    
  });
   