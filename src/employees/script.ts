const employeeContainer = document.getElementById('employeeContainer');
let employees = [
    {
      "name": "William McGonagle",
      "positions": ["President", "Chief Executive Officer"],
      "thumbnail": "https://avatars.githubusercontent.com/u/19496353?s=512",
      "email": "mcgonaglew@fairfieldprogramming.org",
      "phone": "+1 203 913 5737",
      "icecream": "Coffee"
    },
    {
      "name": "Neil Chaudhari",
      "positions": ["Vice-President", "Chief Operating Officer"],
      "thumbnail": "https://avatars.githubusercontent.com/u/30356902?s=512",
      "email": "chaudharin@fairfieldprogramming.org",
      "icecream": "Chocolate"
    },
    {
      "name": "Joel Strand",
      "positions": ["Secretary", "Chief Technology Officer"],
      "thumbnail": "https://avatars.githubusercontent.com/u/85464337?s=512",
      "email": "strandj@fairfieldprogramming.org",
      "icecream": "Chocolate"
    },
    {
        "name": "Massiles Ghernaout",
        "positions": [
            "Backend Developer"
        ],
        "thumbnail": "https://avatars.githubusercontent.com/u/82173113?s=512",
        "icecream": "Vanilla"
    },
    {
        "name": "Amitav Nott",
        "positions": [
            "Lead Competition Developer"
        ],
        "thumbnail": "https://avatars.githubusercontent.com/u/58123848?s=512",
        "icecream": "Vanilla"
    },
    {
        "name": "Luke Schaefer",
        "positions": [
            "Contributor"
        ],
        "thumbnail": "https://avatars.githubusercontent.com/u/12357690?s=512",
        "icecream": "Unknown"
    },
    {
        "name": "Nökkvi Sverrisson",
        "positions": [
            "Contributor"
        ],
        "thumbnail": "https://avatars.githubusercontent.com/u/16718504?s=512",
        "icecream": "Unknown"
    }
  ];

// fetch(jsonUrl).then(res => res.json()).then(data => {

//     employees = data;

//     employees.forEach(employee => {

//         createEmployee(employee, employeeContainer);

//     });

// });

function runQuery(query) {

    employeeContainer.innerHTML = "";

    employees.filter((employee) => {

        if (employee.name.toUpperCase().includes(query.toUpperCase())) return true;
        if (employee.icecream.toUpperCase().includes(query.toUpperCase())) return true;

        let contains = false;
        employee.positions.forEach(position => {
            
            if (position.toUpperCase().includes(query.toUpperCase())) contains = true;
            
        });

        return contains;

    }).forEach(employee => {

        createEmployee(employee, employeeContainer);
    
    });

}

document.getElementById('searchBox').oninput = () => {

    // @ts-ignore
    runQuery(document.getElementById('searchBox').value);

}

runQuery('');

function createEmployee(data, parent) {

    const container = document.createElement('div');
    const img = document.createElement('img');
    const nameText = document.createElement('h2');
    const description = document.createElement('p');

    const emailObject = document.createElement('img');
    const phoneObject = document.createElement('img');

    img.setAttribute('width', '128px');
    img.className = 'bd-placeholder-img rounded-circle';
    img.src = data.thumbnail;
    img.alt = `${data.name}'s Profile Picture`;

    nameText.className = 'fw-normal';
    nameText.innerHTML = data.name;

    container.className = 'col-md-4 py-4';

    description.innerHTML = data.positions.join(', ');
    description.innerHTML += `, ${data.icecream} Ice Cream Lover`;

    emailObject.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='30' width='300'><text x='0' y='15' fill='black'>${data.email}</text></svg>`;
    phoneObject.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' height='30' width='300'><text x='0' y='15' fill='black'>${data.phone}</text></svg>`;

    container.append(img);
    container.innerHTML += '<br /><br />';
    container.append(nameText);
    container.append(description);
    if (data.email != undefined) container.append(emailObject);
    if (data.phone != undefined) container.append(phoneObject);
    parent.append(container);

}