// Smooth scroll to target section
document.querySelectorAll(".smooth-scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Get the target section's ID from the href attribute
    const targetSectionId = this.getAttribute("href").substring(1);

    // Scroll to the target section
    document.getElementById(targetSectionId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
