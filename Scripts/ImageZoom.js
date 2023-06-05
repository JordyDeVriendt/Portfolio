function openImage(image) {
  var lightboxOverlay = document.getElementById("lightbox-overlay");
  var lightboxImage = document.getElementById("lightbox-image");

  lightboxImage.src = image.src;
  lightboxOverlay.style.display = "flex";
}

function closeImage() {
  var lightboxOverlay = document.getElementById("lightbox-overlay");
  lightboxOverlay.style.display = "none";
}

document
  .getElementById("lightbox-overlay")
  .addEventListener("click", function () {
    closeImage();
  });
