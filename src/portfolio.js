/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sumit Malviya",
  title: "Hi all, I'm Sumit",
  subTitle: emoji(
    "Aspiring Cloud Solutions Architect 🚀 with 3+ years of Full Stack Development experience using MERN, MEAN, Spring Boot & AWS. Passionate about building scalable cloud-based solutions and translating business requirements into technical architectures."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1u1ywUJoDghCbQeu-xD28qbvJ3A_gA5ej/view?usp=drive_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sumitCoderNotFound",
  linkedin: "https://www.linkedin.com/in/sumit-malviya-0b77a51a5/",
  gmail: "malviyasumit7987@gmail.com",
  facebook: "https://www.facebook.com/sumii.malviya",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER TRANSITIONING TO CLOUD SOLUTIONS ARCHITECT",
  skills: [
    emoji(
      "⚡ Build scalable full-stack applications using MERN & MEAN stacks with cloud-native architectures"
    ),
    emoji(
      "⚡ Design and implement REST APIs, microservices, and system architectures"
    ),
    emoji(
      "⚡ Work with AWS services (S3, EC2, Lambda, RDS) and containerization using Docker"
    ),
    emoji(
      "⚡ Translate business requirements into technical solutions for enterprise clients"
    )
  ],

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northumbria University, Newcastle, UK",
      logo: require("./assets/images/northumbriaunilogo2.png"),
      subHeader: "Master of Science in Advanced Computer Science",
      duration: "January 2025 - June 2026",
      desc: "Currently pursuing MSc focused on cloud computing, distributed systems, and software architecture.",
      descBullets: [
        "Relevant Modules: Cloud Computing, Distributed Systems, Software Architecture, Machine Learning",
        "Secured 2nd place in the Dreamcode Hackathon 2025"
      ]
    },
    {
      schoolName: "Government Narmada College, Narmadapuram, India",
      logo: require("./assets/images/nvmunilogo.avif"),
      subHeader: "Bachelor of Computer Science",
      duration: "August 2018 - August 2021",
      desc: "Completed Bachelor's degree with focus on computer science fundamentals and programming.",
      descBullets: [
        "Built foundation in algorithms, data structures, and software development",
        "Transitioned into full-stack software engineering post-graduation"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud & DevOps (AWS S3, EC2, Lambda, RDS, Docker, CI/CD)",
      progressPercentage: "75%"
    },
    {
      Stack: "Frontend (React.js, Angular, HTML, CSS, Bootstrap, Redux)",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend (Node.js, Express.js, Spring Boot, REST APIs)",
      progressPercentage: "85%"
    },
    {
      Stack: "Database (MongoDB, PostgreSQL, MySQL, SQL)",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming (JavaScript, Python, Java, TypeScript)",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Software Developer",
      company: "Astron Micro Technology",
      companylogo: require("./assets/images/astronexplogo.jpg"),
      date: "August 2023 – December 2024",
      desc: "Developed full-stack applications using MERN and MEAN stacks with AWS services (S3, EC2, Lambda) and Docker containerization.",
      descBullets: [
        "Led implementation of RESTful APIs, improving data retrieval efficiency by 30%",
        "Designed authentication and authorization mechanisms for enterprise applications",
        "Collaborated with UI/UX designers; integrated third-party payment gateways",
        "Presented technical solutions and architecture decisions to stakeholders"
      ]
    },
    {
      role: "Software Developer",
      company: "Smartgig Technologies",
      companylogo: require("./assets/images/smartgigexplogo.jpeg"),
      date: "December 2021 – July 2023",
      desc: "Developed and maintained scalable applications using Angular and Node.js, focusing on educational platforms.",
      descBullets: [
        "Built and optimized backend APIs using Node.js for smooth data exchange",
        "Improved backend performance by optimizing database queries and API responses",
        "Integrated third-party APIs and designed MongoDB database schemas",
        "Contributed to Agile sprint planning, stand-ups, and peer code reviews"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle:
    "Enterprise platforms I helped build with impactful features and scalable architecture",
  projects: [
    {
      image: require("./assets/images/lywoexplogo.png"),
      projectName: "LYWO (Recruitment Platform)",
      projectDesc:
        "Built multi-login admin panel with different access levels for admins, recruiters, and candidates. Implemented job listings, candidate profiles, application tracking, and real-time job search with filtering capabilities.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lywo.in/"
        }
      ]
    },
    {
      image: require("./assets/images/traineryoneexplogo.jpeg"),
      projectName: "Trainery One (Learning Platform)",
      projectDesc:
        "Developed Track Coaching, Track Learning, and Track Credentials modules using React.js. Built interactive dashboards with scheduler/calendar functionalities, real-time notifications, and credential expiration alerts.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://trainery.one/"
        }
      ]
    },
    {
      image: require("./assets/images/infinitylearnexplogo.webp"),
      projectName: "Infinity Learn (EdTech Platform)",
      projectDesc:
        "Built Quiz Module with question banks, scoring logic, and progress tracking using Angular/Node.js. Developed My Activity Module where users earned badges and certifications upon course completion.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://infinitylearn.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and recognitions from my professional journey!",

  achievementsCards: [
    {
      title: "Dreamcode Hackathon 2025 – 2nd Place",
      subtitle:
        "Secured 2nd position in the prestigious Dreamcode Hackathon held in the United Kingdom, competing against top developers from various universities.",
      image: require("./assets/images/certificate_Hackathon.png"),
      imageAlt: "Dreamcode Hackathon Logo",
      footerLink: [
        {
          name: "Event Details",
          url: "https://dreamcode.network/en-gbp/"
        }
      ]
    },
    {
      title: "Best Performer & Team Lead Award",
      subtitle:
        "Recognized as the Best Performer and Team Lead for delivering high-impact features and leading the team efficiently at Smartgig Technologies.",
      image: require("./assets/images/teamleadaward.jpg"),
      imageAlt: "Team Lead Award",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Mentorship & Guidance",
  subtitle:
    "With a passion for helping others grow, I actively guide juniors and peers in building their careers in tech.",
  displayMediumBlogs: "false",
  blogs: [
    {
      title: "Career Mentorship",
      description:
        "I regularly mentor junior developers and fresh graduates, helping them with resume reviews, portfolio building, and interview preparation."
    },
    {
      title: "Technical Guidance",
      description:
        "I assist others in understanding complex concepts in web development, cloud architecture, and help them with best practices in React, Angular, Node.js, and AWS."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Looking for AWS Solutions Architect Intern opportunities. Let's discuss how I can contribute to your team!",
  number: "+44 7386 909984",
  email_address: "malviyasumit7987@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set true - you are looking for AWS SA Intern role!

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
