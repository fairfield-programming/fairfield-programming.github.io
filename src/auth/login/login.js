const loginForm = document.getElementById("login-form");

loginForm.onsubmit = () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let request = new Request("https://fairfield-programming.herokuapp.com/user/login", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
            username: ""
        })
    });

    fetch(request).then((data) => {

        console.log(data);

    }).catch((error) => {

        console.log(error);

    });

    return false;

};