let students = []

renderStudents = (students) => {
  const studentList = document.querySelector('#studentList')

  let elements = ''

  students.forEach( student => {
    elements +=  `
    <div class="student_row">
    <img width="48" height="48"  src="https://source.boringavatars.com/beam/48/Name?colors=5e412f,fcebb6,78c0a8,f07818,f0a830" alt="">
    <div class="student_name" >${student.name}</div>
    <div class="student_city" >${student.city}</div>
    <div class="student_buttons">
      <button>✏️</button>
      <button>❌</button>
    </div>
  </div> 
  `

  })

  studentList.innerHTML = elements

}

const studentForm = document.querySelector('#studentForm')

studentForm.addEventListener('submit', (event) => {
  event.preventDefault()

    const form = document.forms['studentForm']

    const id = String(+new Date)
    const nameInput = form.name.value
    const cityInput = form.city.value

    const newStudent = {
      id,
      name: nameInput,
      city: cityInput
    }

    students.push(newStudent)

    renderStudents(students)

    form.reset()

})
