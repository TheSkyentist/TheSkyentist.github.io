document.addEventListener('DOMContentLoaded', function() {

    // Get the header h2 element
    const headerH2 = document.querySelector('#banner header h2');

    // Function to handle scroll event
    function handleScroll() {

        // Get the current scroll position
        const scrollPosition = window.scrollY;

         // Adjust this value for desired speed
        const translateYValue = Math.max(-scrollPosition * 0.1, -50);

        // Apply the transform based on scroll position
        headerH2.style.transform = `translateY(${translateYValue}em)`;
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
