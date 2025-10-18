// Student projects data - easily editable array
const studentProjects = [
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
    },
    {
        name: "Fatima Noor",
        title: "Literature Analysis - Modern Poetry",
        url: "https://fatima-noor-literature.netlify.app",
        description: "Critical analysis of contemporary poetic works and their cultural impact."
    },
    {
        name: "Omar Farooq",
        title: "Computer Science - Web Development",
        url: "https://omar-farooq-cs.netlify.app",
        description: "Building responsive web applications with modern frameworks."
    },
    {
        name: "Aisha Rahman",
        title: "Art Portfolio - Digital Illustration",
        url: "https://aisha-rahman-art.netlify.app",
        description: "Collection of digital artworks exploring themes of identity and culture."
    }
];

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
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
                    dark: '#2563eb',
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
        alert('Project URL copied to clipboard!');
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
            alert('Please fill in all fields.');
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
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    form.classList.add('loading');

    // Simulate API call
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        showSuccessMessage('Thank you for your message! We will get back to you soon.');
        
        // Reset button
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
        form.classList.remove('loading');
    }, 2000);
}

// Show success message
function showSuccessMessage(message) {
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = message;

    const contactForm = document.getElementById('contactForm');
    contactForm.parentNode.insertBefore(successMessage, contactForm);

    // Remove message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
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

// Example: How to add a new project
// addNewProject(
//     'New Student',
//     'Project Title',
//     'https://example.com',
//     'Project description'
// );