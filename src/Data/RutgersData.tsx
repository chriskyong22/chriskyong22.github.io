interface Course {
    title: string;
    link: string;
    professor: string;
    description: JSX.Element;
    resources: JSX.Element[];
}

export const Courses: Course[] = [
    {
        title: "Computer Architecture (CS211)",
        link: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-211-computer-architecture",
        professor: "Santosh Nagarakatte",
        description: (
            <>
            </>
        ),
        resources: [
            <a href="https://docs.google.com/document/d/1zx9_UdZKedQ9rdo71nnmB8ctlnWbsB1d60PjuuaERWk/edit#heading=h.y11un4hmkuqh"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Midterm Study Guide 
            </a>,
            <a 
                href="https://docs.google.com/document/d/1a3A6NsGFMXi1ONTwKFcnIGWgPNyqLzzTYWaxyRajA4Y/edit#heading=h.jxo2e94afsh0"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Final Study Guide
            </a>
        ]
    },
    {
        title: "Systems Programming (CS214)",
        link: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-214-systems-programming",
        professor: "John-Austen Francisco",
        description: (
            <>
            </>
        ),
        resources: [
            <a 
                href="https://docs.google.com/document/d/1c1VyZsCuHALbyyewCsDPrxtBTjVmoBLLwbqAfcx7q6w/edit" 
                rel="noreferrer noopener" 
                target="_blank"
            >
                
                Midterm Study Guide 
            </a>,
            <a 
                href="https://docs.google.com/document/d/1VYAVXn0qyS60ygTDA6NZRLN_KR0nvrNXn8GAq4HVe8A/edit#"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Final Study Guide
            </a>
        ]
    }, 
    {
        title: "Principles Of Programming Languages (CS314)",
        link: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-314-principles-of-programming-languages",
        professor: "Zheng Zhang",
        description: (
            <>
            </>
        ), 
        resources: [
            <a 
                href="https://docs.google.com/document/d/1amzEzb6NhVo6OYYDQWc7UM8OSPh9wNDZu5cGOiPiwZM/edit"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Midterm Study Guide 
            </a>
        ]
    },
    {
        title: "Principles Of Information and Data Management (CS336)",
        link: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-336-principles-of-information-and-data-management",
        professor: "Antonio Miranda Garcia",
        description: (
            <>
            </>
        ),
        resources: [
            <a 
                href="https://docs.google.com/document/d/15jZZL6oaAUu2KPy96Yy8rQcWH7-dBjVC_6gcsMGTo7s/edit"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Midterm 1 Study Guide 
            </a>,
            <a 
                href="https://docs.google.com/document/d/10W3Cp3HRHadoq7Dpvd447LjxLnq6EWadKv7KjyHK4c0/edit"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Midterm 2 Study Guide 
            </a>,
            <a 
                href="https://docs.google.com/document/d/123d4UfYBvDn_hvClkShmGfeCPV9n_5u7D5wDUWzPIBI/edit"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Final Study Guide
            </a>
        ]
    },
    {
        title: "Internet Technology (CS352)",
        link: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-352-internet-technology",
        professor: "Badri Nath",
        description: (
            <>
            </>
        ),
        resources: [
            <a 
                href="https://docs.google.com/document/d/1zupHNAi5O-3e022Wh10qaz2Fcvo4OH17wUP06nx6W0o/edit"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Midterm 1 Study Guide 
            </a>,
            <a 
                href="https://docs.google.com/document/d/1k8h3Co5PUOXj6UHue0ob_ln7D6jEt3SA3emiXAuofNI/edit"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Midterm 2 Study Guide 
            </a>,
            <a 
                href="https://docs.google.com/document/d/1gUBocLHpy_Vfifs-LnJtgsm4OTq74jLmfZTqJdaFEq0/edit"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Final Study Guide
            </a>,
            <a 
                href="https://slash-eyebrow-406.notion.site/IT-352-Notes-9577922c49e146cabe52257cfb6a6a6f"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Notes 
            </a>
        ]
    }, 
    {
        title: "Operating Systems (CS416)",
        link: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-416-operating-systems-design",
        professor: "Sudarsun Kannan",
        description: (
            <>
            </>
        ), 
        resources: [
            <a 
                href="https://docs.google.com/document/d/1gUBocLHpy_Vfifs-LnJtgsm4OTq74jLmfZTqJdaFEq0/edit"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Midterm Study Guide 
            </a>,
            <a 
                href="https://docs.google.com/document/d/1mPNQMa0xcudKMAXfesOin-WyB9zewKOHt6S-bbMJPus/edit"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Final Study Guide
            </a>,
            <a 
                href="https://slash-eyebrow-406.notion.site/OS-416-Notes-4626bca9b3a4427295ab88c0aa6e6e10"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Notes
            </a>
        ]
    }, 
    {
        title: "Distributed Systems (CS417)",
        link: "https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-417-distributed-systems-concepts-and-design",
        professor: "Paul Krzyzanowski",
        description: (
            <>
            </>
        ), 
        resources: [
            <a 
                href="https://slash-eyebrow-406.notion.site/Distributed-417-Notes-aa8836db469d452f858193456575f494"
                rel="noreferrer noopener" 
                target="_blank"
            >
                Notes 
            </a>
        ]
    },

]