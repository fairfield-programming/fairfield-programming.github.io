if (Cookies.get("token") != undefined) window.location.href = "/dashboard";
const signupForm = document.getElementById("signup-form");
signupForm.onsubmit = ()=>{
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let request = new Request("https://fairfield-programming.herokuapp.com/user/signup", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
            username
        }),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    });
    fetch(request).then((data)=>{
        if (data.status == 200) data.json().then((jsonData)=>{
            Cookies.set('token', jsonData.token);
            alert("Email has been sent to you, Please view it to validate your email address. ( The email will expire in 4 days )");
            window.location.href = "/dashboard";
        });
        else if (data.status == 403) displayWarning("Account Already Exists.");
        else displayWarning("Invalid Username, Email or Password.");
    }).catch((error)=>{
        displayWarning("Internal Error- Try Reloading the Page.");
    });
    return false;
};
function displayWarning(warningText) {
    var warningBox = document.getElementById("warningBox");
    warningBox.innerHTML = warningText;
    warningBox.style.display = "block";
}

//# sourceMappingURL=index.7c6f19cc.js.map
