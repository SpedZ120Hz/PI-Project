document.querySelectorAll(".catalog-card-toggle").forEach((button) => {
    const details = document.getElementById(button.getAttribute("aria-controls"));
    let pinned = false;

    function showDetails(visible) {
        button.setAttribute("aria-expanded", String(visible));
        details.hidden = !visible;
    }

    showDetails(false);

    button.addEventListener("pointerenter", (event) => {
        if (event.pointerType === "mouse") showDetails(true);
    });

    button.addEventListener("pointerleave", (event) => {
        if (event.pointerType === "mouse" && !pinned) showDetails(false);
    });

    button.addEventListener("click", () => {
        pinned = !pinned;
        showDetails(pinned);
    });

    button.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            pinned = false;
            showDetails(false);
        }
    });
});
