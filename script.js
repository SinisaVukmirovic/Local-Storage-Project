const studentForm = document.querySelector('#studentForm');
const studentsContainer = document.querySelector('.students');

const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const roleInput = studentForm['role'];

const students = [
    {
        name: 'John',
        age: 32,
        role: 'Mathematics'
    }
];

const addStudent = (name, age, input) => {

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
    studentDiv.append(studentName, studentAge, studentRole)
    studentsContainer.appendChild(studentDiv)
}

students.forEach(student => {
    createStudentElem(student);
});