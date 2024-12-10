document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        alert(`Thank you for reaching out, ${name}! We'll get back to you at ${email}.`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
