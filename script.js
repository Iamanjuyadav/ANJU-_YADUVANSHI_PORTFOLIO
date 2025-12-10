
//JavaScript for Hamburger Menu Logic 
        document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.getElementById('hamburger-menu');
            const navLinks = document.querySelector('.nav-links');
            const navBar = document.getElementById('navbar');

            // 1. Toggle mobile menu visibility
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            // 2. Close mobile menu when a link is clicked
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                });
            });
            
            // 3. Optional: Add a subtle shadow to the navbar when scrolling
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    navBar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
                } else {
                    navBar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }
            });
        });
