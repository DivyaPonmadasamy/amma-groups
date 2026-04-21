if (window.matchMedia("(max-width: 768px)").matches) {
    document.querySelectorAll(".wow").forEach(el => {
        el.classList.remove("wow");
    });

    document.querySelectorAll(".animate__animated").forEach(el => {
        el.classList.remove("animate__animated");
    });
}