// Smooth scroll functionality for navigation links
document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the section smoothly
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Offset to prevent hiding behind the menu
            behavior: 'smooth'
        });

        // Slide the navigation bar upwards when a link is clicked
        document.querySelector('.navigation').style.top = '-100px'; // Slide up the menu
        setTimeout(() => {
            document.querySelector('.navigation').style.top = '0'; // Reset position
        }, 500); // After the slide-up animation is complete, reset the menu position
    });
});