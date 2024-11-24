var i = 0; // start
var images = [];
var time = 2000; // Time between image transitions

// Store image element ids
images[0] = "slide-1";
images[1] = "slide-2";
images[2] = "slide-3";
images[3] = "slide-4";
images[4] = "slide-5";

// Function to change the image
function changeImg() {
  // Get the current image by its id and set the src to the next image
  for (var j = 0; j < images.length; j++) {
    var img = document.getElementById(images[j]);
    img.style.display = "none"; // Hide all images
  }

  // Show the current image
  var currentImg = document.getElementById(images[i]);
  currentImg.style.display = "block";

  // Cycle through images
  i = (i + 1) % images.length; // If i reaches the end, it will reset to 0

  setTimeout(changeImg, time); // Set the interval to change the image
}

window.onload = changeImg; // Call the function when the page loads


