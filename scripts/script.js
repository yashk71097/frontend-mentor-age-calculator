// Grabbing all form elements.

const form = document.getElementById("form");

const day = document.getElementById("day");

const month = document.getElementById("month");

const year = document.getElementById("year");

const dayLabel = document.querySelector(".day-label");

const monthLabel = document.querySelector(".month-label");

const yearLabel = document.querySelector(".year-label");

// Grabbing age display elements.

const yearDisplay = document.querySelector(".years");

const monthDisplay = document.querySelector(".months");

const dayDisplay = document.querySelector(".days");

// Grabbing all error elements.

const dayError = document.getElementById("day-error");

const monthError = document.getElementById("month-error");

const yearError = document.getElementById("year-error");

// Grabbing buttons.

const submitBtn = document.getElementById("submit-btn");

const resetBtn = document.getElementById("reset-btn");

// Getting current date.

var date = new Date();

var currentDay = date.getDate();

var currentMonth = date.getMonth() + 1;

var currentYear = date.getFullYear();

// Stop form to  submit when clicked on submit button.

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

// Array of months.

const monthsArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Function to validate day input field.

function validateDay() {
    if (day.value === "") {
        dayError.textContent = "field cannot be empty.";
        day.style.borderColor = "#ff5959";
        dayLabel.style.color = "#ff5959";
        return false;
    } else if (day.value > 31 || day.value < 1) {
        dayError.textContent = "must be a valid data.";
        day.style.borderColor = "#ff5959";
        dayLabel.style.color = "#ff5959";
        return false;
    } else {
        dayError.textContent = "";
        day.style.borderColor = "#dcdcdc";
        dayLabel.style.color = "#716f6f";
    }
    return true;
}

// Function to validate month input field.

function validateMonth() {
    if (month.value === "") {
        monthError.textContent = "field cannot be empty.";
        month.style.borderColor = "#ff5959";
        monthLabel.style.color = "#ff5959";
        return false;
    } else if (month.value > 12 || month.value < 1) {
        monthError.textContent = "must be a valid data.";
        month.style.borderColor = "#ff5959";
        monthLabel.style.color = "#ff5959";
        return false;
    } else {
        monthError.textContent = "";
        month.style.borderColor = "#dcdcdc";
        monthLabel.style.color = "#716f6f";
    }
    return true;
}

// Function to validate year input field.

function validateYear() {
    if (year.value === "") {
        yearError.textContent = "field cannot be empty.";
        year.style.borderColor = "#ff5959";
        yearLabel.style.color = "#ff5959";
        return false;
    } else if (year.value < 1) {
        yearError.textContent = "must be a valid data.";
        year.style.borderColor = "#ff5959";
        yearLabel.style.color = "#ff5959";
        return false;
    } else {
        yearError.textContent = "";
        year.style.borderColor = "#dcdcdc";
        yearLabel.style.color = "#716f6f";
    }
    return true;
}

// Function to calculate age.

function calculateAge() {
    if (validateForm()) {
        if (day.value > currentDay) {
            currentDay = currentDay + monthsArr[currentMonth - 1];
            currentMonth = currentMonth - 1;
        }
        if (month.value > currentMonth) {
            currentMonth = currentMonth + 12;
            currentYear = currentYear - 1;
        }

        const calDay = currentDay - day.value;
        const calMonth = currentMonth - month.value;
        const calYear = currentYear - year.value;

        dayDisplay.textContent = calDay;
        monthDisplay.textContent = calMonth;
        yearDisplay.textContent = calYear;
    }
}

// Function to validate form.

function validateForm() {
    validateDay();
    validateMonth();
    validateYear();
    if (!validateDay() || !validateMonth() || !validateYear()) {
        return false;
    } else {
        return true;
    }
}

// What happens when confirm button is clicked.

submitBtn.addEventListener("click", () => {
    calculateAge();
    // calculateAge();
});

// What happens when reset button is clicked.

resetBtn.addEventListener("click", () => {
    dayDisplay.innerHTML = "__";
    monthDisplay.innerHTML = "__";
    yearDisplay.innerHTML = "__";

    day.value = "";
    month.value = "";
    year.value = "";
});
