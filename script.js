// Portfolio data with actual logos from the image
const portfolioItems = [
    {
        background: 'black',
        image: 'https://img.freepik.com/premium-vector/logo-with-white-lines-black-background_853558-1870.jpg'
    },
    {
        background: 'black',
        image: 'https://th.bing.com/th/id/OIP.KnBnyBGY2rl0KxsDzdawmAHaEK?rs=1&pid=ImgDetMain',
        title: 'Audio Tuner',
    
    },
    {
        background: 'black',
        image: 'https://marketplace.canva.com/EAFwG6v04rk/2/0/1600w/canva-black-and-white-modern-entertainment-logo-ji_bFPtoGNU.jpg'
    },
    {
        background: 'black',
        image: 'https://mapsystemsindia.com/images/resource/find-the-right-type-of-logo-wordmarks.jpg'
    },
    {
        background: 'black',
        image: 'https://static.vecteezy.com/system/resources/previews/036/154/403/original/vcc-letter-initial-logo-design-template-illustration-vector.jpg'
    },
    {
        background: 'black',
        image: 'https://images-platform.99static.com//NCVE28sKvf0pwqmf80hqqvvvt3g=/0x0:1004x1004/fit-in/500x500/99designs-contests-attachments/86/86690/attachment_86690794'
    },
    {
        background: 'black',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ce1708128152583.617446d005caf.jpg',
        
    },
];

// Populate portfolio grid
function populatePortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    portfolioItems.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        
        // Create placeholder for image loading
        const img = new Image();
        img.src = item.image;
        img.alt = 'Portfolio Image';
        
        portfolioItem.appendChild(img);
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for fade-in animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populatePortfolio();
    setupMobileMenu();
    setupSmoothScroll();
    setupIntersectionObserver();
}); 
