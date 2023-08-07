
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for your message!';
    form.parentNode.appendChild(thankYouMessage);

   
    form.remove();
  });
}


const sliderContainer = document.querySelector('.slider-container');
const images = sliderContainer.querySelectorAll('img');
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].style.transform = 'translateX(-100%)';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.transform = 'translateX(0)';
}

// Start the slider interval
const sliderInterval = setInterval(showNextImage, 3000);

// Pause the slider on hover
sliderContainer.addEventListener('mouseenter', () => {
  clearInterval(sliderInterval);
});

// Resume the slider on mouse leave
sliderContainer.addEventListener('mouseleave', () => {
  sliderInterval = setInterval(showNextImage, 3000);
});
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuIcon.classList.toggle('active');
});
const imageGrid = document.querySelector('.image-grid');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

// Function to open the modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  modals.forEach(modal => {
    modal.style.display = 'none';
  });
}

// Event listener for image clicks
imageGrid.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'IMG' && target.dataset.modal) {
    const modalId = target.dataset.modal;
    openModal(modalId);
  }
});

// Event listener for close button clicks
closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', closeModal);
});
const contactForm = document.getElementById('contact-form');

function validateForm(event) {
  event.preventDefault();

  // Get form input values
  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;

  // Simple validation checks
  if (name.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (email.trim() === '') {
    alert('Please enter your email.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (message.trim() === '') {
    alert('Please enter your message.');
    return;
  }

  // If all checks pass, you can submit the form to the server here
  alert('Form submitted successfully!');
  contactForm.reset();
}

function isValidEmail(email) {
  // Basic email validation regex (you may use a more comprehensive regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

contactForm.addEventListener('submit', validateForm);
// ... Existing JavaScript code ...

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const headerOffset = 100; // Adjust this value to consider your fixed header height
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});
// ... Existing JavaScript code ...

// Image carousel
const carouselImages = document.querySelectorAll('.carousel-image');
let currentImageIndex = 0;
const carouselInterval = 3000; // Time interval for changing images (in milliseconds)

function showNextImage() {
  carouselImages[currentImageIndex].style.opacity = '0';
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  carouselImages[currentImageIndex].style.opacity = '1';
}

setInterval(showNextImage, carouselInterval);
// ... Existing JavaScript code ...

// Back to Top button
const backToTopBtn = document.getElementById('back-to-top-btn');

// Show/hide Back to Top button based on scroll position
function toggleBackToTopButton() {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}

// Smooth scrolling to the top when Back to Top button is clicked
function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

backToTopBtn.addEventListener('click', scrollToTop);

// Listen for scroll events to show/hide Back to Top button
window.addEventListener('scroll', toggleBackToTopButton);
// ... Existing JavaScript code ...

// Highlight active navigation link
function highlightActiveNavLink() {
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('nav a');

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Adjust this value to consider your fixed header height
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
      const sectionId = section.getAttribute('id');

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Listen for scroll events to highlight the active navigation link
window.addEventListener('scroll', highlightActiveNavLink);
