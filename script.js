/* 
  Author: James Clisby
  File: script.js
  Description: Handles form submission and displays user input dynamically on the Contact page.
  Date: November 2025
*/

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("webForm");
  const output = document.getElementById("output");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload

      // Capture form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const contactMethod = document.querySelector('input[name="contactMethod"]:checked')?.value || "Not specified";
      const topics = Array.from(document.querySelectorAll('input[name="topics"]:checked')).map(el => el.value).join(", ");
      const reason = document.getElementById("reason").value;

      // Display formatted output
      output.innerHTML = `
        <h3>Form Submission Summary</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
        <p><strong>Topics of Interest:</strong> ${topics}</p>
        <p><strong>Reason for Contact:</strong> ${reason}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><em>Thank you for reaching out! I’ll get back to you soon.</em></p>
      `;
    });
  }
});
