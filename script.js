document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Save preference to localStorage
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });
    
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
   





// Certifications data
const certificationsData = [
    { name: "Introduction to Generative AI for Software Development", issuer: "DeepLearning.ai", link: "https://www.coursera.org/account/accomplishments/certificate/EK8CFU1KGKHP" },
    { name: "Learning Data Science: Understanding the Basics", issuer: "Linkedin", link: "https://www.linkedin.com/learning/certificates/2e0a0efb2775eef11b71e3a5159d91d2de1d753f06021b226380d57362d994b6?trk=share_certificate" },
    { name: "Machine Learning with Python: Foundations", issuer: "Linkedin", link: "https://www.linkedin.com/learning/certificates/bc7044a856f46c44ee7a09199bc421c2b328895c973d01d39a72cfba1e2751f2?trk=share_certificate" },
    { name: "Introduction to Artificial Intelligence", issuer: "Linkedin", link: "https://www.linkedin.com/learning/certificates/228051886d076ef55750b92ff1e51ca0b6240b5e638e758f17baf1b7bd492db4?trk=share_certificate" },
    { name: "EMINENCE 4.0", issuer: "IEEE Student Branch University of Ruhuna", link: "https://drive.google.com/file/d/13fWMxihoaJYwbKH4GRP6wOOKmmvlFRgu/view" }
    //{ name: "Intro to LLMs", issuer: "365 Data Science", link: "#" },
   // { name: "Intro to NLP for AI", issuer: "365 Data Science", link: "#" },
    //{ name: "Career Essentials in Data Analysis", issuer: "Microsoft and LinkedIn", link: "#" },
    //{ name: "Career Essentials in Generative AI", issuer: "Microsoft and LinkedIn", link: "#" }
];

// Populate certifications section
const certsContainer = document.querySelector('.certifications-list');

if (certsContainer) {
    certificationsData.forEach(cert => {
        const certItem = document.createElement('div');
        certItem.className = 'cert-item';
        certItem.innerHTML = `
            <a href="${cert.link}" target="_blank" class="cert-link">
                <strong>${cert.name}</strong> – ${cert.issuer}
            </a>
        `;
        certsContainer.appendChild(certItem);
    });
}

















    
    // Projects data - replace with your actual projects
    const projectsData = [
        {
            title: 'Customer-Personality-Analysis',
            description: 'A Streamlit-powered tool that clusters customers using KMeans/DBSCAN. From notebook to live demo in minutes.Predict customer segments using ML clustering',
            tags: ['Streamlit', 'KMeans Clustering', 'DBSCAN'],
            image: 'images/Customer.png',
            //demo: '',
            code: 'https://github.com/NethangiDissanayake/Customer-Personality-Analysis-App'
        },
        {
            title: 'Travel-Recommendation-System',
            description: 'AI-Powered Travel Destination Recommender: A Streamlit app that suggests similar tourist destinations based on places users already like.',
            tags: ['Streamlit', 'NLP', 'Expert Systems'],
            image: 'images/travel_re.png',
            //demo: '#',
            code: 'https://github.com/NethangiDissanayake/Travel-Recommendation-System'
        },
        {
            title: 'Portfolio Website',
            description: 'A sleek personal portfolio showcasing projects, skills, and passion for turning ideas into impactful digital solutions.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: 'images/PORT.PNG',
            demo: '#',
            code: 'https://github.com/NethangiDissanayake/Portfolio-Website'
        },
        {
            title: 'Dashboard Design',
            description: 'A comprehensive sales analytics dashboard providing insights into revenue, profitability, and customer behavior patterns..',
            tags: ['PowerBI', 'DAX'],
            image: 'images/dash.png',
            demo: '#',
            code: 'https://github.com/NethangiDissanayake/My-SuperStore-Dashboard'
        },
        
    ];
    
    // Populate projects section
    const projectsContainer = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (projectsContainer) {
        // Function to filter projects
        function filterProjects(category) {
            projectsContainer.innerHTML = '';
            
            const filteredProjects = category === 'all' 
                ? projectsData 
                : projectsData.filter(project => project.tags.includes(category));
            
            filteredProjects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.setAttribute('data-category', project.tags[0].toLowerCase());
                
                projectCard.innerHTML = `
                    <div class="project-img">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                            <a href="${project.code}" target="_blank"><i class="fab fa-github"></i> View Code</a>
                        </div>
                    </div>
                `;
                
                projectsContainer.appendChild(projectCard);
            });
        }
        
        // Initial load
        filterProjects('all');
        
        // Filter button event listeners
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter projects
                const filter = this.getAttribute('data-filter');
                filterProjects(filter);
            });
        });
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-item, .project-card, .about-content, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.skill-item, .project-card, .about-content, .contact-content').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});












// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code ...
    
    // Animation on scroll function
    function animateOnScroll() {
        const elements = document.querySelectorAll('.hero-content, .hero-image, .about-image, .about-text');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementPosition < windowHeight - elementVisible) {
                element.style.opacity = '1';
            }
        });
    }
    
    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // ... rest of your existing JavaScript ...
});





















