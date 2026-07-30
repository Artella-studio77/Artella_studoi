// دخول إلى الموقع
function enterStudio() {
    document.getElementById("apps").scrollIntoView({
        behavior: "smooth"
    });
}

// ظهور العناصر عند التمرير
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});

// إنشاء نجوم متحركة
const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("span");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.width = (Math.random() * 3 + 1) + "px";
    star.style.height = star.style.width;

    star.style.animationDelay = Math.random() * 5 + "s";

    stars.appendChild(star);
}