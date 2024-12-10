document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        alert(`Thank you for Registering, ${name}! A confirmation has been sent to ${email}.`);
        document.getElementById("rsvp-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
