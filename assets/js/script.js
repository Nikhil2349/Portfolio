particlesJS('particles-js', {
    "particles": {
        "number": {
        "value": 20,
        "density": {
            "enable": true,
            "value_area": 550
        }
        },
        "color": {
        "value": "#ff8c00"
        },
        "shape": {
        "type": "circle",
        "stroke": {
            "width": 0,
            "color": "#ddd"
        },
        "polygon": {
            "nb_sides": 5
        }
        },
        "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 3,
            "opacity_min": 0.1,
            "sync": true
        }
        },
        "size": {
        "value": 15,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 20,
            "size_min": 0.1,
            "sync": false
        }
        },
        "line_linked": {
        "enable": false,
        "distance": 130,
        "color": "#ddd",
        "opacity": 0.4,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 5,
        "direction": "top-right",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
        }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        },
        "onclick": {
            "enable": true,
            "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
            "distance": 400,
            "line_linked": {
            "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
        },
        "repulse": {
            "distance": 200,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
        }
    },
    "retina_detect": true
    });

    document.addEventListener('DOMContentLoaded', function () {
        const burger = document.querySelector('.burger');
        const navLinks = document.querySelector('.nav-links');
        const navLinkItems = document.querySelectorAll('.nav-link');

        // Toggle the menu visibility when the burger is clicked
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggle the class 'active' on nav-links
            burger.classList.toggle('active'); // Optional: Toggle burger icon animation
        });

        // Close the menu and navigate to the link when a nav link is clicked
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active'); // Close the menu
                burger.classList.remove('active'); // Optionally remove burger icon animation
            });
        });
    });
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    const navLinkEls = document.querySelectorAll('.nav-link');
    const sectionEls = document.querySelectorAll('section');

    let currentSection = 'home'; // Initial section, adjust as needed

    window.addEventListener('scroll', () => {
        sectionEls.forEach(sectionEl => {
            const sectionTop = sectionEl.offsetTop - 50; // Adjust offset for sticky headers
            const sectionHeight = sectionEl.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = sectionEl.id;
            }
        });

        navLinkEls.forEach(navLinkEl => {
            if (navLinkEl.href.includes(`#${currentSection}`)) {
                document.querySelector('.active')?.classList.remove('active');
                navLinkEl.classList.add('active');
            }
        });
    });



    const body = document.querySelector('body');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.card');
    


    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        // Set the first filter button as active by default
        const firstButton = filterButtons[0];
        firstButton.classList.add('active');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
    
                // Remove the 'active' class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add the 'active' class to the clicked button
                button.classList.add('active');
    
                // Show or hide project cards based on the filter
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    });
    

    //popup operation//
    function openPopup(id) {
        document.getElementById(id).style.display = 'flex';
    }

    function closePopup(id) {
        document.getElementById(id).style.display = 'none';
    }
    const circularProgress = document.querySelectorAll(".circular-progress");

    const startProgress = (progressBar) => {
      const progressValue = progressBar.querySelector(".percentage");
      const innerCircle = progressBar.querySelector(".inner-circle");
      let startValue = 0,
        endValue = Number(progressBar.getAttribute("data-percentage")),
        speed = 30,
        progressColor = progressBar.getAttribute("data-progress-color");
    
      const progress = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;
        progressValue.style.color = "white"; // Change color to white
        progressValue.style.fontSize = "18px"; // Increase font size to 18px (you can adjust this value)
    
        innerCircle.style.backgroundColor = `${progressBar.getAttribute(
          "data-inner-circle-color"
        )}`;
    
        progressBar.style.background = `conic-gradient(${progressColor} ${
          startValue * 3.6
        }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
        if (startValue === endValue) {
          clearInterval(progress);
        }
      }, speed);
    };
    
    
    const observerOptions = {
      root: null, // observe in the viewport
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 50% of the element is in view
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startProgress(entry.target); // Start animation when in view
          observer.unobserve(entry.target); // Stop observing after animation starts
        }
      });
    }, observerOptions);
    
    // Observe each circular progress element
    Array.from(circularProgress).forEach((progressBar) => {
      observer.observe(progressBar);
    });
    

    