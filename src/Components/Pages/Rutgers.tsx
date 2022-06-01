import react, { useEffect } from "react"
import { Courses } from "../../Data/RutgersData"
import { CourseCard } from "../Cards/CourseCard/CourseCard"

export const Rutgers = () => {
    useEffect(() => {
        document.title = 'CY | Time at Rutgers'
    }, [])
    return (
        <section className="rutgers-section">
            <CourseCard course={Courses[0]}/>

            {
                Courses.map((course, idx) => {
                    return (
                        <article key={`Course-${idx}`} className="class">
                            <header aria-label="class header" className="class-header">
                                <h2 className="h3">
                                    <a href={course.link} rel="noreferrer noopener" target="_blank">
                                        {course.title}
                                    </a>
                                </h2>
                                <h2 className="class-professor h4">
                                    Instructor {course.professor} 
                                </h2>
                            </header>
                            <div aria-label="class description" className="class-description text">
                                {course.description}
                            </div>
                            <div aria-label="class footer" className="class-footer">
                                {
                                    course.resources.map((resource, _idx) => {
                                        return (
                                            <div key={`class-footer${idx}-${_idx}`}>
                                                {resource}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </article>
                    )
                })
            }
        </section>
    )
}