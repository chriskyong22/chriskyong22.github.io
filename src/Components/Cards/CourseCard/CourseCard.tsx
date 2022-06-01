import React from "react";
import { Course } from "../../../Data/RutgersData";
import "./CourseCard.scss";

interface CourseCardProps {
    course: Course;
}

// interface Course {
//     title: string;
//     link: string;
//     professor: string;
//     description: JSX.Element;
//     resources: JSX.Element[];
// }

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <section className="course">
            <div className="course__header-section">
                <header>
                    <h2 className="course__header-section__title h4">
                        {course.title}
                    </h2>
                    <h3 className="course__header-section__professor h4">
                        Instructor {course.professor}
                    </h3>
                </header>
            </div>
            <div className="course__info-section">
                <div className="course__info-section__description">
                    {course.description ?? "No Description Listed."}
                </div>
                <div className="course__info-section__resources">
                    <strong>
                        Resources 
                    </strong>
                    <div className="course__info-section__resources__links">
                        {course.resources.map((resource, _idx) => {
                            return (
                                <React.Fragment key={`resource-link${_idx} ${course.title}`}>
                                    {resource}
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
                <div className="course__info-section__link-container">
                    <a 
                        className="course__info-section__link"
                        href={course.link}
                        rel="noreferrer noopener" target="_blank"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    )
}