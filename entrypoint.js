document.addEventListener("DOMContentLoaded", () => {
    const settings = document.querySelector(".settings");
    const settingsMenu = document.querySelector(".settingsmenu");
    const closeBtn = document.querySelector(".close");
    const value1 = document.querySelector(".value1");

    // Show/hide settings menu
    settings.addEventListener("click", () => {
        settingsMenu.classList.toggle("none");
    });

    closeBtn.addEventListener("click", () => {
        settingsMenu.classList.toggle("none");
    });

    // Load current setting from localStorage
    let cordsdisplaysetting = localStorage.getItem("cordsdisplaysetting") || "Enable";

    // Update button text
    value1.innerHTML = cordsdisplaysetting;

    // Toggle button click
    value1.addEventListener("click", () => {
        cordsdisplaysetting = cordsdisplaysetting === "Enable" ? "Disable" : "Enable";
        localStorage.setItem("cordsdisplaysetting", cordsdisplaysetting);
        value1.innerHTML = cordsdisplaysetting;
        console.log(`Cords display set to ${cordsdisplaysetting}`);
    });
});
