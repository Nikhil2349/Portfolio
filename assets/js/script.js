particlesJS('particles-js', {
    "particles": {
        "number": {
        "value": 120,
        "density": {
            "enable": true,
            "value_area": 550
        }
        },
        "color": {
        "value": "#124898"
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
            "enable": true,
            "speed": 3,
            "opacity_min": 0.1,
            "sync": true
        }
        },
        "size": {
        "value": 5,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 20,
            "size_min": 0.1,
            "sync": false
        }
        },
        "line_linked": {
        "enable": true,
        "distance": 130,
        "color": "#ddd",
        "opacity": 0.4,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 4,
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

    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.querySelector('body');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.card');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');

                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

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

    Array.from(circularProgress).forEach((progressBar) => {
      const progressValue = progressBar.querySelector(".percentage");
      const innerCircle = progressBar.querySelector(".inner-circle");
      let startValue = 0,
        endValue = Number(progressBar.getAttribute("data-percentage")),
        speed = 20,
        progressColor = progressBar.getAttribute("data-progress-color");
    
      const progress = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;
        progressValue.style.color = `${progressColor}`;
    
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
    });