 const menuToggle = document.getElementById('menuToggle');
        const navOverlay = document.getElementById('navOverlay');
        const navLinks = document.querySelectorAll('.nav-links a');

        function toggleMenu() {
            menuToggle.classList.toggle('active');
            navOverlay.classList.toggle('active');
            
            document.body.style.overflow = navOverlay.classList.contains('active') ? 'hidden' : 'auto';
        }

        menuToggle.addEventListener('click', toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggleMenu();
            });
        });
