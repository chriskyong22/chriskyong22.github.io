import react, { useEffect } from "react"
import { Books, Technologies, Tools } from "../../Data/LearnData"

export const Learning = () => {

    useEffect(() => {
        document.title = 'CY | Currently Learning';
    }, [])

    return (
        <section className="learn-section">
            <section className="section">
                <h2 className="section-title">
                    Books 
                </h2>
                {
                    Books.map((book, idx) => {
                        return (
                            <article key={`book_${idx}`} className="book">
                                <h3 className="book-title h4">
                                    <a href={book.titleLink}>
                                        {book.title}
                                    </a>
                                </h3>
                                <div className="book-main-section text">
                                    {book.mainContent}
                                </div>
                                <div className="book-footer">
                                    {
                                        book.resources.map((resource, _idx) => {
                                            return (
                                                <div key={`book-footer${idx}-${_idx}`}>
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

            <section className="section">
                <h2 className="section-title">   
                    Technology 
                </h2>
                {
                    Technologies.map((technology, idx) => {
                        return (
                            <article key={`tech_${idx}`} className="technology">
                                <h3 className="technology-title h4">
                                    {technology.title} 
                                </h3>
                                <div className="technology-main-section text">
                                    {technology.mainContent}
                                </div>
                                <div className="technology-footer">
                                    {
                                        technology.resources.map((resource, _idx) => {
                                            return (
                                                <div key={`book-footer${idx}-${_idx}`}>
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

            <section className="section">
                <h2 className="section-title">
                    Tools 
                </h2>
                {
                    Tools.map((tool, idx) => {
                        return (
                            <article key={`tool_${idx}`} className="tools">
                                <h3 className="tools-title h4">
                                    {tool.title} 
                                </h3>
                                <div className="tools-main-section text">
                                    {tool.mainContent}
                                </div>
                                <div className="technology-footer">
                                    {
                                        tool.resources.map((resource, _idx) => {
                                            return (
                                                <div key={`tool-footer${idx}-${_idx}`}>
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
        </section>
    )
}
