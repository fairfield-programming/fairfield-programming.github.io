window.onload = function () {

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'https://fairfield-programming.herokuapp.com/joke', true);
    xmlHttp.send(null);

    console.log(xmlHttp);

    xmlHttp.onload = function (res) {

        document.getElementById('joke').innerHTML = xmlHttp.response;
        
    };

};