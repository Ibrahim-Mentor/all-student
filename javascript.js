document.addEventListener('DOMContentLoaded', () => {
    // --- STUDENT PROJECTS DATA ---
    // Update this array to add, remove, or change projects.
    const studentProjects = [
        {
            name: "Azan",
            title: "World of Shine - Professional Cleaning Services",
            url: "https://ibrahim-mentor.github.io/Azan/",
        },
        {
            name: "Umar",
            title: "Rayelle - Premium Eyewear",
            url: "https://ibrahim-mentor.github.io/Umar/",
        },
        {
            name: "Moiz",
            title: "MN Store - Modern Homepage",
            url: "https://ibrahim-mentor.github.io/Moiz/",
        }
    ];

    // --- THEME MANAGEMENT ---
    const themeManager = {
        current: localStorage.getItem('theme') || 'light',
        init() {
            document.documentElement.setAttribute('data-theme', this.current);
            const toggleBtn = document.getElementById('themeToggle');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', () => this.toggleTheme());
                this.updateToggleButton();
            }
        },
        toggleTheme() {
            this.current = this.current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', this.current);
            localStorage.setItem('theme', this.current);
            this.updateToggleButton();
            // Dispatch a custom event so other parts of the app can react
            document.dispatchEvent(new Event('themeChanged'));
        },
        updateToggleButton() {
            const icon = document.querySelector('#themeToggle .theme-icon');
            if (icon) {
                icon.textContent = this.current === 'light' ? '🌙' : '☀️';
            }
        }
    };
    
    // --- APP INITIALIZATION ---
    function initializeApp() {
        themeManager.init();

        const projectsGrid = document.getElementById('projectsGrid');
        if (projectsGrid) {
            renderProjects();
            // Listen for theme changes to regenerate QR codes with new colors
            document.addEventListener('themeChanged', () => generateAllQRCodes());
        }

        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! This is a demo form.');
                contactForm.reset();
            });
        }
    }

    // --- RENDER PROJECTS ---
    function renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        projectsGrid.innerHTML = ''; // Clear existing projects
        studentProjects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-header">
                    <h3 class="student-name">${project.name}</h3>
                    <p class="project-title">${project.title}</p>
                </div>
                <div class="qr-container">
                    <div class="qr-code" id="qr-code-${index}" title="Click to visit project"></div>
                </div>
                <div class="project-actions">
                    <a href="${project.url}" target="_blank" class="btn btn-primary">Visit Website</a>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
        generateAllQRCodes();
    }

    // --- QR CODE GENERATION ---
    function generateAllQRCodes() {
        const isDarkMode = themeManager.current === 'dark';
        const qrColor = isDarkMode ? '#3b82f6' : '#1d4ed8'; // Blue color matching theme

        studentProjects.forEach((project, index) => {
            const qrElement = document.getElementById(`qr-code-${index}`);
            if (qrElement) {
                qrElement.innerHTML = ''; // Clear previous QR code
                new QRCode(qrElement, {
                    text: project.url,
                    width: 128,
                    height: 128,
                    colorDark: qrColor,
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
                // Make QR code clickable
                 qrElement.addEventListener('click', () => window.open(project.url, '_blank'));
            }
        });
    }

    // Start the application
    initializeApp();
});