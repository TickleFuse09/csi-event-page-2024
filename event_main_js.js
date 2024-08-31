document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');

    if (scrollContainer) {
        scrollContainer.addEventListener('wheel', (event) => {
            event.preventDefault(); // Prevent default vertical scroll behavior

            // Adjust scrolling speed
            const scrollSpeed = 0.5; // Change this value to adjust scroll speed
            scrollContainer.scrollLeft += event.deltaY * scrollSpeed;
        });
    }
});
