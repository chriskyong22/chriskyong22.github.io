import React from "react"

export const About = () => {
    return (
        <div className="about-section">
            <div className="info-section">
                <div className="main-text text">
                    <h2>
                        Hi, I'm Christopher Yong!
                    </h2>
                    <h4>
                        However, some might know me as Pls. 
                    </h4>
                    <p>
                        During my enrollment at Rutgers, I was proactive in the online Rutgers CS community.
                        In the Rutgers CS <a target="_blank" rel="noreferrer noopener" href="https://discord.com/invite/SgTXkjF">discord</a>, I created study guides for popular CS courses and shared them for free. 
                        Over hundreds of students have used my study guides to learn. Check out my study guides <a href="/Rutgers">here</a>!
                    </p>
                </div>
            </div>


            <div className="interest-section">
                <div>
                    <h3>
                        Interests
                    </h3>
                    <div>
                        <h4>
                            Reading
                        </h4>
                        <p className="text">
                            I love the fantasy and sci-fi genre. I am currently reading <a target="_blank" rel="noreferrer noopener" href="https://www.goodreads.com/book/show/9243302-the-machine-stops"> The Machine Stops</a> by E.M. Foster and <a target="_blank" rel="noreferrer noopener" href="https://www.goodreads.com/book/show/41160292-exhalation"> Exhalation Stories</a> by Ted Chiang. 
                            Check out my <a target="_blank" rel="noreferrer noopener" href="https://goodreads.com/chriskyong">goodreads</a> to see my book recommendations or to recommend me a book!
                        </p>
                    </div>
                    <div>
                        <h4>
                            Table tennis
                        </h4>
                        <p className="text">
                            I picked up table tennis in my last semester at Rutgers. 
                            If you are at Rutgers, I recommend checking out the Rutgers table-tennis club. They coached me and brought me into the world of table tennis. 
                            I use the standard European Shakehand grip with CJ8000 rubbers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}