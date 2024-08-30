// Wait until the entire DOM content is fully loaded before running the animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate the header: Fade in from the top with a bounce effect
    gsap.from("header", {duration: 1, opacity: 0, y: -50, ease: "bounce"});
    
    // Animate the event-info section: Fade in from the left with a slight delay
    gsap.from(".event-info", {duration: 1, opacity: 0, y: -50, delay: 1});
    
    // Animate the schedule section: Fade in from the right with a delay after event-info
    gsap.from(".schedule", {duration: 1, opacity: 0, y: -50, delay: 1.5});
    
    // Animate the registration section: Fade in from the bottom with a delay after schedule
    gsap.from(".registration", {duration: 1, opacity: 0, y: -50, delay: 2});
});
