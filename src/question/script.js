const title = document.getElementById("title");
const questionName = document.getElementById("questionName");
const questionIcon = document.getElementById("questionIcon");
const questionUsername = document.getElementById("questionUsername");
const answerParent = document.getElementById("answerParent");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch(`https://fpa-questions.herokuapp.com/question/${id}`).then((response) => {

    if (response.status != 200) window.location.href = "/";

    return response;

}).then(response => response.json()).then((data) => {

    title.innerHTML = data.body;

    fetch(`https://fairfield-programming.herokuapp.com/user/${data.user}`).then(response => response.json()).then((userData) => {

        questionName.innerHTML = userData.username.replace(/\-/g, " ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());;
        questionUsername.innerHTML = "@" + userData.username;
        questionIcon.src = userData.profilePicture;

    })

    data.answers.forEach(element => {
        
       addAnswer(element, answerParent);

    });

    console.log(data);

})

function addAnswer(data, parent) {

    const container = document.createElement("div");
    const paragraph = document.createElement("p");

    console.log(data);

    fetch(`https://fairfield-programming.herokuapp.com/user/${data.user}`).then(response => response.json()).then((data) => {

        const userContainer = document.createElement("div");
        const userIcon = document.createElement("img");
        const cliff = document.createElement("div");
        const bar = document.createElement("div");

        const span = document.createElement("span");
        const strong = document.createElement("strong");

        userContainer.className = "d-flex text-muted pt-3";
        cliff.className = "mb-0 small lh-sm w-100";
        bar.className = "d-flex justify-content-between";
        span.className = "d-block";
        strong.className = "text-gray-dark";
        userIcon.className = "bd-placeholder-img flex-shrink-0 me-2 rounded";

        userIcon.width = 32;
        userIcon.height = 32;

        userContainer.append(userIcon);
        userContainer.append(cliff);
        cliff.append(bar);
        cliff.append(span);
        bar.append(strong);

        userIcon.src = data.profilePicture;
        span.innerHTML = "@" + data.username;
        strong.innerHTML = data.username.replace(/\-/g, " ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

        container.append(userContainer);

    })

    container.className = "bg-body border my-3 p-3 rounded";

    paragraph.innerHTML = data.body;

    container.append(paragraph);

    parent.append(container);

}