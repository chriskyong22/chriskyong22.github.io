interface Card {
    title: string;
    titleLink?: string;
    mainContent: JSX.Element;
    resources: JSX.Element[];
}


export const Books: Card[] = [
    {
        title: "Designing Data-Intensive Applications",
        titleLink: "https://www.goodreads.com/book/show/23463279-designing-data-intensive-applications",
        mainContent: (
            <>
                In my last semester, I took a distributed systems course that was an excellent introduction to the world of distributed design. 
                With this book, I hope to dive deeper and gain a better understanding of the technology stacks in building big data applications. 
            </>
        ),
        resources: [
            <a 
                href="https://slash-eyebrow-406.notion.site/Design-Data-71557a7a5fba4a81ac76475cd38f5384" 
                rel="noreferrer noopener" 
                target="_blank"
            >
                Chapter Notes
            </a>
        ]
    },
]

export const Technologies: Card[] = [
    {
        title: "Redux",
        mainContent: (
            <>
                I recently made a glorified excel sheet <a href="https://chriskyong22.github.io/LostArkMarketCalculatorWebsite/"> website </a> to calculate the profitability of market transactions in a game. 
                I was running into problems with managing shared states and updating the local indexedDB. 
                I realized my solution was to use a centralized state manager. With Redux, I hope to learn how to manage global states with actions and thunks.
            </>
        ),
        resources: [
        ]
    }, 
    {
        title: "Typescript Generics",
        mainContent: (
            <>
                Currently, I find it difficult deciphering verbose Typescript error messages. I hope by learning Typescript generics, I gain a deeper understanding of how Typescript works and the error messages it provides.
            </>
        ), 
        resources: [
        ]
    }, 
    {
        title: "Web Content Accessibility Guidelines (WCAG)",
        mainContent: (
            <>
                Learning about WCAG will allow me to build more inclusive websites.
            </>
        ), 
        resources: [
        ]
    }
]

export const Tools: Card[] = [
    {
        title: "InkScape/Illustrator",
        mainContent: (
            <>
                SVGs are the future for responsive web icons. 
                I want to create tailored SVGs for personal use for responsive web design.  
            </>
        ),
        resources: [
        ]
    }
]