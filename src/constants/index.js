import {
    mobile,
    backend,
    web,
    typescript,
    reactjs,
    tailwind,
    mongodb,
    git,
    figma,
    docker,
    inphb,
    ebenyx,
    carrent,
    presenceTracker,
    hanoi,
    threejs,
    joomla,
    langC,
    wordpress,
    k6,
    nestjs,
    nextjs,
    python,
    java,
    langCPlusPlus,
    springboot,
    flutter,
    postgresql,
    creator

} from "../assets/index.js";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Full stack Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "NextJs",
        icon: nextjs,
    },
    {
        name: "NestJs",
        icon: nestjs,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "C",
        icon: langC,
    },
    {
        name: "C++",
        icon: langCPlusPlus,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },

    {
        name: "Spring Boot",
        icon: springboot,
    },
    {
        name: "Joomla",
        icon: joomla,
    },
    {
        name: "WordPress",
        icon: wordpress,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "K6 - grafana",
        icon: k6,
    },
];

const experiences = [
    {
        title: "C Developer",
        company_name: "Ebenyx technologies",
        icon: ebenyx,
        iconBg: "#E6DEDD",
        date: "July 2022 - August 2022",
        points: [
            "Formatted Data Using C language to send them in Apache-Kafka",
            "Implementing Kafka Consumer and producer",
            "Collaborating with cross-functional teams including designers, product managers, and other developers " +
            "to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "front & Back Developer",
        company_name: "Ebenyx technologies",
        icon: ebenyx,
        iconBg: "#383E56",
        date: "March 2021 - July 2021",
        points: [
            "Developing and maintaining web applications using Angular & Spring boot and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other " +
            "developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Security Network",
        company_name: "INPHB",
        icon: inphb,
        iconBg: "#E6DEDD",
        date: "July 2020 - September 2020",
        points: [
            "setup a captive portal using PfSense and Radius server",
            "Collaborating with cross-functional teams including product managers",
            "Implementing Radius server to connect to external database",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Desktop Developer",
        company_name: "INPHB",
        icon: inphb,
        iconBg: "#383E56",
        date: "July 2019 - August 2019",
        points: [
            "Developing and maintaining desktop Application using Windev",
            "Collaborating with cross-functional teams including designers, product managers, and other " +
            "developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    /*{
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },*/
];

const projects = [
    {
        name: "Je loue",
        description:
            "Web-based platform that allows users to search, book, and manage car, accommodation rentals from various " +
            "providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb cloud",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://gitlab.com/luis-borges/jeloue-app"
    },
    {
        name: "Presence Tracker",
        description:
            "a web application for attendance in a workplace.\n " +
            "Users can mark their attendance using either their phone or their computer. " +
            "However, they can only do so within a clearly defined area.",
        tags: [
            {
                name: "Angular",
                color: "blue-text-gradient",
            },
            {
                name: "SpringBoot",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "postgreSQL",
                color: "green-text-gradient",
            },
            {
                name: "ng-bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: presenceTracker,
        source_code_link: "https://github.com/degrize/ing2-uppro-pointagePresenceApp",
    },
    {
        name: "Hanoi Tower online",
        description:
            "The user can utilize their computer's mouse to move the discs and can alternatively use their finger if the device has a touchscreen.\n" +
            "Ensure the game is accessible in both web and mobile formats.\n" +
            "Incorporate a system to track game history.\n" +
            "Integrate an authentication feature.\n" +
            "Send login credentials via email in case of forgotten passwords.\n" +
            "Notify players via email when another player surpasses their high score.\n" +
            "Enable multiplayer functionality for playing with multiple participants.",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "java-script",
                color: "blue-text-gradient",
            },
            {
                name: "mariadb",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: hanoi,
        source_code_link: "https://github.com/degrize/PHP-Hanoi-ing2",
    },
];

export { services, technologies, experiences, testimonials, projects };