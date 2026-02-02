// Hero Icon Flash Effect (for mobile touch)
document.addEventListener('DOMContentLoaded', () => {
    const heroIcon = document.querySelector('.hero-icon');
    if (heroIcon) {
        let flashTimeout;
        heroIcon.addEventListener('click', () => {
            clearTimeout(flashTimeout);
            heroIcon.classList.remove('flash-active');
            // Force reflow to restart animation
            void heroIcon.offsetWidth;
            heroIcon.classList.add('flash-active');
            // Remove class after animation duration (0.6s) as fallback
            flashTimeout = setTimeout(() => {
                heroIcon.classList.remove('flash-active');
            }, 600);
        });
        heroIcon.addEventListener('animationend', (e) => {
            if (e.animationName === 'lightning-flash') {
                heroIcon.classList.remove('flash-active');
            }
        });
    }
});

// Carousel Navigation
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.screenshots-grid');
    const mockups = document.querySelectorAll('.phone-mockup');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 1; // Start with middle item active

    function setActiveItem(index) {
        currentIndex = index;
        
        mockups.forEach((mockup, i) => {
            mockup.classList.toggle('active', i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function updateActiveFromScroll() {
        const gridRect = grid.getBoundingClientRect();
        const gridCenter = gridRect.left + gridRect.width / 2;
        let closestIndex = 0;
        let minDistance = Infinity;

        mockups.forEach((mockup, index) => {
            const rect = mockup.getBoundingClientRect();
            const mockupCenter = rect.left + rect.width / 2;
            const distance = Math.abs(gridCenter - mockupCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        setActiveItem(closestIndex);
    }

    function scrollToItem(index, smooth = true) {
        const mockup = mockups[index];
        if (!mockup) return;

        const gridRect = grid.getBoundingClientRect();
        const mockupRect = mockup.getBoundingClientRect();
        const scrollOffset = mockupRect.left - gridRect.left - (gridRect.width / 2) + (mockupRect.width / 2);
        
        grid.scrollBy({ left: scrollOffset, behavior: smooth ? 'smooth' : 'instant' });
    }

    // Click on dots to navigate
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                scrollToItem(index);
            } else {
                setActiveItem(index);
            }
        });
    });

    // Click on mockups to select
    mockups.forEach((mockup, index) => {
        mockup.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                scrollToItem(index);
            } else {
                setActiveItem(index);
            }
        });
    });

    // Initial state - middle item active
    setActiveItem(1);
    
    // On mobile, scroll to center the active item on load
    if (window.innerWidth <= 768) {
        const centerOnLoad = () => {
            scrollToItem(1, false);
            // Sync active state after scroll position is set
            requestAnimationFrame(() => {
                updateActiveFromScroll();
            });
        };
        if (document.readyState === 'complete') {
            setTimeout(centerOnLoad, 0);
        } else {
            window.addEventListener('load', () => setTimeout(centerOnLoad, 0));
        }
    }

    // Scroll listener for mobile
    let ticking = false;
    grid.addEventListener('scroll', () => {
        if (window.innerWidth > 768) return;
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveFromScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Handle resize
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            updateActiveFromScroll();
        }
    });
});
