const loginForm = document.getElementById("login-form");

loginForm.onsubmit = () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let request = new Request("https://fairfield-programming.herokuapp.com/user/login", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    });

    fetch(request).then((data) => {

        if (data.status == 200) {

            console.log(data.json());
            Cookies.set('token', data.json().token);
            // window.location.href = "/dashboard";

        } else if (data.status == 404) {

            displayWarning("Account Not Found.");

        } else {

            displayWarning("Incorrect Email or Password.");

        }

    }).catch((error) => {

        displayWarning("Internal Error- Try Reloading the Page.");

    });

    return false;

};

function displayWarning(warningText) {

    var warningBox = document.getElementById("warningBox");

    warningBox.innerHTML = warningText;
    warningBox.style.display = "block";

}