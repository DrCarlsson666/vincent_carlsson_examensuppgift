const keys = document.querySelectorAll(".key");

function activateKey(letter) {
    const key = document.querySelector(
        `.key[data-key="${letter.toUpperCase()}"]`
    );

    if (!key) return;

    key.classList.add("active");

    setTimeout(() => {
        key.classList.remove("active");
    }, 150);
}

// Fysiskt tangentbord
document.addEventListener("keydown", (e) => {
    activateKey(e.key);
});

// Klick på virtuella tangenter
keys.forEach(key => {
    key.addEventListener("click", () => {
        activateKey(key.dataset.key);
    });
});