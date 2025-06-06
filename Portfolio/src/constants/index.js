export const myProjects = [
  {
    id: 1,
    title: "MindMap AI",
    description:
      "A brain tumor detection system",
    subDescription: [
      "Developed a brain tumor detection system using Python, Keras, Flask, and MongoDB, which identifies tumors from brain CT scans.",
      "Implemented a Convolutional Neural Network (CNN) for image recognition, achieving a 98% accuracy rate on the validation set, trained with Kaggle’s brain tumor dataset.",
      "Integrated a ChatBot that performs symptom analysis and facilitates scheduling appointments with healthcare professionals and used Flask for the backend to connect the web interface.",
    ],
    href: ":https://github.com/khushi71103/BrainTumorDetection",
    logo: "",
    image: "/assets/projects/brain.jpg",
    tags: [
      {
        id: 1,
        name: "Html",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Attendify Link",
    description:
      "Student Attendance Tracker",
    subDescription: [
      "Developed a Student Attendance Tracker using Next.js, React.js, and TypeScript, enabling efficient monitoring and management of student attendance records through a modern web application.",
      "Implemented secure user authentication via Kinde to ensure that only authorized personnel can access sensitive ta, while utilizingDrizzle ORM with PostgreSQL for robust database management and efficient retrieval of attendance information.",
      "Integrated AG Grid for dynamic table views with pagination features, enhancing user experience, and employed Recharts for visual data representation, making it easier to analyze attendance trends over time.",
    ],
    href: "https://github.com/khushi71103/Student-Tracker",
    logo: "",
    image: "/assets/projects/student.jpg",
    tags: [
      {
        id: 1,
        name: "NextJs",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "PostgreSql",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "WanderMate",
    description:
      "Travel Companion application",
    subDescription: [
      "Developed a Travel Companion application using React.js to provide users with an interactive platform for planning and sharing travel experiences, ensuring a seamless user interface.",
      "Implemented JWT for secure user authentication, enabling safe access to personalized travel features, while utilizing a GraphQL API for efficient data retrieval and management, enhancing the app’s performance.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Utilized MongoDB and Mongoose for robust database handling, complemented by React Map GL and React Mapbox for dynamic map interactions and geolocation features.",
    ],
    href: "https://github.com/khushi71103/MERN-Travel_Companion",
    logo: "",
    image: "/assets/projects/travel.webp",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Face Recognition",
    description:
      "Face recognition attendance application",
    subDescription: [
      "Developed a Facial recogination attendance System for College Department.",
      "Currently testing for its applicability for department use.",
      "Bulit using Python, tkinter for User Interface, Haar Cascade classifier.",
      
    ],
    href: "https://github.com/khushi71103/faceRecoginition",
    logo: "",
    image: "https://empmonitor.com/blog/wp-content/uploads/2024/11/What-Is-a-Facial-Recognition-Attendance-System-1024x576.webp",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Giphy App",
    description:
      "React Native Giphy App",
    subDescription: [
      "Developed a gif app using React native expo.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Used the giphy store to fetch the api to get all gifs",
      
    ],
    href: "https://github.com/khushi71103/giphyapp",
    logo: "",
    image: "/assets/projects/giphy.png",
    tags: [
      {
        id: 1,
        name: "React native",
        path: "/assets/logos/reactNative.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/khushi-chhetri-1b484024b/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/khushi71103",
    icon: "/assets/logos/github.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer Intern",
    job: "Suggaa - riding app",
    date: "2024-2025",
    contents: [
      "Acheived 20% growth in frontend rendering performance for mobile applications using skills in React-Native,factoring, and TypeScript.",
      "Led the refactoring of existing component codes, making them more generic and maintainable, resulting in a 30% improvement in code efficiency.",
      "Developing and maintaining web applications and mobile applications using ReactJs, ReactNative, and NextJs.",
      ],
  },
  {
    title: "Front-End Developer",
    job: "Krana Club - FMCG",
    date: "2025-Present",
    contents: [
      "Built the customer support system for app using webviews",
      "Enhanced performance of app by 40%",
      "Improvised and added features in internal too for product managment",
      "Added features and enhanced B2B dashboard",
      ],
  },
  // {
  //   title: "Freelance Developer",
  //   job: "Self-Employed",
  //   date: "2025-Present",
  //   contents: [
  //     "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
  //     "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
  //   ],
  // },
];
export const reviews = [
  {
    name: "HackerRank",
    username: "@jack",
    body: " Secured a 5-star badge for problem solving on HackerRank",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYlCFrIs7OelYi4FFlx23TEc4Z_evhDZkoQ&s",
  },
  {
    name: "Hackathon",
    username: "@jill",
    body: "Secured 1st position in KALAM-92 Hackathon organised by ACS College",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aLmOH2ZiJ2WXlbCB1bsUV9Czr9t49e0tL-r-sq3TypEOg1mcSGwv4ClScWwGCFAjd5s&usqp=CAU",
  },
  {
    name: "Hackathon",
    username: "@john",
    body: " TECHNOVERSE by Cognizant(Finalist:offered an internship)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuugNFaRZZVZ5OzuOezHzDZV3uG3TKNpsbf8e6o63ddswJcY66M6Iey_p0F3QI_t46TJo&usqp=CAU",
  },
  {
    name: "Problem Solving",
    username: "@alice",
    body: "Solved over 250+ DSA questions on various platforms Leetcode, GFG, CodingNinjas",
    img: "https://png.pngtree.com/png-vector/20210929/ourmid/pngtree-d-realistic-emoji-with-glasses-smileys-emoticons-happy-face-chat-icon-png-image_3961881.png",
  },
  
];
