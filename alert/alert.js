export function dismissAlert() {
    const elements = document.querySelectorAll(".alert-dismissable");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", (e) => {
            if (e.target.classList.contains("fa-close")) {
                e.target.parentElement.style.display = "none";
            }
        });
    }
}