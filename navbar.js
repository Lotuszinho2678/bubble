document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const navList = document.querySelector(".navbar-nav");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    mobileMenu.addEventListener("click", () => {
        navList.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        // Toggle classes for mobile menu icon animation
        mobileMenu.querySelector(".line1").classList.toggle("active");
        mobileMenu.querySelector(".line2").classList.toggle("active");
        mobileMenu.querySelector(".line3").classList.toggle("active");
    });

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", (event) => {
            const parent = event.currentTarget.parentElement;
            const isActive = parent.classList.contains("active");
            
            document.querySelectorAll(".nav-item.dropdown").forEach(item => {
                item.classList.remove("active");
            });

            if (!isActive) {
                parent.classList.add("active");
            }
        });
    });
});
