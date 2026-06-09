document.addEventListener("keydown", (e) => {

    const key = document.querySelector(
        `[data-code="${e.code}"]`
    );

    if(key){
        key.classList.add("active");
    }
});

document.addEventListener("keyup", (e) => {

    const key = document.querySelector(
        `[data-code="${e.code}"]`
    );

    if(key){
        key.classList.remove("active");
    }
});