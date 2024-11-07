// Toggle mobile navigation menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
