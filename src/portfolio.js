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
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web with JavaScript / Reactjs / Angular/ Nodejs / and some other cool libraries and frameworks."
  ),
  resumeLink: "https://drive.google.com/uc?export=download&id=1S29QORXUInNuQzcIGw6c8HioSMF279eR",
    // https://drive.google.com/file/d/1S29QORXUInNuQzcIGw6c8HioSMF279eR/view?usp=drive_link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sumitDev12",
  linkedin: "https://www.linkedin.com/in/sumit-malviya-0b77a51a5/",
  gmail: "malviyasumit2000@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/sumii.malviya",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
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
      duration: "January 2025 - July 2026",
      desc: "Currently pursuing a Master's degree focused on advanced topics in computing and software systems.",
      descBullets: [
        "Modules include Wireless Networks, Machine Learning, and Cybersecurity",
        "Secured 2nd place in the Dreamcode Hackathon 2025"
      ]
    },
    {
      schoolName: "Government Narmada College, Narmadapuram, India",
      logo: require("./assets/images/nvmunilogo.avif"), // You can add this logo if available
      subHeader: "Bachelor of Science in Industrial Chemistry",
      duration: "2018 - 2021",
      desc: "Completed B.Sc. with core studies in chemistry and industrial processes, with a growing interest in programming and software.",
      descBullets: [
        "Participated in multiple college-level tech and science events",
        "Transitioned into software engineering post-graduation"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (React, Angular, HTML, CSS, JS, Bootstrap, Ant Design)",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend (Node.js, Spring Boot, FastAPI)",
      progressPercentage: "80%"
    },
    {
      Stack: "Database (MongoDB, PostgreSQL, MySQL, SQL)",
      progressPercentage: "75%"
    },
    {
      Stack: "Cloud & DevOps (AWS, Git, CI/CD)",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming (Java, JavaScript, Python)",
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
      role: "Software Developer (Angular + Node.js)",
      company: "Smartgig",
      companylogo: require("./assets/images/smartgigexplogo.jpeg"),
      date: "December 2021 – July 2023",
      desc: "Worked on the Infinity Learn project using Angular for frontend development and Node.js for backend services, focusing on scalable educational platforms.",
      descBullets: [
        "Developed reusable Angular components and implemented role-based UI features",
        "Built and integrated RESTful Node.js APIs for user management and learning modules",
        "Improved UI/UX for student engagement workflows within the learning system"
      ]
    },
    {
      role: "Software Developer (React.js)",
      company: "Astron Micro Technology",
      companylogo: require("./assets/images/astronexplogo.jpg"),
      date: "July 2023 – December 2024",
      desc: "Worked on enterprise-level education platforms including Track Learning, Track Coaching, and Track Credential using React, Redux, and Ant Design.",
      descBullets: [
        "Built modular React components for managing sessions, trainers, and credentials",
        "Implemented scheduler UI and calendar-based interactions with event modals",
        "Optimized credential tracking and filtering logic using Redux and API integration"
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
  title: "Big Projects",
  subtitle: "Some platforms I helped build and scale with impactful features and solid architecture",
  projects: [
    {
      image: require("./assets/images/infinitylearnexplogo.webp"), // Replace with actual logo path
      projectName: "Infinity Learn",
      projectDesc: "An advanced e-learning platform where I contributed to frontend (Angular) and backend (Node.js) development to deliver seamless user experience and scalable features for students and educators.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://infinitylearn.com/"
        }
      ]
    },
    {
      image: require("./assets/images/traineryoneexplogo.jpeg"), // Replace with actual logo path
      projectName: "Trainery One",
      projectDesc: "Worked on Track Learning, Track Coaching, and Track Credential modules – internal tools for managing coaching sessions, tracking credentials, and scheduling events using React, Redux, and Ant Design.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://trainery.one/" // Replace with actual company/project URL if available
        }
      ]
    },
    {
      image: require("./assets/images/lywoexplogo.png"), // Update with actual logo path
      projectName: "Lywo (Love Your Work)",
      projectDesc: "A recruitment and HR platform transforming how companies hire and manage talent. As an Angular Developer and Team Lead, I led the development of dynamic front-end modules, built scalable and responsive UI components, and collaborated with cross-functional teams to deliver modern recruitment features that align with evolving industry needs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lywo.in/"
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Dreamcode Hackathon – 2nd Place",
      subtitle:
        "Secured 2nd position in the prestigious Dreamcode Hackathon held in the United Kingdom, competing against top developers from various universities.",
      image: require("./assets/images/certificate_Hackathon.png"), // Replace with actual hackathon logo if available
      imageAlt: "Dreamcode Hackathon Logo",
      footerLink: [
        {
          name: "Event Details",
          url: "https://dreamcode.network/en-gbp/" // Replace with real URL if available
        }
      ]
    },
    {
      title: "Best Performer & Team Lead",
      subtitle:
        "Recognized as the Best Performer and Team Lead for delivering high-impact features and leading the team efficiently at Smartgig.",
      image: require("./assets/images/teamleadaward.jpg"), // Replace with actual award icon if available
      imageAlt: "Team Lead Award",
      footerLink: []
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Mentorship & Guidance",
  subtitle:
    "With a passion for helping others grow, I actively guide my juniors and peers in building their careers in tech.",
  displayMediumBlogs: "false", // No need to fetch Medium blogs
  blogs: [
    {
      title: "Career Mentorship",
      description:
        "I regularly mentor junior developers and fresh graduates, helping them with resume reviews, portfolio building, and interview preparation."
    },
    {
      title: "Technical Guidance",
      description:
        "I assist others in understanding complex concepts in web development, help debug code, and guide them on best practices in React, Angular, Node.js, and Spring Boot."
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

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+44 7368909984",
  email_address: "malviyasumit2000@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
