document.addEventListener('DOMContentLoaded', () => {

    // --- SITE-WIDE DATA ---

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

    const courses = [
        {
            id: "cs101",
            title: "Cyber Security Basic",
            price: 49.99,
            description: "Learn the fundamentals of protecting digital assets and infrastructure.",
            image: "https://source.unsplash.com/400x225/?cyber,security,code",
            bannerImage: "https://source.unsplash.com/800x450/?cyber,security",
            thumbImage: "https://source.unsplash.com/100x100/?cyber,security",
            url: "course-cyber-security.html"
        },
        {
            id: "sd101",
            title: "Shopify Development",
            price: 79.99,
            description: "Build and customize e-commerce stores using the powerful Shopify platform.",
            image: "https://source.unsplash.com/400x225/?ecommerce,shopify",
            bannerImage: "https://source.unsplash.com/800x450/?ecommerce,shopify",
            thumbImage: "https://source.unsplash.com/100x100/?ecommerce,shopify",
            url: "course-shopify-dev.html"
        },
        {
            id: "sc101",
            title: "Shopify Customization",
            price: 89.99,
            description: "Master Liquid, JSON, and advanced techniques to customize Shopify themes.",
            image: "https://source.unsplash.com/400x225/?web,design,store",
            bannerImage: "https://source.unsplash.com/800x450/?web,design,store",
            thumbImage: "https://source.unsplash.com/100x100/?web,design",
            url: "course-shopify-custom.html"
        },
        {
            id: "wd101",
            title: "Web Development",
            price: 99.99,
            description: "Master HTML, CSS, JavaScript and build modern, responsive websites.",
            image: "https://source.unsplash.com/400x225/?web,development,laptop",
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
                    const course = {
                        id: btn.dataset.id,
                        title: btn.dataset.title,
                        price: parseFloat(btn.dataset.price),
                        image: btn.dataset.image || 'https://source.unsplash.com/100x100'
                    };
                    this.add(course, btn);
                }
                if (e.target.closest('.btn-remove-cart-item')) {
                    const btn = e.target.closest('.btn-remove-cart-item');
                    this.remove(btn.dataset.id);
                }
            });
        },
        
        add(course, btn) {
            if (!this.cart.find(item => item.id === course.id)) {
                this.cart.push(course);
                this.save();
                this.updateCartBadge();
                
                // Visual feedback
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
            // Re-render cart if on cart page
            if (document.getElementById('cart-items-container')) {
                renderCartPage();
            }
            // Re-render checkout if on checkout page
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

        // Page-specific initializations
        if (document.getElementById('projectsGrid')) {
            renderProjects();
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

    // --- RENDER PROJECTS ---
    function renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;
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
        const qrColor = isDarkMode ? '#3b82f6' : '#1d4ed8'; // Blue color

        studentProjects.forEach((project, index) => {
            const qrElement = document.getElementById(`qr-code-${index}`);
            if (qrElement) {
                qrElement.innerHTML = ''; // Clear previous QR code
                // Check if QRCode library is loaded
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

    // --- RENDER ALL COURSES ---
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
                        <span class="course-card-price">$${course.price.toFixed(2)}</span>
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

    // --- RENDER CART PAGE ---
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
                        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    </div>
                    <button class="btn-remove-cart-item" data-id="${item.id}" aria-label="Remove item"><i class="fas fa-trash-alt"></i></button>
                `;
                container.appendChild(itemEl);
            });
        }

        const subtotal = cartManager.getTotal();
        const tax = subtotal * 0.10; // 10% tax
        const total = subtotal + tax;

        if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
        if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
        
        // Disable checkout button if cart is empty
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

    // --- RENDER CHECKOUT PAGE ---
    function renderCheckoutPage() {
        const container = document.getElementById('checkout-summary-items');
        const totalEl = document.getElementById('checkout-total');
        const btn = document.getElementById('whatsapp-checkout-btn');

        if (!container) return;

        const cart = cartManager.getCart();
        container.innerHTML = '';

        if (cart.length === 0) {
            container.innerHTML = ''; // Empty string triggers ::after pseudo-element
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
                    <span class="order-summary-item-price">$${item.price.toFixed(2)}</span>
                `;
                container.appendChild(itemEl);
            });
            if(btn) btn.disabled = false;
        }

        const subtotal = cartManager.getTotal();
        const tax = subtotal * 0.10; // 10% tax
        const total = subtotal + tax;

        if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
    }

    // --- WHATSAPP CHECKOUT ---
    function handleWhatsAppCheckout() {
        const btn = document.getElementById('whatsapp-checkout-btn');
        if (!btn) return;

        btn.addEventListener('click', () => {
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            if (!name || !email || !phone) {
                alert('Please fill in all contact information fields.');
                return;
            }

            const cart = cartManager.getCart();
            const total = (cartManager.getTotal() * 1.10).toFixed(2); // Total with tax
            
            if (cart.length === 0) {
                alert('Your cart is empty.');
                return;
            }

            // Construct WhatsApp message
            let message = `Hello, I'd like to purchase the following courses:\n\n`;
            cart.forEach(item => {
                message += `* ${item.title} - $${item.price.toFixed(2)}\n`;
            });
            message += `\n*Total (incl. tax): $${total}*\n\n`;
            message += `My Details:\n`;
            message += `Name: ${name}\n`;
            message += `Email: ${email}\n`;
            message += `Phone: ${phone}\n\n`;
            message += `Please provide payment instructions.`;

            // Replace with your actual WhatsApp number
            const whatsappNumber = "921234567890"; // IMPORTANT: Use your number
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            // Clear cart and redirect
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

                if (!tabId) return; // Ignore logout button or others

                // Update nav links
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');

                // Update tabs
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