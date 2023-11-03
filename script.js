// Get the input field
var percentageInput = document.getElementById('percentage');

// Add an event listener for the "keydown" event on the input field
percentageInput.addEventListener('keydown', function(event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.keyCode === 13) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Call the checkGrade function if "Enter" key is pressed
        checkGrade();
    }
});

// Your existing code for the button click event
function checkGrade() {
    var percentage = document.getElementById("percentage").value;

    if (percentage >= 80) {
        displayResult("A+");
    } else if (percentage >= 70) {
        displayResult("A");
    } else if (percentage >= 60) {
        displayResult("B");
    } else if (percentage >= 50) {
        displayResult("C");
    } else {
        displayResult("F");
    }
}

function displayResult(grade) {
    // Get the result element
    var resultElement = document.getElementById("result");
    // Set the grade result text
    resultElement.textContent = "Grade: " + grade;
}
