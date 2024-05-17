
document.addEventListener("DOMContentLoaded", () => {
    const secondBox = document.querySelector(".box");
    const mainBox = document.querySelector(".container");
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault(); 
        secondBox.classList.remove("hidden");
        mainBox.style.display = "";
    });
});

