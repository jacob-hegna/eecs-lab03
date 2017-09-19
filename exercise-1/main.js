var verify_pw = function() {
    let pw1 = document.getElementById('pw').value;
    let pw2 = document.getElementById('pw_validate').value;

    if(pw1 != pw2) {
        alert("Passwords don't match!");
    } else if(pw1.length < 8) {
        alert("Password is not at least 8 characters long!");
    } else {
        alert("Password validation successful!");
    }
};