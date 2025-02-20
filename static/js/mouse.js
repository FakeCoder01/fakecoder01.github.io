// cursor 
const cursor = document.querySelector(".custom-cursor");
window.addEventListener("mousedown", (event) => {
    event.preventDefault(); 
    if (!cursor.classList.contains("click")) {
        cursor.classList.add("click");
        setTimeout(() => {
            cursor.classList.remove("click");
        }, 800);
    }
});

window.addEventListener("mousemove", (event) => {
    event.preventDefault(); 
    let x = event.pageX - cursor.offsetWidth / 2,
        y = event.pageY - cursor.offsetHeight / 2;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});