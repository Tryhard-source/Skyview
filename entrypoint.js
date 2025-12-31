document.addEventListener("DOMContentLoaded", () => {
    const settings = document.querySelector(".settings");
    const settingsMenu = document.querySelector(".settingsmenu");
    const closeBtn = document.querySelector(".close");
    const value1 = document.querySelector(".value1");
    const cordsDiv = document.querySelector(".cords");

    // Toggle settings menu
    settings.addEventListener("click", () => {
        settingsMenu.classList.toggle("none");
    });

    closeBtn.addEventListener("click", () => {
        settingsMenu.classList.toggle("none");
    });

    // Load saved state from localStorage
    let cordsdisplaysetting = localStorage.getItem("cordsdisplaysetting") || "Enable";

    // Set initial state
    if (cordsdisplaysetting === "Enable") {
        value1.innerHTML = "Enable";
        cordsDiv.style.display = "block";
    } else {
        value1.innerHTML = "Disable";
        cordsDiv.style.display = "none";
    }

    // Click listener to toggle coords display
    value1.addEventListener("click", () => {
        if (cordsdisplaysetting === "Disable") {
            value1.innerHTML = "Enable";
            cordsdisplaysetting = "Enable";
            cordsDiv.style.display = "block"; // show coords
        } else {
            value1.innerHTML = "Disable";
            cordsdisplaysetting = "Disable";
            cordsDiv.style.display = "none"; // hide coords
        }

        localStorage.setItem("cordsdisplaysetting", cordsdisplaysetting);
    });
});
