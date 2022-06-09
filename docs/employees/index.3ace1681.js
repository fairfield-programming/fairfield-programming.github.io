const employeeContainer = document.getElementById('employeeContainer');
let employees = [];
fetch("/employees/data.json").then((res)=>res.json()
).then((data)=>{
    employees = data;
    employees.forEach((employee)=>{
        createEmployee(employee, employeeContainer);
    });
});
function createEmployee(data, parent) {
    const container = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('width', '128px');
    img.className = 'bd-placeholder-img rounded-circle';
    img.src = data.thumbnail;
    img.alt = `${data.name}'s Profile Picture`;
    container.className = 'col-4';
    parent.append(container);
}

//# sourceMappingURL=index.3ace1681.js.map
