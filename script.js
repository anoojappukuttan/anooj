document.addEventListener("DOMContentLoaded", () => {
    // Fade-in animation on scroll
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Simple Mobile Menu Toggle Alert (can be expanded later)
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        alert("Mobile menu clicked! You can link a dropdown menu here.");
    });
});
// Add your actual image file paths here
const portfolioImages = {
    'automotive': [
        'images/auto1.jpg', // Replace with your image paths
        'images/auto2.jpg',
        'images/auto3.jpg'
    ],
    'portraits': [
        'images/portrait1.jpg',
        'images/portrait2.jpg'
    ],
    'events': [
        'images/event1.jpg',
        'images/event2.jpg'
    ]
};

function openGallery(category) {
    const modal = document.getElementById('galleryModal');
    const container = document.getElementById('galleryContainer');
    container.innerHTML = ''; // Clear previous images

    // Generate images based on the clicked category
    if(portfolioImages[category]) {
        portfolioImages[category].forEach(imageSrc => {
            const wrapper = document.createElement('div');
            wrapper.className = 'image-wrapper';
            
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = 'Frames By Anooj Portfolio Work';
            
            // Extra HTML protection against saving/dragging
            img.setAttribute('oncontextmenu', 'return false;');
            img.setAttribute('draggable', 'false');

            wrapper.appendChild(img);
            container.appendChild(wrapper);
        });
    }

    // Show the modal and stop the background from scrolling
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore background scrolling
}

// Allow users to close the gallery by clicking anywhere outside the images
window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target == modal) {
        closeGallery();
    }
}
