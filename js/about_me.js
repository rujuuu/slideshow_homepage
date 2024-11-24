// Get all navigation links
const navLinks = document.querySelectorAll("nav a");

// Get the current page URL
const currentURL = window.location.href;

// Loop through links and add the 'active' class to the matching link
navLinks.forEach((link) => {
  if (link.href === currentURL) {
    link.classList.add("active");
  }
});
