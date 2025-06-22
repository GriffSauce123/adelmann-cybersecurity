const arrow = document.querySelector(".scroll-arrow");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        arrow.classList.add("hidden");
    } else {
        arrow.classList.remove("hidden");
    }
});

arrow.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollBy({
        top: 700,
        left: 0,
        behavior: "smooth"
    });
});