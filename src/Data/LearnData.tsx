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
        title: "Redux/Redux Toolkit",
        mainContent: (
            <>
                I recently made a glorified excel sheet <a href="https://chriskyong22.github.io/LostArkMarketCalculatorWebsite/"> website </a> to calculate the profitability of market transactions in a game. 
                I was running into problems with managing shared states and updating the local indexedDB. 
                I realized my solution was to use a centralized state manager. With Redux, I hope to learn how to manage global states with actions and thunks/Sagas.
            </>
        ),
        resources: [
            <a
                href="https://slash-eyebrow-406.notion.site/Redux-de5ccd6d79924c9f9b14512c490823c5"
                rel="noreferrer noopener"
                target="_blank"
            >
                Redux Notes
            </a>
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
    }, 
    {
        title: "GraphQL",
        mainContent: (
            <>
                GraphQL reminds me of the database schema definitions described in chapter 4 of <i>Designing Data-Intensive Applications</i>. 
                It seems natural to design APIs where we can specify what fields we want instead of a generic template.
            </>
        ),
        resources: [

        ]
    }, 
    {
        title: "Angular + RxJS",
        mainContent: (
            <>
               Learning about Reactive Programming, the incremental DOM, Dependency Injection, and the Angular Framework.
            </>
        ),
        resources: [
            <a
            href="https://slash-eyebrow-406.notion.site/RxJS-68a5cd8127944dd4b36bbfac790b9bd5"
            rel="noreferrer noopener"
            target="_blank"
            >
                RxJS Notes
            </a>
        ]
    }
]

export const Tools: Card[] = [
    {
        title: "Figma",
        mainContent: (
            <>
                While I was trying to learn Inkscape/Illustrator, I found Figma! For me, Figma is an excellent substitute for Inkscape/Illustrator. I like how easy it is to learn and I can share mockups with a click of a link.
            </>
        ),
        resources: [
        ]
    }
]