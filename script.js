document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");

  // Smooth scroll to sections
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth",
      });
    });
  });

  // Add scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
