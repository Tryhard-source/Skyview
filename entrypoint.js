document.addEventListener("DOMContentLoaded", () => {
    const settings = document.querySelector(".settings");
    const settingsMenu = document.querySelector(".settingsmenu");
    const closeBtn = document.querySelector(".close");
    const value1 = document.querySelector(".value1");
    const cordsDiv = document.querySelector(".cords");

    // Make sure cords div exists
    if (!cordsDiv) return;

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
    cordsDiv.style.display = cordsdisplaysetting === "Enable" ? "block" : "none";
    value1.innerHTML = cordsdisplaysetting;

    // Click listener to toggle coords display
    value1.addEventListener("click", () => {
        cordsdisplaysetting = cordsdisplaysetting === "Enable" ? "Disable" : "Enable";
        cordsDiv.style.display = cordsdisplaysetting === "Enable" ? "block" : "none";
        value1.innerHTML = cordsdisplaysetting;
        localStorage.setItem("cordsdisplaysetting", cordsdisplaysetting);
    });
});
