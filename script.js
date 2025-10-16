// ==============================
// Portfolio JavaScript
// Consolidated & Clean Version
// ==============================

document.addEventListener("DOMContentLoaded", () => {

  // 🔹 1. Auto Update Year in Footer
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 🔹 2. Mobile Menu Toggle (for responsive navigation)
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector("nav ul");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open");
      navList.classList.toggle("nav-open");
    });
  }

  // 🔹 3. Contact Form (no backend)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Thank you! Your message has been received.");
      contactForm.reset();
    });
  }

  // 🔹 4. Animate Skill Cards
  const skillCards = document.querySelectorAll('.skill-card');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || '0s';
        entry.target.style.transitionDelay = delay;
        entry.target.classList.add('visible');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  skillCards.forEach(card => skillObserver.observe(card));

// 🔹 5. Animate Project Cards
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.getAttribute('data-delay') || '0s';
      entry.target.style.transitionDelay = delay;
      entry.target.classList.add('visible');
      projectObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

projectCards.forEach(card => projectObserver.observe(card));

// 🔹 6. Lightbox Modal for Projects (Fully Working)
const modal = document.getElementById("lightbox-modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");

// Make functions globally accessible for onclick in HTML
window.openModal = function(img) {
  if (!modal || !modalImg || !caption) return;

  modalImg.src = img.src;       // Set modal image
  caption.textContent = img.alt; // Set caption text

  modal.style.display = "block"; // Show modal
  modal.classList.add("show");    // Optional: for fade-in effect if CSS uses .show
}

window.closeModal = function() {
  if (!modal) return;

  modal.style.display = "none";  // Hide modal
  modal.classList.remove("show"); // Remove optional fade-in class
}

// Close modal when clicking outside the image
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}


  // 🔹 7. Animate Resume Boxes
  const resumeBoxes = document.querySelectorAll('.resume-box');
  const resumeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || '0s';
        entry.target.style.transitionDelay = delay;
        entry.target.classList.add('visible');
        resumeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  resumeBoxes.forEach(box => resumeObserver.observe(box));

  // 🔹 8. Animate Contact Section on Scroll
  const contactInfo = document.querySelector('.contact-info');
  const contactFormEl = document.querySelector('.contact-form');

  function revealContact() {
    const triggerBottom = window.innerHeight / 1.1;

    if(contactInfo) {
      const infoTop = contactInfo.getBoundingClientRect().top;
      if(infoTop < triggerBottom) contactInfo.classList.add('visible');
    }

    if(contactFormEl) {
      const formTop = contactFormEl.getBoundingClientRect().top;
      if(formTop < triggerBottom) contactFormEl.classList.add('visible');
    }
  }

  window.addEventListener('scroll', revealContact);
  revealContact(); // initial trigger in case elements are already visible

});

// Update footer year again (redundant but safe)
document.getElementById("year").textContent = new Date().getFullYear();

// Animate experience cards and paragraphs on scroll
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.about .card');
    const fadeTexts = document.querySelectorAll('.fade-text');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
    fadeTexts.forEach(text => observer.observe(text));
});
