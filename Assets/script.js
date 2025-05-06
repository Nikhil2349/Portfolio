const roles = ['Data Scientist.', 'AI/ML Engineer.', 'Web Developer.'];
const typingText = document.getElementById('typing-text');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typingSpeed = isDeleting ? 40 : 100;
    
    if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeRole, typingSpeed);
}

document.addEventListener('DOMContentLoaded', typeRole);

function highlightNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

document.addEventListener('DOMContentLoaded', highlightNavLink);

function addNavBlurEffect() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', addNavBlurEffect);

function filter(category) {
    const buttons = document.querySelectorAll('.button-container .btn');
    buttons.forEach(button => {
        button.classList.remove('active');
        
        if (button.textContent.toLowerCase().trim() === category.toLowerCase().trim()) {
            button.classList.add('active');
        }
    });

    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const cardCategory = card.dataset.category.toLowerCase().replace(/\s/g, '');
        const filterCategory = category.toLowerCase().replace(/\s/g, '');

        if (filterCategory === 'all' || cardCategory === filterCategory) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const allButton = document.querySelector('.button-container .btn');
    if (allButton) {
        allButton.classList.add('active');
    }
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
      const cardId = this.getAttribute('data-id');
      const popup = document.getElementById(`popup-card-${cardId}`);
      if (popup) popup.classList.add('active');
    });
});

document.querySelectorAll('.popup-overlay .close-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.popup-overlay').classList.remove('active');
    });
});

// Close popup when browser back button is clicked
window.addEventListener('popstate', function() {
    const activePopup = document.querySelector('.popup-overlay.active');
    if (activePopup) {
        activePopup.classList.remove('active');
        window.history.forward();
    }
});



const burger = document.querySelector('.burger');
const navLinks = document.querySelector('nav ul');
const navItems = document.querySelectorAll('nav ul li a');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close burger menu when any nav item is clicked
navItems.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});


