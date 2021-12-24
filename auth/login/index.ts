function validateForm(username, password) {



    return false;

}

window.onload = function () {

    var username = document.getElementById('username');
    var password = document.getElementById('password');

    document.getElementById('form').onsubmit = () => { return validateForm(username, password) };

    // Make Hide/ Show Buttons
    var invisibleButton = document.getElementById('buttonInvisible');
    var visibleButton = document.getElementById('buttonVisible');

    invisibleButton.style.display = 'none';

    visibleButton.onclick = () => {

        invisibleButton.style.display = 'block';
        visibleButton.style.display = 'none';
        
        password.setAttribute('type', 'text');

    };

    invisibleButton.onclick = () => {

        invisibleButton.style.display = 'none';
        visibleButton.style.display = 'block';

        password.setAttribute('type', 'password');

    };

    // Get the Jokes
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'https://fairfield-programming.herokuapp.com/joke', true);
    xmlHttp.send(null);

    console.log(xmlHttp);

    xmlHttp.onload = function (res) {

        document.getElementById('joke').innerHTML = xmlHttp.response;
        
    };

};