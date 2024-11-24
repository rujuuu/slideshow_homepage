// Initialize variables
let currentSlide = 0;
const slides = document.querySelectorAll(".slider img"); // Select all images in the slider
const slideInterval = 2000; // Time between transitions (2 seconds)

// Function to change the image
function changeImg() {
  // Hide the current slide
  slides[currentSlide].style.display = "none";

  // Move to the next slide (loop back to the start if at the end)
  currentSlide = (currentSlide + 1) % slides.length;

  // Show the next slide
  slides[currentSlide].style.display = "block";

  // Call the function again after the specified interval
  setTimeout(changeImg, slideInterval);
}

// Start the slideshow when the page loads
window.onload = changeImg;
