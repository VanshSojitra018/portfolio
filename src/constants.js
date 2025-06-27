// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Education Section Logo's
import AshadeepschoolLogo from "./assets/education_logo/10thschool.jpg";
import collegeLogo from "./assets/education_logo/college.jpg";
import SahajanandschoolLogo from "./assets/education_logo/12thschool.png";

// Project Section Logo's
import flexit from "./assets/work_logo/Screenshot 2025-06-26 192708.png";
import hotelbooking from "./assets/work_logo/hotel-booking.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: collegeLogo,
    school: "Sahajanand College of IT and Management, Gondal",
    date: "Aug 2023 - Running (In Sem - 5)",
    grade: "Running...",
    desc: "I study my Bachelor's degree in Computer Applications (BCA) from Sahajanand College of IT and Management, Gondal. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 1,
    img: SahajanandschoolLogo,
    school: "Sahajanand Vidhyadham & Commerce Academy, Surat",
    date: "Apr 2022 - March 2023",
    grade: "73.43%",
    desc: "I completed my class 12 education from Sahajanand Vidhyadham & Commerce Academy under the CBSE board.",
    degree: "CBSE(XII)",
  },
  {
    id: 2,
    img: AshadeepschoolLogo,
    school: "Ashadeep High School 3, Surat",
    date: "Apr 2020 - March 2021",
    grade: "77.16%",
    desc: "I completed my class 10 education from Vatsalya Public School, under the CBSE board.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Flex-IT Clone",
    description: "A powerful and user-friendly React.js web designed.",
    image: flexit,
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS"],
    github: "https://github.com/VanshSojitra018/project.git",
    webapp: "https://flex-it-clone.netlify.app/",
  },
  {
    id: 1,
    title: "Hotel-Booking",
    description: "An E-commerce website. Book Your Hotel Using this Website",
    image: hotelbooking,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "Tailwind CSS",
      "JavaScript",
    ],
    github: "https://github.com/VanshSojitra018/hotel-booking.git",
    webapp: "https://csprep.netlify.app/",
  },
];
