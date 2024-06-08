function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("loginForm").innerHTML = this.responseText;
    }
    xhttp.open("GET", "hello.txt", true);
    xhttp.send();
}





// scripts.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    let valid = true;

    const username = document.getElementById('username');
    const usernamePattern = /^[a-zA-Z0-9]+$/;
    if (username.value.trim() === '') {
        alert('Username is required');
        valid = false;
    } else if (!usernamePattern.test(username.value.trim())) {
        alert('Username must contain only letters and numbers');
        valid = false;
    }




    // Password validation
    const password = document.getElementById('password');
    if (password.value.trim().length < 6) {
        alert('Password must be at least 6 characters long');
        valid = false;
    }

    if (!valid) {
        event.preventDefault();

    }else {

        event.preventDefault();
        // Hide the form
        document.getElementById('navi').style.display = 'none';
        alert('Form submitted successfully!');

       loadDoc();
          
        
    }
});
