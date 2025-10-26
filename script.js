// Lazy loading for YouTube videos and images
document.addEventListener('DOMContentLoaded', function() {
    const iframes = document.querySelectorAll('iframe[data-src]');
    const images = document.querySelectorAll('img[data-src]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const src = element.getAttribute('data-src');
                
                if (src) {
                    element.setAttribute('src', src);
                    element.removeAttribute('data-src');
                    observer.unobserve(element);
                }
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    iframes.forEach(iframe => {
        observer.observe(iframe);
    });
    
    images.forEach(img => {
        observer.observe(img);
    });
});