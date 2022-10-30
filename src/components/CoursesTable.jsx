import React from 'react'

const CoursesTable = ({courses}) => {

    console.log(courses);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>title</th>
                        <th>desc</th>
                        <th>categorydb</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => {
                        return (
                            <tr key={course.id}>
                                <td data-label="ID:">{course.id}</td>
                                <td data-label="First Name:">{course.title}</td>
                                <td data-label="Last Name:">{course.desc}</td>
                                <td data-label="role:">{course.categorydb}</td>
                                <td data-label="Phone #:">{course.price}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}

export default CoursesTable