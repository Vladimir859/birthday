function openModal() {
    document.getElementById("myModal").classList.add("show");
}

function closeModal(event) {
    if (event.target.classList.contains("modal") || event.target.classList.contains("close-btn")) {
        document.getElementById("myModal").classList.remove("show");
    }
}
function openModal1() {
    document.getElementById("myModal1").classList.add("show");

}

function closeModal1(event) {
    if (event.target.classList.contains("modal") || event.target.classList.contains("close-btn")) {
        document.getElementById("myModal1").classList.remove("show");
    }
}

function openModal2() {
    document.getElementById("myModal2").classList.add("show");

}

function closeModal2(event) {
    if (event.target.classList.contains("modal") || event.target.classList.contains("close-btn")) {
        document.getElementById("myModal2").classList.remove("show");
    }
}