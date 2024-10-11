interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Lamia",
    lastName: "Hamdi",
    age: 24,
    location: "Constantine"
};
const student2: Student = {
    firstName: "Aya",
    lastName: "Hamdi",
    age: 12,
    location: "Constantine"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

table.style.width = "100%";
table.style.borderCollapse = "collapse";

const trHead = document.createElement("tr");

const thFirstName = document.createElement("th");
thFirstName.textContent = "First Name";
thFirstName.style.width = "25%";
thFirstName.style.border = "2px solid black";
thFirstName.style.padding = "8px";

const thLocation = document.createElement("th");
thLocation.textContent = "Location";
thLocation.style.width = "25%";
thLocation.style.border = "2px solid black";
thLocation.style.padding = "8px";

trHead.appendChild(thFirstName);
trHead.appendChild(thLocation);
thead.appendChild(trHead);

studentsList.forEach((student) => {
    const studentRow = document.createElement("tr");

    const tdFirstName = document.createElement("td");
    tdFirstName.textContent = student.firstName;
    tdFirstName.style.border = "2px solid black";
    tdFirstName.style.padding = "8px";

    const tdLocation = document.createElement("td");
    tdLocation.textContent = student.location;
    tdLocation.style.border = "2px solid black";
    tdLocation.style.padding = "8px";

    studentRow.appendChild(tdFirstName);
    studentRow.appendChild(tdLocation);
    tbody.appendChild(studentRow);
});

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);
