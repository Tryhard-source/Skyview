
document.addEventListener("DOMContentLoaded" , ()=>{
const settings = document.querySelector(".settings")

settings.addEventListener("click", () => {
    document.querySelector(".settingsmenu").classList.toggle("none")
})


document.querySelector(".close").addEventListener("click" , () => {
    document.querySelector(".settingsmenu").classList.toggle("none")
})
const value1 = document.querySelector(".value1")
let cordsdisplaysetting = localStorage.getItem("cordsdisplaysetting") || "Enable";

if (cordsdisplaysetting === "Disable") {
    value1.innerHTML = "Disable";
} else {
    value1.innerHTML = "Enable";
}

if (cordsdisplaysetting === "Enable") {
    console.log("Cords are enabled");
} else {
    console.log("Cords are disabled");
}

// Event listener for clicks on the button
value1.addEventListener("click", () => {
    if (cordsdisplaysetting === "Disable") {
        value1.innerHTML = "Enable";
        cordsdisplaysetting = "Enable";
        localStorage.setItem("cordsdisplaysetting", cordsdisplaysetting);

        // Show cords
        console.log("Cords are enabled");
    } else {
        value1.innerHTML = "Disable";
        cordsdisplaysetting = "Disable";
        localStorage.setItem("cordsdisplaysetting", cordsdisplaysetting);

        console.log("Cords are disabled");
    }
});
})