// Student projects data - with the requested links
const studentProjects = [
    {
        name: "Ibrahim",
        title: "Azan Web Application",
        url: "https://ibrahim-mentor.github.io/Azan/",
        description: "A beautiful Islamic prayer times application with Quran recitation features."
    },
    {
        name: "Moiz",
        title: "Personal Portfolio",
        url: "https://ibrahim-mentor.github.io/Moiz/",
        description: "Modern personal portfolio showcasing web development skills and projects."
    },
    {
        name: "Umar",
        title: "Creative Portfolio",
        url: "https://ibrahim-mentor.github.io/Umar/",
        description: "Innovative portfolio design with interactive elements and smooth animations."
    },
    {
        name: "Ali Khan",
        title: "History Project - Ancient Civilizations",
        url: "https://alikhan-history-project.netlify.app",
        description: "An interactive timeline of ancient civilizations with multimedia content."
    },
    {
        name: "Sarah Ahmed",
        title: "Science Fair - Renewable Energy",
        url: "https://sarah-ahmed-science.netlify.app",
        description: "Exploring solar and wind energy solutions for urban environments."
    },
    {
        name: "Mohammad Hassan",
        title: "Mathematics Portfolio",
        url: "https://mhassan-math-portfolio.netlify.app",
        description: "Advanced mathematical concepts and problem-solving techniques."
    }
];

// Theme management
const theme = {
    current: localStorage.getItem('theme') || 'light',
    
    init() {
        this.applyTheme(this.current);
        this.setupToggle();
    },
    
    applyTheme(themeName) {
        document.documentElement.setAttribute('data-theme', themeName);
        this.current = themeName;
        localStorage.setItem('theme', themeName);
        this.updateToggleButton(themeName);
    },
    
    setupToggle() {
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const newTheme = this.current === 'light' ? 'dark' : 'light';
                this.applyTheme(newTheme);
            });
        }
    },
    
    updateToggleButton(themeName) {
        const toggleBtn = document.getElementById('themeToggle');
        const icon = toggleBtn?.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = themeName === 'light' ? '🌙' : '☀️';
        }
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    theme.init();
    initializeApp();
});

function initializeApp() {
    // Check if we're on the homepage (projects page)
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        renderProjects();
        generateQRcodes();
    }

    // Check if we're on the contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        initializeContactForm();
    }
}

// Render student projects dynamically
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    studentProjects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
}

// Create individual project card
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-header">
            <h3 class="student-name">${project.name}</h3>
            <p class="project-title">${project.title}</p>
            <p class="project-description">${project.description}</p>
        </div>
        <div class="qr-container">
            <div class="qr-code" id="qr-code-${index}"></div>
        </div>
        <div class="project-actions">
            <a href="${project.url}" target="_blank" class="btn btn-primary">Visit Website</a>
            <button class="btn btn-secondary" onclick="shareProject('${project.url}', '${project.name} - ${project.title}')">
                Share
            </button>
        </div>
    `;
    
    return card;
}

// Generate QR codes for all projects
function generateQRcodes() {
    studentProjects.forEach((project, index) => {
        const qrElement = document.getElementById(`qr-code-${index}`);
        if (qrElement) {
            // Clear any existing content
            qrElement.innerHTML = '';
            
            // Generate QR code
            QRCode.toCanvas(qrElement, project.url, {
                width: 128,
                height: 128,
                margin: 1,
                color: {
                    dark: theme.current === 'dark' ? '#3b82f6' : '#2563eb',
                    light: '#ffffff'
                }
            }, function(error) {
                if (error) {
                    console.error('QR Code generation error:', error);
                    qrElement.innerHTML = '<p>QR Code Error</p>';
                }
            });

            // Make QR code clickable
            qrElement.style.cursor = 'pointer';
            qrElement.title = `Click to visit ${project.name}'s project`;
            qrElement.addEventListener('click', function() {
                window.open(project.url, '_blank');
            });
        }
    });
}

// Share project functionality
function shareProject(url, title) {
    if (navigator.share) {
        // Use Web Share API if available
        navigator.share({
            title: title,
            text: 'Check out this student project from Aqsa Model High School',
            url: url
        })
        .catch(error => console.log('Error sharing:', error));
    } else {
        // Fallback: copy to clipboard
        copyToClipboard(url);
        showNotification('Project URL copied to clipboard!');
    }
}

// Copy to clipboard utility
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Show notification
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            showNotification('Please fill in all fields.');
            return;
        }

        // Simulate form submission
        submitContactForm(formData);
    });
}

// Simulate contact form submission
function submitContactForm(formData) {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    form.classList.add('loading');

    // Simulate API call
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        showNotification('Thank you for your message! We will get back to you soon.');
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        form.classList.remove('loading');
    }, 2000);
}

// Utility function to add new projects
function addNewProject(name, title, url, description = '') {
    studentProjects.push({
        name,
        title,
        url,
        description
    });
    
    // Re-render projects if on homepage
    if (document.getElementById('projectsGrid')) {
        renderProjects();
        generateQRcodes();
    }
}

// Listen for theme changes to update QR codes
document.addEventListener('themeChanged', function() {
    if (document.getElementById('projectsGrid')) {
        generateQRcodes();
    }
});

// Update theme management to dispatch event
const originalApplyTheme = theme.applyTheme;
theme.applyTheme = function(themeName) {
    originalApplyTheme.call(this, themeName);
    document.dispatchEvent(new CustomEvent('themeChanged'));
};