// script.js

document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta");
    const contactForm = document.getElementById("contact-form");

    // Event listener for the CTA button
    ctaButton.addEventListener("click", () => {
        alert("Learn more about our amazing services!");
    });

    // Event listener for the contact form submission
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get form data
        const name = contactForm.querySelector("input[type='text']").value;
        const email = contactForm.querySelector("input[type='email']").value;
        const message = contactForm.querySelector("textarea").value;

        // Display the input values in an alert (simulate submission)
        alert(`Thank you, ${name}! We have received your message: \n\n${message}\n\nWe'll get back to you at ${email}.`);

        // Optionally clear the form
        contactForm.reset();
    });
});
