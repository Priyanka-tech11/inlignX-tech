// ===== FORM VALIDATION =====
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !message) {
        showPopup("⚠️ Please fill out all fields before submitting.", "error");
        return;
    }

    if (!email.match(emailPattern)) {
        showPopup("📧 Please enter a valid email address.", "error");
        return;
    }

    // success message
    showPopup(`✅ Thank you, ${name}! Your message has been sent successfully.`, "success");

    // clear form after submit
    document.querySelector("form").reset();
});

// ===== POPUP MESSAGE SYSTEM =====
function showPopup(message, type) {
    const popup = document.createElement("div");
    popup.className = `popup ${type}`;
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(() => popup.classList.add("show"), 100);

    setTimeout(() => {
        popup.classList.remove("show");
        setTimeout(() => popup.remove(), 300);
    }, 3000);
}

// ===== SCROLL-TO-TOP BUTTON =====
const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollTopBtn";
scrollBtn.innerHTML = "↑";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===== FADE-IN SECTIONS ON SCROLL =====
const sections = document.querySelectorAll("section");
const fadeInOnScroll = () => {
    sections.forEach((sec) => {
        const secTop = sec.getBoundingClientRect().top;
        if (secTop < window.innerHeight - 100) {
            sec.classList.add("visible");
        }
    });
};
window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);
