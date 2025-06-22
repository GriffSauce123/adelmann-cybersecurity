window.addEventListener("scroll", () => {
    const arrow = document.querySelector(".scroll-arrow");
    if (window.scrollY > 30) {
        arrow.classList.add("hidden");
    } else {
        arrow.classList.remove("hidden");
    }
});