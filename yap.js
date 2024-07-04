// script.js

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const navToggle = document.querySelector('.nav-toggle');

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});

// Apply 
// Get the button element
const button = document.querySelector('.btn-primary');

// Add an event listener to the button
button.addEventListener('click', () => {
  // Get all the input fields
  const inputs = document.querySelectorAll('input, textarea');

  // Check if all input fields have values
  const allFieldsFilled = Array.from(inputs).every(input => input.value.trim() !== '');

  if (allFieldsFilled) {
    // Show an alert message
    alert('Data has been recorded!');

    // Clear all input fields
    inputs.forEach(input => {
      input.value = '';
    });
  } else {
    alert('Please fill in all the fields!');
  }
});
