// JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const settings = document.querySelector(".settings");
    const settingsMenu = document.querySelector(".settingsmenu");
    const closeBtn = document.querySelector(".close");
    const value1 = document.querySelector(".value1");
    const cords = document.querySelector(".cords");

    // Show/hide settings menu
    settings.addEventListener("click", () => {
        settingsMenu.classList.toggle("none");
    });

    closeBtn.addEventListener("click", () => {
        settingsMenu.classList.toggle("none");
    });

    // Load setting from localStorage
    let cordsdisplaysetting = localStorage.getItem("cordsdisplaysetting") || "Enable";

    function updateCordsDisplay() {
        if (cordsdisplaysetting === "Enable") {
            cords.style.display = "block";
            value1.innerHTML = "Enable";
            console.log("Cords are enabled");
        } else {
            cords.style.display = "none";
            value1.innerHTML = "Disable";
            console.log("Cords are disabled");
        }
    }

    // Initial display
    updateCordsDisplay();

    // Toggle setting when button clicked
    value1.addEventListener("click", () => {
        if (cordsdisplaysetting === "Disable") {
            cordsdisplaysetting = "Enable";
        } else {
            cordsdisplaysetting = "Disable";
        }
        localStorage.setItem("cordsdisplaysetting", cordsdisplaysetting);
        updateCordsDisplay();
    });
});
