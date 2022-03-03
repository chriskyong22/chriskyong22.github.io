import react from "react"
import { Courses } from "../../Data/RutgersData"

export const Rutgers = () => {
    return (
        <section className="rutgers-section">
            {
                Courses.map((course, idx) => {
                    return (
                        <div className="class">
                            <div className="class-header">
                                <h3>
                                    <a href={course.link} rel="noreferrer noopener" target="_blank">
                                        {course.title}
                                    </a>
                                </h3>
                                <h4 className="class-professor">
                                    Instructor {course.professor} 
                                </h4>
                            </div>
                            <div className="class-description text">
                                {course.description}
                            </div>
                            <div className="class-footer">
                                {course.resources}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}