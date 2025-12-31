document.addEventListener("DOMContentLoaded", () => {
    const value1 = document.querySelector(".value1");
    const cordsDiv = document.querySelector(".cords");

    // Load saved state or default
    let cordsdisplaysetting = localStorage.getItem("cordsdisplaysetting") || "Enable";

    // Show/Hide coords (optional)
    if (cordsDiv) {
        cordsDiv.style.display = cordsdisplaysetting === "Enable" ? "block" : "none";
    }

    // Set button text
    value1.innerHTML = cordsdisplaysetting;

    // Toggle on click
    value1.addEventListener("click", () => {
        cordsdisplaysetting = cordsdisplaysetting === "Enable" ? "Disable" : "Enable";
        value1.innerHTML = cordsdisplaysetting;
        if (cordsDiv) cordsDiv.style.display = cordsdisplaysetting === "Enable" ? "block" : "none";
        localStorage.setItem("cordsdisplaysetting", cordsdisplaysetting);
    });
});
