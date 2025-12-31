document.addEventListener("DOMContentLoaded", () => {
    const value1 = document.querySelector(".value1");
    const cordsDiv = document.querySelector(".cords");

    // Make sure the elements exist
    if (!value1 || !cordsDiv) return;

    // Load previous setting or default
    let cordsdisplaysetting = localStorage.getItem("cordsdisplaysetting") || "Enable";

    // Set the button text
    value1.innerHTML = cordsdisplaysetting;

    // Show/hide coords div based on stored value
    cordsDiv.style.display = cordsdisplaysetting === "Enable" ? "block" : "none";

    // Toggle logic (exactly like before)
    value1.addEventListener("click", () => {
        cordsdisplaysetting = cordsdisplaysetting === "Enable" ? "Disable" : "Enable";
        value1.innerHTML = cordsdisplaysetting;
        cordsDiv.style.display = cordsdisplaysetting === "Enable" ? "block" : "none";
        localStorage.setItem("cordsdisplaysetting", cordsdisplaysetting);
    });
});
