// Grabbing all form elements.

const form = document.getElementById("form");

const day = document.getElementById("day");

const month = document.getElementById("month");

const year = document.getElementById("year");

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

// Getting current date.

const date = new Date();

const currentDay = date.getDate();

const currentMonth = date.getMonth() + 1;

const currentYear = date.getFullYear();
