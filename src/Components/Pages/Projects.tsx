import react from "react"

export const Projects = () => {
    const GITHUB_BASE_URL = "https://github.com/chriskyong22/"
    return (
        <div className="projects-section">
            <div className="project">
                <h2 className="project-title">
                    <a href={`${GITHUB_BASE_URL}FuseFileSystem`} rel="noreferrer noopener" target="_blank">
                        Fuse File System
                    </a>
                </h2>
            </div>

            <div className="project">
                <h2 className="project-title">
                    <a href={`${GITHUB_BASE_URL}VersionControl`} rel="noreferrer noopener" target="_blank">
                        Centralized Version Control
                    </a>
                </h2>
            </div>

            <div className="project">
                <h2 className="project-title">
                    <a href={`${GITHUB_BASE_URL}SimpleMultiplayerGame`} rel="noreferrer noopener" target="_blank"> 
                        Multiplayer Game
                    </a>
                </h2>
            </div>
            
            <div className="project">
                <h2 className="project-title">
                    <a href={`${GITHUB_BASE_URL}User-level-threads`} rel="noreferrer noopener" target="_blank">
                        User-level threading Library
                    </a>
                </h2>
            </div>

            <div className="project">
                <h2 className="project-title">
                    <a href={`${GITHUB_BASE_URL}TrainReservation`} rel="noreferrer noopener" target="_blank">
                        Train Reservation Website
                    </a>
                </h2>
            </div>

            <div className="project">
                <h2 className="project-title">
                    <a href={`${GITHUB_BASE_URL}LoginSessionTest`} rel="noreferrer noopener" target="_blank">
                        Session-storage Login Frontend/Backend
                    </a>
                </h2>
            </div>

            <div className="project">
                <h2 className="project-title">
                    <a href={`${GITHUB_BASE_URL}A-star-map-generator-solver`} rel="noreferrer noopener" target="_blank">
                        A* map generator and solver
                    </a>
                </h2>
            </div>

            <div className="project">
                <h2 className="project-title">
                    <a href={`${GITHUB_BASE_URL}WumpusWorld-MiniMax-Search`} rel="noreferrer noopener" target="_blank">
                        Mini-max search with alpha-beta pruning
                    </a>
                </h2>
            </div>

            <div className="project">
                <h2 className="project-title">
                    <a href={`${GITHUB_BASE_URL}VirtualMemoryOS`} rel="noreferrer noopener" target="_blank">
                        Virtual Page Tables
                    </a>
                </h2>
            </div>

            <div className="project">
                <h2 className="project-title">
                    <a href={`${GITHUB_BASE_URL}SimpleYoutubeSelenium`} rel="noreferrer noopener" target="_blank">
                        Spotify to Youtube Converter 
                    </a>
                </h2>
            </div>

            <div className="project">
                <h2 className="project-title">
                    <a href={`${GITHUB_BASE_URL}RUCafeApp`} rel="noreferrer noopener" target="_blank">
                        Cafe Android Application
                    </a>
                </h2>
            </div>

            <h2>
                Unfinished/Abandoned Projects
            </h2>

            <div className="project">
                <h2 className="project-title">
                    <a href={`${GITHUB_BASE_URL}LostArkMarketCalculatorWebsite`} rel="noreferrer noopener" target="_blank">
                        Market Calculator Website
                    </a>
                </h2>
            </div>

        </div>
    )
}