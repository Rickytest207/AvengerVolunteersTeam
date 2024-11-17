// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form fields
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('form-message');

  // Basic validation
  if (!name || !email || !message) {
    formMessage.textContent = "All fields are required!";
    formMessage.style.color = "red";
    return;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address!";
    formMessage.style.color = "red";
    return;
  }

  // Success message
  formMessage.textContent = "Thank you! Your message has been sent.";
  formMessage.style.color = "green";

  // Optionally reset form
  document.getElementById('contact-form').reset();
});document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("autoplay-video");
    const videoSection = document.getElementById("video-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        },
        { threshold: 0.5 } // Video will autoplay when 50% of it is visible
    );

    observer.observe(videoSection);
});
