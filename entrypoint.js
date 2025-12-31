document.addEventListener("DOMContentLoaded", () => {
    const cordsToggle = document.querySelector(".checkBox");

    // Load previous state from localStorage
    const savedCordsSetting = localStorage.getItem("cordsdisplaysetting");

    if (savedCordsSetting === "Enable") {
        cordsToggle.checked = true; // ON
    } else if (savedCordsSetting === "Disable") {
        cordsToggle.checked = false; // OFF
    } else {
        // Default to ON if nothing saved
        cordsToggle.checked = true;
    }

    // Listen for slider changes
    cordsToggle.addEventListener("change", () => {
        const current = cordsToggle.checked ? "Enable" : "Disable";
        localStorage.setItem("cordsdisplaysetting", current);
        console.log(`Cords display set to ${current}`);
    });
});
