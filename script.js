document.addEventListener('DOMContentLoaded', () => {

    // --- SITE-WIDE DATA ---

    const studentProjects = [
        // --- 8th Grade (Original) ---
        {
            name: "Azan",
            title: "World of Shine - Professional Cleaning Services",
            url: "https://ibrahim-mentor.github.io/azan/",
            projectClass: "8th Grade",
            qualifications: "Web Development",
            quality: "Creative & Dedicated",
            whatsapp: "923176428132",
            image: "https://source.unsplash.com/150x150/?person,boy"
        },
        {
            name: "Umar",
            title: "Rayelle - Premium Eyewear",
            url: "https://ibrahim-mentor.github.io/umar-store/",
            projectClass: "8th Grade",
            qualifications: "Full Stack with Technical Skills",
            quality: "Detail-Oriented",
            whatsapp: "923356461817", 
            image: "https://source.unsplash.com/150x150/?person,man"
        },
        {
            name: "Moiz",
            title: "MN Store - Modern Homepage",
            url: "https://ibrahim-mentor.github.io/moiz/",
            projectClass: "8th Grade",
            qualifications: "Full-Stack Student",
            quality: "Problem Solver",
            whatsapp: "923160072910", 
            image: "https://source.unsplash.com/150x150/?person,teen"
        },
        {
            name: "Umar",
            title: "Nokia Car Game",
            url: "https://ibrahim-mentor.github.io/nokia-car-game/",
            projectClass: "8th Grade",
            qualifications: "Full Stack with Technical Skills",
            quality: "Detail-Oriented",
            whatsapp: "923356461817", 
            image: "https://source.unsplash.com/150x150/?person,man"
        },

        // --- Pre-9th Grade (New) ---
        {
            name: "Abdul Moiz",
            title: "Student Welcome Page",
            url: "class pre th/abdulmoiz.html.html",
            projectClass: "Pre-9th Grade",
            qualifications: "HTML Basics",
            quality: "Creative",
            whatsapp: "923236528812",
            image: "httpsli://source.unsplash.com/150x150/?person,student,1"
        },
        {
            name: "Anas",
            title: "Student Lab Page",
            url: "class pre th/anas.html",
            projectClass: "Pre-9th Grade",
            qualifications: "HTML & CSS",
            quality: "Enthusiastic",
            whatsapp: "923236528812",
            image: "class pre th/a1.jpg"
        },
        {
            name: "Hamza",
            title: "Student Personal Page",
            url: "class pre th/HAMZA.html",
            projectClass: "Pre-9th Grade",
            qualifications: "HTML & Inline CSS",
            quality: "Colorful",
            whatsapp: "923236528812",
            image: "class pre th/h2.jpg"
        },
        {
            name: "Mohsin (Pre-9th)",
            title: "Student Test Page",
            url: "class pre th/mohsin.html",
            projectClass: "Pre-9th Grade",
            qualifications: "HTML & Lists",
            quality: "Learning",
            whatsapp: "923236528812",
            image: "class pre th/12.jpg"
        },
        {
            name: "Shaheer",
            title: "First HTML Project",
            url: "class pre th/shaeer.html.html",
            projectClass: "Pre-9th Grade",
            qualifications: "HTML Tags",
            quality: "Beginner",
            whatsapp: "923236528812",
            image: "class pre th/s1.jpg"
        },
        {
            name: "Zain",
            title: "Student Test Code",
            url: "class pre th/zain.html.html",
            projectClass: "Pre-9th Grade",
            qualifications: "HTML Basics",
            quality: "Curious",
            whatsapp: "923236528812",
            image: "https://source.unsplash.com/150x150/?person,student,2"
        },
        {
            name: "Zishan",
            title: "Student Welcome Page",
            url: "class pre th/zishan.html",
            projectClass: "Pre-9th Grade",
            qualifications: "HTML & Basic CSS",
            quality: "Structured",
            whatsapp: "923236528812",
            image: "https://source.unsplash.com/150x150/?person,student,3"
        },

        // --- 6th Grade (New) ---
        {
            name: "Abdullah",
            title: "Basic HTML Page",
            url: "class 6th/abdullah.html",
            projectClass: "6th Grade",
            qualifications: "HTML Tags",
            quality: "Beginner",
            whatsapp: "923236528812",
            image: "https://source.unsplash.com/150x150/?person,child,1"
        },
        {
            name: "Abdul Qadoos",
            title: "HTML Details Page",
            url: "class 6th/abdulqadoos.html.html",
            projectClass: "6th Grade",
            qualifications: "HTML Lists",
            quality: "Learning",
            whatsapp: "923236528812",
            image: "https://source.unsplash.com/150x150/?person,child,2"
        },
        {
            name: "Ahmed",
            title: "HTML Details & Font",
            url: "class 6th/ahmed.html.html",
            projectClass: "6th Grade",
            qualifications: "HTML Formatting",
            quality: "Beginner",
            whatsapp: "923236528812",
            image: "https://source.unsplash.com/150x150/?person,child,3"
        },
        {
            name: "Asad",
            title: "First Web Page",
            url: "class 6th/asad.html.HTML",
            projectClass: "6th Grade",
            qualifications: "HTML Formatting",
            quality: "Learning",
            whatsapp: "923236528812",
            image: "https://source.unsplash.com/150x150/?person,child,4"
        },
        {
            name: "Fahad",
            title: "Styled HTML Page",
            url: "class 6th/fahad .html",
            projectClass: "6th Grade",
            qualifications: "HTML & Inline CSS",
            quality: "Expressive",
            whatsapp: "923236528812",
            image: "https://source.unsplash.com/150x150/?person,child,5"
        },
        {
            name: "Mohsin (6th)",
            title: "Basic Tags Page",
            url: "class 6th/mohsin.html.html",
            projectClass: "6th Grade",
            qualifications: "HTML Basics",
            quality: "Beginner",
            whatsapp: "923236528812",
            image: "https://source.unsplash.com/150x150/?person,child,6"
        },
        {
            name: "Muneeb",
            title: "HTML Text Page",
            url: "class 6th/muneeb.html",
            projectClass: "6th Grade",
            qualifications: "HTML Formatting",
            quality: "Learning",
            whatsapp: "923236528812",
            image: "https://source.unsplash.com/150x150/?person,child,7"
        },
        {
            name: "Mustafa",
            title: "HTML Text Basics",
            url: "class 6th/mustafa.html",
            projectClass: "6th Grade",
            qualifications: "HTML Basics",
            quality: "Beginner",
            whatsapp: "923236528812",
            image: "httpss://source.unsplash.com/150x150/?person,child,8"
        },
        {
            name: "Taha",
            title: "HTML Test Page",
            url: "class 6th/taha.html",
            projectClass: "6th Grade",
            qualifications: "HTML Formatting",
            quality: "Learning",
            whatsapp: "923236528812",
            image: "https://source.unsplash.com/150x150/?person,child,9"
        },
        {
            name: "Zeeshan (6th)",
            title: "HTML Details Page",
            url: "class 6th/zeeshan.html.html",
            projectClass: "6th Grade",
            qualifications: "HTML Details Tag",
            quality: "Beginner",
            whatsapp: "923236528812",
            image: "https://source.unsplash.com/150x150/?person,child,10"
        }
    ];

    const courses = [
        {
            id: "cs101",
            title: "Cyber Security Basic",
            price: 4500.0,
            description: "Learn the fundamentals of protecting digital assets and infrastructure.",
            image: "img/course/cyber.png",
            bannerImage: "https://source.unsplash.com/800x450/?cyber,security",
            thumbImage: "https://source.unsplash.com/100x100/?cyber,security",
            url: "course-cyber-security.html"
        },
        {
            id: "sd101",
            title: "Shopify Development",
            price: 5000.0,
            description: "Build and customize e-commerce stores using the powerful Shopify platform.",
            image: "img/course/shopify-dev.png",
            bannerImage: "https://source.unsplash.com/800x450/?ecommerce,shopify",
            thumbImage: "https://source.unsplash.com/100x100/?ecommerce,shopify",
            url: "course-shopify-dev.html"
        },
        {
            id: "sc101",
            title: "Shopify Customization",
            price: 3500.0,
            description: "Master Liquid, JSON, and advanced techniques to customize Shopify themes.",
            image: "img/course/shopify-cus.png",
            bannerImage: "https://source.unsplash.com/800x450/?web,design,store",
            thumbImage: "https://source.unsplash.com/100x100/?web,design",
            url: "course-shopify-custom.html"
        },
        {
            id: "wd101",
            title: "Web Development",
            price: 3000.0,
            description: "Master HTML, CSS, JavaScript and build modern, responsive websites.",
            image: "img/course/web.png",
            bannerImage: "https://source.unsplash.com/800x450/?web,development,laptop",
            thumbImage: "https://source.unsplash.com/100x100/?web,development",
            url: "course-web-dev.html"
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
            document.dispatchEvent(new Event('themeChanged'));
        },
        updateToggleButton() {
            const icon = document.querySelector('#themeToggle .theme-icon');
            if (icon) {
                icon.textContent = this.current === 'light' ? '🌙' : '☀️';
            }
        }
    };
    
    // --- CART MANAGEMENT ---
    const cartManager = {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        
        init() {
            this.updateCartBadge();
            document.addEventListener('click', (e) => {
                if (e.target.closest('.add-to-cart-btn')) {
                    const btn = e.target.closest('.add-to-cart-btn');
                    if (btn.dataset.id && btn.dataset.title && btn.dataset.price) {
                        const course = {
                            id: btn.dataset.id,
                            title: btn.dataset.title,
                            price: parseFloat(btn.dataset.price),
                            image: btn.dataset.image || 'https://source.unsplash.com/100x100'
                        };
                        this.add(course, btn);
                    } else {
                        console.error("Cart button is missing data attributes", btn);
                    }
                }
                if (e.target.closest('.btn-remove-cart-item')) {
                    const btn = e.target.closest('.btn-remove-cart-item');
                    this.remove(btn.dataset.id);
                }
                if (e.target.closest('.btn-flip')) {
                    const cardFlipper = e.target.closest('.project-card-flipper');
                    if (cardFlipper) cardFlipper.classList.add('is-flipped');
                }
                if (e.target.closest('.btn-unflip')) {
                    const cardFlipper = e.target.closest('.project-card-flipper');
                    if (cardFlipper) cardFlipper.classList.remove('is-flipped');
                }
            });
        },
        
        add(course, btn) {
            if (!this.cart.find(item => item.id === course.id)) {
                this.cart.push(course);
                this.save();
                this.updateCartBadge();
                
                btn.textContent = 'Added to Cart!';
                btn.disabled = true;
                setTimeout(() => {
                    btn.textContent = 'Add to Cart';
                    btn.disabled = false;
                }, 2000);
            }
        },
        
        remove(courseId) {
            this.cart = this.cart.filter(item => item.id !== courseId);
            this.save();
            this.updateCartBadge();
            if (document.getElementById('cart-items-container')) {
                renderCartPage();
            }
            if (document.getElementById('checkout-summary-items')) {
                renderCheckoutPage();
            }
        },
        
        save() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },

        clear() {
            this.cart = [];
            this.save();
            this.updateCartBadge();
        },
        
        updateCartBadge() {
            const count = this.cart.length;
            const badge = document.getElementById('cart-item-count');
            if (badge) {
                badge.textContent = count;
                badge.style.display = count > 0 ? 'flex' : 'none';
            }
        },

        getCart() {
            return this.cart;
        },

        getTotal() {
            return this.cart.reduce((total, item) => total + item.price, 0);
        }
    };

    // --- APP INITIALIZATION ---
    function initializeApp() {
        themeManager.init();
        cartManager.init();

        // Check if we are on the projects page by looking for one of the new grid IDs
        if (document.getElementById('projectsGrid8th')) {
            renderProjects();
            document.addEventListener('themeChanged', () => generateAllQRCodes());
        }
        // Check if we are on the *index* page
        if (document.getElementById('projectsGrid')) {
             // This is the homepage grid, render a limited view
             renderHomepageProjects();
             document.addEventListener('themeChanged', () => generateAllQRCodes());
        }
        if (document.getElementById('contactForm')) {
            handleContactForm();
        }
        if (document.getElementById('all-courses-grid')) {
            renderAllCourses();
        }
        if (document.getElementById('cart-items-container')) {
            renderCartPage();
        }
        if (document.getElementById('checkout-summary-items')) {
            renderCheckoutPage();
        }
        if (document.getElementById('whatsapp-checkout-btn')) {
            handleWhatsAppCheckout();
        }
        if (document.querySelector('.profile-layout')) {
            handleProfileTabs();
        }
    }

    // --- RENDER PROJECTS (FLIP CARD with QR) ---
    // This function now renders for the main projects.html page
    function renderProjects() {
        const grids = {
            '8th Grade': document.getElementById('projectsGrid8th'),
            'Pre-9th Grade': document.getElementById('projectsGridPre9th'),
            '6th Grade': document.getElementById('projectsGrid6th')
        };

        // Clear all grids
        Object.values(grids).forEach(grid => { if (grid) grid.innerHTML = ''; });

        studentProjects.forEach((project, index) => {
            const targetGrid = grids[project.projectClass];
            if (!targetGrid) {
                // This will skip projects with a class that doesn't have a grid
                return; 
            }
            
            const cardFlipper = document.createElement('div');
            cardFlipper.className = 'project-card-flipper';
            
            cardFlipper.innerHTML = `
                <div class="project-card-inner">
                    <div class="project-card-front">
                        <div class="card-content-top">
                            <h3 class="student-name">${project.name}</h3>
                            <p class="project-title">${project.title}</p>
                            
                            <div class="qr-container">
                                <div class="qr-code" id="qr-code-${index}" title="Click to visit project"></div>
                            </div>
                        </div>
                        
                        <div class="project-actions">
                            <a href="${project.url}" target="_blank" class="btn btn-primary">
                                View Website
                            </a>
                            <button class="btn btn-secondary btn-flip">
                                View Details
                            </button>
                        </div>
                    </div>
                    
                    <div class="project-card-back">
                        <img src="${project.image}" alt="${project.name}" class="student-image">
                        <h4>${project.name}'s Details</h4>
                        <ul class="student-info-list">
                            <li><i class="fas fa-graduation-cap"></i><strong>Class:</strong> <span>${project.projectClass}</span></li>
                            <li><i class="fas fa-certificate"></i><strong>Skills:</strong> <span>${project.qualifications}</span></li>
                            <li><i class="fas fa-star"></i><strong>Quality:</strong> <span>${project.quality}</span></li>
                            <li>
                                <i class="fab fa-whatsapp"></i>
                                <strong>Contact:</strong>
                                <a href="https://wa.me/${project.whatsapp}" target="_blank">WhatsApp</a>
                            </li>
                        </ul>
                        <button class="btn btn-secondary btn-block btn-unflip">
                            Go Back
                        </button>
                    </div>
                </div>
            `;
            
            targetGrid.appendChild(cardFlipper);
        });
        
        generateAllQRCodes();
    }
    
    // This function renders a few projects for the homepage
    function renderHomepageProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = '';
        
        // Show only the first 4 projects (or a mix) for the homepage
        const featuredProjects = studentProjects.slice(0, 4);

        featuredProjects.forEach((project, index) => {
            const cardFlipper = document.createElement('div');
            cardFlipper.className = 'project-card-flipper';
            
            cardFlipper.innerHTML = `
                <div class="project-card-inner">
                    <div class="project-card-front">
                        <div class="card-content-top">
                            <h3 class="student-name">${project.name}</h3>
                            <p class="project-title">${project.title}</p>
                            <div class="qr-container">
                                <div class="qr-code" id="qr-code-home-${index}" title="Click to visit project"></div>
                            </div>
                        </div>
                        <div class="project-actions">
                            <a href="${project.url}" target="_blank" class="btn btn-primary">
                                View Website
                            </a>
                            <button class="btn btn-secondary btn-flip">
                                View Details
                            </button>
                        </div>
                    </div>
                    <div class="project-card-back">
                        <img src="${project.image}" alt="${project.name}" class="student-image">
                        <h4>${project.name}'s Details</h4>
                        <ul class="student-info-list">
                            <li><i class="fas fa-graduation-cap"></i><strong>Class:</strong> <span>${project.projectClass}</span></li>
                            <li><i class="fas fa-certificate"></i><strong>Skills:</strong> <span>${project.qualifications}</span></li>
                            <li><i class="fas fa-star"></i><strong>Quality:</strong> <span>${project.quality}</span></li>
                            <li>
                                <i class="fab fa-whatsapp"></i>
                                <strong>Contact:</strong>
                                <a href="https://wa.me/${project.whatsapp}" target="_blank">WhatsApp</a>
                            </li>
                        </ul>
                        <button class="btn btn-secondary btn-block btn-unflip">
                            Go Back
                        </button>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(cardFlipper);
        });
        
        // Must call the QR code generator after rendering
        generateHomepageQRCodes(featuredProjects);
    }


    // --- QR CODE GENERATION (MODIFIED) ---
    function generateAllQRCodes() {
        const isDarkMode = themeManager.current === 'dark';
        const qrColor = isDarkMode ? '#3b82f6' : '#1d4ed8';

        studentProjects.forEach((project, index) => {
            const qrElement = document.getElementById(`qr-code-${index}`);
            if (qrElement) {
                qrElement.innerHTML = '';
                if (typeof QRCode === 'undefined') {
                    console.error('QRCode.js is not loaded. Make sure to include the script.');
                    return;
                }
                new QRCode(qrElement, {
                    text: project.url,
                    width: 128,
                    height: 128,
                    colorDark: qrColor,
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
                qrElement.addEventListener('click', () => window.open(project.url, '_blank'));
            }
        });
    }

    // QR Code generator for homepage
    function generateHomepageQRCodes(featuredProjects) {
        const isDarkMode = themeManager.current === 'dark';
        const qrColor = isDarkMode ? '#3b82f6' : '#1d4ed8';

        featuredProjects.forEach((project, index) => {
            const qrElement = document.getElementById(`qr-code-home-${index}`);
            if (qrElement) {
                qrElement.innerHTML = '';
                if (typeof QRCode === 'undefined') {
                    console.error('QRCode.js is not loaded.');
                    return;
                }
                new QRCode(qrElement, {
                    text: project.url,
                    width: 128,
                    height: 128,
                    colorDark: qrColor,
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
                qrElement.addEventListener('click', () => window.open(project.url, '_blank'));
            }
        });
    }

    // --- RENDER ALL COURSES (with PKR) ---
    function renderAllCourses() {
        const grid = document.getElementById('all-courses-grid');
        if (!grid) return;
        grid.innerHTML = '';
        courses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.innerHTML = `
                <div class="course-card-image">
                    <a href="${course.url}"><img src="${course.image}" alt="${course.title}"></a>
                </div>
                <div class="course-card-content">
                    <h4 class="course-card-title">${course.title}</h4>
                    <p class="course-card-description">${course.description}</p>
                    <div class="course-card-footer">
                        <span class="course-card-price">PKR ${course.price.toFixed(2)}</span>
                        <a href="${course.url}" class="btn btn-secondary btn-sm">Learn More</a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // --- CONTACT FORM ---
    function handleContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! This is a demo form.');
                contactForm.reset();
            });
        }
    }

    // --- RENDER CART PAGE (with PKR) ---
    function renderCartPage() {
        const container = document.getElementById('cart-items-container');
        const subtotalEl = document.getElementById('cart-subtotal');
        const taxEl = document.getElementById('cart-tax');
        const totalEl = document.getElementById('cart-total');

        if (!container) return;

        const cart = cartManager.getCart();
        container.innerHTML = '';

        if (cart.length === 0) {
            container.innerHTML = '<p class="cart-empty-message">Your cart is empty. <a href="courses.html">Browse courses</a>.</p>';
        } else {
            cart.forEach(item => {
                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item';
                itemEl.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.title}</h4>
                        <p class="cart-item-price">PKR ${item.price.toFixed(2)}</p>
                    </div>
                    <button class="btn-remove-cart-item" data-id="${item.id}" aria-label="Remove item"><i class="fas fa-trash-alt"></i></button>
                `;
                container.appendChild(itemEl);
            });
        }

        const subtotal = cartManager.getTotal();
        const tax = subtotal * 0.10;
        const total = subtotal + tax;

        if (subtotalEl) subtotalEl.textContent = `PKR ${subtotal.toFixed(2)}`;
        if (taxEl) taxEl.textContent = `PKR ${tax.toFixed(2)}`;
        if (totalEl) totalEl.textContent = `PKR ${total.toFixed(2)}`;
        
        const checkoutBtn = document.querySelector('.cart-summary .btn-primary');
        if(checkoutBtn) {
            checkoutBtn.disabled = cart.length === 0;
            if (cart.length === 0) {
                checkoutBtn.style.opacity = '0.6';
                checkoutBtn.style.cursor = 'not-allowed';
            } else {
                checkoutBtn.style.opacity = '1';
                checkoutBtn.style.cursor = 'pointer';
            }
        }
    }

    // --- RENDER CHECKOUT PAGE (with PKR) ---
    function renderCheckoutPage() {
        const container = document.getElementById('checkout-summary-items');
        const totalEl = document.getElementById('checkout-total');
        const btn = document.getElementById('whatsapp-checkout-btn');

        if (!container) return;

        const cart = cartManager.getCart();
        container.innerHTML = '';

        if (cart.length === 0) {
            container.innerHTML = ''; 
            if(btn) btn.disabled = true;
        } else {
            cart.forEach(item => {
                const itemEl = document.createElement('div');
                itemEl.className = 'order-summary-item';
                itemEl.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="order-summary-item-details">
                        <span class="order-summary-item-title">${item.title}</span>
                    </div>
                    <span class="order-summary-item-price">PKR ${item.price.toFixed(2)}</span>
                `;
                container.appendChild(itemEl);
            });
            if(btn) btn.disabled = false;
        }

        const subtotal = cartManager.getTotal();
        const tax = subtotal * 0.10;
        const total = subtotal + tax;

        if (totalEl) totalEl.textContent = `PKR ${total.toFixed(2)}`;
    }

    // --- WHATSAPP CHECKOUT (with PKR) ---
    function handleWhatsAppCheckout() {
        const btn = document.getElementById('whatsapp-checkout-btn');
        if (!btn) return;

        btn.addEventListener('click', () => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            if (!name || !email || !phone) {
                alert('Please fill in all contact information fields.');
                return;
            }

            const cart = cartManager.getCart();
            const total = (cartManager.getTotal() * 1.10).toFixed(2);
            
            if (cart.length === 0) {
                alert('Your cart is empty.');
                return;
            }

            let message = `Hello, I'd like to purchase the following courses:\n\n`;
            cart.forEach(item => {
                message += `* ${item.title} - PKR ${item.price.toFixed(2)}\n`;
            });
            message += `\n*Total (incl. tax): PKR ${total}*\n\n`;
            message += `My Details:\n`;
            message += `Name: ${name}\n`;
            message += `Email: ${email}\n`;
            message += `Phone: ${phone}\n\n`;
            message += `Please provide payment instructions.`;

            const whatsappNumber = "921234567890";
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            cartManager.clear();
            window.open(whatsappURL, '_blank');
 
            alert('Redirecting to WhatsApp to complete your order. Your cart has been cleared.');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }

    // --- PROFILE PAGE TABS ---
    function handleProfileTabs() {
        const navLinks = document.querySelectorAll('.profile-nav-link');
        const tabs = document.querySelectorAll('.profile-tab-content');

        if (!navLinks.length) return;

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const tabId = link.dataset.tab;

                if (!tabId) return; 

                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');

                tabs.forEach(tab => {
                    if (tab.id === tabId) {
                        tab.classList.add('active');
                    } else {
                        tab.classList.remove('active');
                    }
                });
            });
        });
    }

    // Start the application
    initializeApp();
});