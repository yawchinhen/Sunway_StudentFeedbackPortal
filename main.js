// ===== Responsive Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Simple Hero Animation Text =====
document.addEventListener('DOMContentLoaded', () => {
  const heroText = document.querySelector('.hero h1');
  heroText.style.opacity = '0';
  setTimeout(() => {
    heroText.style.transition = 'opacity 1s ease-in';
    heroText.style.opacity = '1';
  }, 400);
});

// --- FEEDBACK FORM VALIDATION ---
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedbackForm');
  const message = document.getElementById('formMessage');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.studentName.value.trim();
      const email = form.studentEmail.value.trim();
      const course = form.course.value;
      const comments = form.comments.value.trim();

      if (!name || !email || !course || !comments) {
        message.textContent = "⚠️ Please fill in all required fields.";
        message.style.color = "red";
        return;
      }

      // Simulate successful submission
      message.textContent = "✅ Thank you! Your feedback has been submitted successfully.";
      message.style.color = "green";
      form.reset();

      // Fade out message after a few seconds
      setTimeout(() => {
        message.textContent = "";
      }, 4000);
    });
  }
});
