const title = document.getElementById("title");
const questionName = document.getElementById("questionName");
const questionIcon = document.getElementById("questionIcon");
const questionUsername = document.getElementById("questionUsername");

fetch("https://fpa-questions.herokuapp.com/question/1").then((response) => {

    if (response.status != 200) window.location.href = "/";

    return response;

}).then(response => response.json()).then((data) => {

    title.innerHTML = data.body;

    console.log(data);

})