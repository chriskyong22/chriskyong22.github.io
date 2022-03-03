import { title } from "process"
import react from "react"
import { Books, Technologies, Tools } from "../../Data/LearnData"

export const Learning = () => {
    return (
        <section className="learn-section">
            <section className="section">
                <h2 className="section-title">
                    Books 
                </h2>
                {
                    Books.map((book, idx) => {
                        return (
                            <div key={idx} className="book">
                                <h4 className="book-title">
                                    <a href={book.titleLink}>
                                        {book.title}
                                    </a>
                                </h4>
                                <div className="book-main-section text">
                                    {book.mainContent}
                                </div>
                                <div className="book-footer">
                                    {book.resources}
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            <section className="section">
                <h2 className="section-title">   
                    Technology 
                </h2>
                {
                    Technologies.map((technology, idx) => {
                        return (
                            <div key={idx} className="technology">
                                <h4 className="technology-title">
                                    {technology.title} 
                                </h4>
                                <div className="technology-main-section text">
                                    {technology.mainContent}
                                </div>
                                <div className="technology-footer">
                                    {technology.resources}
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            <section className="section">
                <h2 className="section-title">
                    Tools 
                </h2>
                {
                    Tools.map((tool, idx) => {
                        return (
                            <div key={idx} className="tools">
                                <h4 className="tools-title">
                                    {tool.title} 
                                </h4>
                                <div className="tools-main-section text">
                                    {tool.mainContent}
                                </div>
                                <div className="technology-footer">
                                    {tool.resources}
                                </div>
                            </div>
                        )
                    })
                }

            </section>
        </section>
    )
}
