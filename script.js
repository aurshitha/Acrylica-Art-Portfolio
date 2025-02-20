/* About page JS */
// Gallery Items
/*const galleryItems = [
    {
        image: 'artwork1.jpg',
        title: 'Nature\'s Beauty',
        description: 'Inspired by natural landscapes'
    },
    // Add more gallery items as needed
];
*/
// Testimonials
/*const testimonials = [
    {
        text: "Amazing artwork that captures the essence of nature!",
        author: "Jane Doe",
        role: "Art Collector"
    },
    // Add more testimonials as needed
];
*/

// Populate Gallery
function populateGallery() {
    const gallery = document.querySelector('.gallery-grid');
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        gallery.appendChild(galleryItem);
    });
}

// Testimonial Slider
let currentTestimonial = 0;
function showTestimonial() {
    const slider = document.querySelector('.testimonial-slider');
    const testimonial = testimonials[currentTestimonial];
    slider.innerHTML = `
        <div class="testimonial">
            <p>${testimonial.text}</p>
            <cite>${testimonial.author} - ${testimonial.role}</cite>
        </div>
    `;
}

// Change testimonial every 5 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial();
}, 4000);

// Form Submission
document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    // Add your email subscription logic here
    console.log('Subscribed:', email);
    this.reset();
    alert('Thank you for subscribing!');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateGallery();
    showTestimonial();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

/* scroll effect for gallery-grid */
/*document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-grid');
    
    // Clone gallery items for infinite scroll effect
    const items = gallery.children;
    for (let i = 0; i < items.length; i++) {
        const clone = items[i].cloneNode(true);
        gallery.appendChild(clone);
    }

    // Reset scroll position when reaching end
    gallery.addEventListener('scroll', function() {
        if (gallery.scrollLeft >= (gallery.scrollWidth - gallery.clientWidth)) {
            gallery.scrollLeft = 0;
        }
    });
});
*/

/* */
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonial-slider');
    const slides = document.querySelectorAll('.testimonial-slide');
    
    // Clone slides for seamless infinite scroll
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
    });

    // Reset animation when it completes
    slider.addEventListener('animationend', () => {
        slider.style.animation = 'none';
        slider.offsetHeight; // Trigger reflow
        slider.style.animation = null;
    });
});