// script.js
function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the form data to the Google Apps Script Web App
    fetch('https://script.google.com/macros/s/AKfycbyhMLQ1iz7SN96JQ7Br5RQjG6sQmOAzYKv56CRvUkb5tTSPvwF7tBI4Y_BWmHgy_SJT-w/exec', {
        method: 'POST',
        body: new URLSearchParams({
            'name': name,
            'email': email,
            'message': message
        })
    }).then(response => response.json())
      .then(result => {
          if (result.result === "success") {
              alert("Your message has been sent successfully!");
              document.getElementById('contactForm').reset();
          } else {
              alert("Failed to send the message.");
          }
      }).catch(error => {
          console.error("Error:", error);
          alert("Failed to send the message.");
      });
}