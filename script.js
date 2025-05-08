// Function to trigger animation when button is clicked
document.getElementById('animateButton').addEventListener('click', function() {
    const box = document.getElementById('animatedBox');
    // Add a class to trigger the animation
    box.style.transform = 'rotate(360deg)';
    box.style.backgroundColor = '#ff5733'; // Change color after animation
    
    // Store user preferences in localStorage
    storePreferences();
});

// Function to store user preferences (background color)
function storePreferences() {
    const bgColor = document.getElementById('bgColor').value;
    localStorage.setItem('bgColor', bgColor); // Store the color in localStorage
    
    // Display saved preferences
    const preferenceText = document.getElementById('userPreference');
    preferenceText.textContent = `Saved Background Color: ${bgColor}`;
    document.body.style.backgroundColor = bgColor; // Apply the saved color to the body
}

// Function to retrieve preferences from localStorage on page load
function loadPreferences() {
    const savedBgColor = localStorage.getItem('bgColor');
    if (savedBgColor) {
        document.getElementById('bgColor').value = savedBgColor;
        document.body.style.backgroundColor = savedBgColor;
        document.getElementById('userPreference').textContent = `Saved Background Color: ${savedBgColor}`;
    }
}

// Call loadPreferences when the page loads to apply any saved preferences
window.onload = loadPreferences;
