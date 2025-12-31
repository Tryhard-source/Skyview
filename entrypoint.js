document.addEventListener("DOMContentLoaded", () => {

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
