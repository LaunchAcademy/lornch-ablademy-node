import React from "react"

const StudentList = props => {
  const studentListItems = props.students.map(studentObject => {
    return(
      <li key={studentObject.id}>
        {studentObject.name}
      </li>
    )
  })

  return(
    <div>
      <h4>Students signed up for clinic:</h4>
      {studentListItems}
    </div>
  )
}

export default StudentList