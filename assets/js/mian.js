// Get all the radio buttons for gender selection
const genderRadioButtons = document.querySelectorAll(
    'input[type="radio"][name="start"]'
);

// Function to show Step 1 (Question 1)
function showStep1() {
    document.getElementById("welcome-section").classList.remove("active");
    document.getElementById("welcome-section").classList.add("fade-out");
    document.getElementById("step-1").classList.add("active");
    document.getElementById("main").style.overflow = "hidden";
}

// Event listener for gender selection to move to Step 1
genderRadioButtons.forEach((button) => {
    button.addEventListener("change", () => {
        showStep1(); // Move to step 1 after selecting gender
    });
});

// Handle the "click" event for Step 1 radio buttons
document
    .querySelectorAll("#step-1 input[type='radio']")
    .forEach((radio) => {
        radio.addEventListener("click", () => {
            document.getElementById("step-1").classList.remove("active");
            document.getElementById("step-2").classList.add("active");
        });
    });

// Handle the "click" event for Step 2 radio buttons
document
    .querySelectorAll("#step-2 input[type='radio']")
    .forEach((radio) => {
        radio.addEventListener("click", () => {
            document.getElementById("step-2").classList.remove("active");
            document.getElementById("loading-page").classList.add("active");
            setLoadingPercentage(); // Trigger loading animation
        });
    });

// Loading percentage animation
function setLoadingPercentage() {
    let percentage = 0;
    const maxPercentage = 100;
    const interval = 50;

    // Add spinning animation
    document.querySelector(".progress-dot-circle").classList.add("spin");
    document.getElementById("step-2").addEventListener("click", () => {
        const progress = document.querySelector(".progress");
        progress.style.width = "25%";
    });
    const loop = setInterval(function () {
        // Update percentage text
        document.querySelector(".loading-percentage").textContent =
            percentage + "%";

        // Check if loading is complete
        if (percentage === maxPercentage) {
            clearInterval(loop);

            // Transition to the results page
            setTimeout(() => {
                document
                    .getElementById("loading-page")
                    .classList.remove("active");
                document.getElementById("results-page").classList.add("active");
            }, 1000);
        }

        percentage++;
    }, interval);
}
