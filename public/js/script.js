const checkbox = document.querySelector('.checkbox');
const menuItems = document.querySelector('.menu-items');
const projectsButton = document.querySelector('.projects-button');

checkbox.addEventListener('click', function() {
  menuItems.classList.toggle('active');
  
  // Add a delay to hide the button for a smoother transition
  setTimeout(() => {
    projectsButton.classList.toggle('hide');
  }, 300); // Adjust this value to match your transition duration in CSS
});

