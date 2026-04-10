function animateCounter(element, duration = 2000) {
    const target = +element.getAttribute("data-target");
    let startTimestamp = null;

    function step(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        // Ease-out cubic for smoother feel
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        const current = Math.floor(easedProgress * target);
        element.textContent = current + "+";

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = target + "+"; // final value
        }
    }

    requestAnimationFrame(step);
}

// Intersection Observer to trigger counters when visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target, 2000); // smoother 2s duration
            observer.unobserve(entry.target);   // run once per counter
        }
    });
}, { threshold: 0.5 }); // trigger when 50% visible

// Attach observer to all counters
document.querySelectorAll(".counter").forEach(counter => {
    observer.observe(counter);
});
