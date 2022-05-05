const studentForm = document.querySelector('#studentForm');
const studentsContainer = document.querySelector('.students');

const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const roleInput = studentForm['role'];

const students = JSON.parse(localStorage.getItem('students')) || [];

const addStudent = (name, age, role) => {
    students.push({
        name,
        age,
        role
    });

    localStorage.setItem('students', JSON.stringify(students));

    return { name, age, role }
}

const createStudentElem = ({ name, age, role }) => {
    // creating elements
    const studentDiv = document.createElement('div');

    const studentName = document.createElement('h3');
    const studentAge = document.createElement('p');
    const studentRole = document.createElement('p');

    // filling the content
    studentName.innerText = `Student name: ${name}`;
    studentAge.innerText = `Student age: ${age}`;
    studentRole.innerText = `Student role: ${role}`;

    // adding to the DOM
    studentDiv.append(studentName, studentAge, studentRole);
    studentsContainer.appendChild(studentDiv);

    studentsContainer.style.display = students.lenght === 0 ? "none" : "flex";
}

studentsContainer.style.display = students.lenght === 0 ? "none" : "flex";

students.forEach(student => {
    createStudentElem(student);
});

studentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newStudent = addStudent(
        nameInput.value,
        ageInput.value,
        roleInput.value
    );

    createStudentElem(newStudent);

    // nameInput.value = '';
    // ageInput.value = '';
    // roleInput.value = '';
    studentForm.reset();
});