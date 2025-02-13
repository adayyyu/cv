import { JobExprience, WorkMode } from "./types/jobExperience.type";
import { Language, LanguageLevel } from "./types/language.type";
import { Award, AwardIcon } from "./types/award.type";
import { BasicInfo } from "./types/basicInfo.type";
import { Education } from "./types/education.type";
import { Certificate } from "./types/certificate.type";
import { Skills } from "./types/skill.type";

const basicInfo: BasicInfo = {
  name: "Ada, YU",
  email: "adayyy.hk@gmail.com",
  github: "adayyyu",
  linkedin: "ada-yu-20979865",
  location: "London, UK",
  visaForUK: false,
};

const education: Education[] = [
  {
    title: "BSc (Hons) Computing with First Class Honor",
    institute: "The Hong Kong Polytechnic University",
  },
];

const skills: Skills = {
  Backend: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Expressjs",
    "Socket.io",
    "GraphQL",
    "Java",
    "Spring MVC",
    "Spring Boot",
    "Grails/Groovy",
    "Python",
  ],
  Frontend: [
    "React.js",
    "Nextjs",
    "Single-Spa",
    "Redux",
    "Material-UI",
    "Bootstrap",
    "JQuery",
  ],
  "Cloud Computng": ["AWS", "Docker", "Terraform", "Serverless", "AWS CDK"],
  "Database/Cache": [
    "PostgreSQL",
    "Redis",
    "SQL Server",
    "MySQL",
    "Mongodb",
    "Oracle",
  ],
  Testing: ["Jest", "Junit", "Cypress", "Supertest", "Mocha", "Chai"],
  Others: [
    "Micro-services",
    "Micro-frontend",
    "CI/CD",
    "Github Action",
    "SonarQube",
  ],
};

const certification: Certificate[] = [
  {
    title: "AWS Certified Developer – Associate",
    year: 2022,
    certificateUrl:
      "https://www.credly.com/badges/1969d90a-3ac4-4fa5-a069-783f0101e40f/public_url",
    institute: "Amazon Web Services Training and Certification",
    instituteUrl: "https://aws.amazon.com/certification/",
  },
];

const awards: Award[] = [
  {
    description:
      "Most Innovative EPC/RFID Application (Silver Award) of Hong Kong U-21 RFID Awards 2011",
    icon: AwardIcon.lightbulb,
  },
  {
    description:
      "Silver Award of the Community Outreach Merit Program 2010-2011",
    icon: AwardIcon.trophy,
  },
  {
    description:
      "Computing Alumni Association Scholarship for Outstanding Service Learning 2010",
    icon: AwardIcon.school,
  },
  {
    description:
      "Donald Knuth Subject Scholarship for Principles of Programming 2009/10",
    icon: AwardIcon.school,
  },
];

const languages: Language[] = [
  {
    name: "Cantonese",
    level: LanguageLevel.MotherTongue,
  },
  {
    name: "English",
    level: LanguageLevel.Fluent,
  },
  {
    name: "Mandarin",
    level: LanguageLevel.Intermediate,
  },
];

const myJobExp: JobExprience[] = [
  {
    workDuration: [
      {
        fromDate: { month: "AUG", year: 2023 },
        mode: WorkMode.FullTime,
        title: "Backend Developer",
      },
    ],
    companyName: "INTENT.LY",
    companyUrl: "https://intent.ly/",
    location: "London, United Kingdom",
    descriptions: `* **Led and Enhanced high-traffic backend services** (1,000+ users/min) by migrating from JavaScript to TypeScript using Serverless framework and AWS Lambda, improving performance by 90% and reducing costs.
* **Consolidated and migrated legacy projects** from JavaScript to TypeScript with Webpack, streamlining bundling and adding Jest unit tests to ensure robust code integrity.
* **Built backend infrastructure** with Terraform and automated CI/CD pipelines using GitHub Actions, accelerating deployment times by 80%.
* **Improved React.js frontend applications** by enhancing user features and contributing to faster UI load times.
* **Monitored and optimised AWS Lambda performance** through regular review and logging, proactively identifying and resolving potential issues.
* **Mentored a team of 5-6 developers**, optimising code quality and accelerating deployment timelines, resulting in 80% fewer bugs, cleaner code and faster feature releases.
`,
  },
  {
    workDuration: [
      {
        fromDate: { month: "MAY", year: 2019 },
        toDate: { month: "MAR", year: 2023 },
        mode: WorkMode.FullTime,
        title: "Senior Solutions Developer",
      },
      {
        fromDate: { month: "APR", year: 2023 },
        toDate: { month: "MAY", year: 2023 },
        mode: WorkMode.PartTime,
        title: "Senior Solutions Developer",
      },
    ],
    companyName: "OTTO INTERNATIONAL LTD",
    companyUrl: "https://ottoint.com/",
    location: "Hong Kong",
    descriptions: `* **Design and development on multiple projects** (NodeJS, Java, Spring Boot, Grails/Groovy, ReactJS, Bootstrap, jQuery, Material-UI, Redis, AWS ECS, AWS Lambda, S3, Cloudfront, SQS, SES, AWS API Gateway) which serves over 500+ users.
* **Implemented CI/CD pipelines** on AWS Cloud for Node.js and React.js projects using Terraform, Jenkins, and GitHub Actions, reducing deployment times by 80%.
* **Transitioned legacy systems** to AWS Cloud with Docker and Terraform, enhancing scalability and cloud adoption.
* **Managed GitHub repositories** for a 20-member team, overseeing documentation, permissions, and code review assignments, ensuring smooth collaboration.
* **Mentored 8-10 developers** through regular code reviews and improvement suggestions, promoting code quality and team productivity.
* **Guided team members’ career development** through ongoing mentorship, performance feedback, and skill-building initiatives, fostering a supportive and growth-oriented environment.
* **Collaborated closely with Product Managers** to analyse requirements, translate them into actionable development tasks, and distribute these to a team of 3-4 developers, ensuring alignment with project goals.
`,
  },
  {
    workDuration: [
      {
        fromDate: { month: "JUN", year: 2013 },
        toDate: { month: "MAY", year: 2019 },
        mode: WorkMode.FullTime,
        title: "Senior Software Engineer",
      },
    ],
    companyName: "MOBIGATOR TECHNOLOGY GROUP LTD",
    companyUrl: "https://www.mobigator.com/",
    location: "Hong Kong",
    descriptions: `* **Led task distribution and progress tracking** for a team of 2-3 colleagues, developing guidelines to support consistent project delivery and team alignment.
* **Automated build and deployment processes** for a production monolithic Java application using batch scripts, reducing manual intervention and enhancing deployment reliability.
* **Developed and maintained** core Hospital and Clinic Management Systems (Grails/Groovy, SQL, HTML, CSS, JavaScript, Ajax, GSP) used by 5-10 clinics and hospitals with 200 daily users per instance, facilitating seamless online booking and patient health record management.
* **Created and scheduled** batch jobs to automate notifications via email and SMS, and to generate reports, ensuring timely communication and reporting for 5-10 healthcare institutions.
* **Documented and executed manual test cases** for each project, ensuring high quality and adherence to requirements.
* **Developed data migration scripts and validation tools** for each deployment, ensuring data accuracy during system updates.
* **Produced comprehensive documentation** including requirement specifications, design specifications, and work progress reports, supporting clear project alignment and tracking.
* **Analysed log data** by searching, filtering, and generating reports, enabling improved troubleshooting and data-driven decision-making.
* **Provided first-line support** to customers, resolving inquiries and issues to ensure satisfaction and continuity of service.
`,
  },
  {
    workDuration: [
      {
        fromDate: { month: "SEP", year: 2012 },
        toDate: { month: "OCT", year: 2013 },
        mode: WorkMode.PartTime,
        title: "Java Developer",
      },
      {
        fromDate: { month: "AUG", year: 2011 },
        toDate: { month: "AUG", year: 2011 },
        mode: WorkMode.FullTime,
        title: "Java Developer",
      },
    ],
    companyName: "INSPERA AS",
    companyUrl: "https://www.inspera.com/",
    location: "Norway",
    descriptions: `* **Developed and maintained** a global Assessment Management System (Java, HTML, CSS, JavaScript, JSP, jQuery, Ajax, XSL) used by 50+ educational institutions, enabling efficient assessment management for thousands of students worldwide.
* **Enhanced user experience** by optimising front-end and back-end components, ensuring smooth operation and scalability for high-volume educational use.
* **Provided first-line support** to 10-12 institutional clients via the Jira system, promptly resolving inquiries and technical issues to maintain high customer satisfaction and system reliability.
`,
  },
  {
    workDuration: [
      {
        fromDate: { month: "JAN", year: 2011 },
        toDate: { month: "MAR", year: 2011 },
        mode: WorkMode.PartTime,
        title: "Student helper",
      },
      {
        fromDate: { month: "SEP", year: 2010 },
        toDate: { month: "NOV", year: 2010 },
        mode: WorkMode.PartTime,
        title: "Student helper",
      },
    ],
    companyName:
      "THE HONG KONG POLYTECHNIC UNIVERSITY, DEPT OF COMPUTING, ENG236 COMPUTER PROGRAMMING",
    location: "Hong Kong",
    descriptions: `* Assisted in teaching 100 students in programming in C++ and invigilated in mid-term test involving 100 students`,
  },
  {
    workDuration: [
      {
        fromDate: { month: "JUN", year: 2010 },
        toDate: { month: "AUG", year: 2010 },
        mode: WorkMode.FullTime,
        title: "Student helper",
      },
    ],
    companyName:
      "THE HONG KONG POLYTECHNIC UNIVERSITY, DEPT OF COMPUTING, COMP - I3LEARN GROUP",
    location: "Hong Kong",
    descriptions: `* Contacted 300 parents concerning information about 6 summer camps related to robotic programming
* Wrote notes and sample programs for 6 summer camps using Robolab and i*CATch toolbox software
* Arranged schedule of 25 student helpers and summarised survey data of 13 summer camps`,
  },
  {
    workDuration: [
      {
        fromDate: { month: "JUN", year: 2010 },
        toDate: { month: "JUN", year: 2010 },
        mode: WorkMode.PartTime,
        title: "Student helper",
      },
    ],
    companyName:
      "THE HONG KONG POLYTECHNIC UNIVERSITY, FACULTY OF HEALTH AND SOCIAL SCIENCES, ELDERLY MINI-U PROGRAMME 2010",
    location: "Hong Kong",
    descriptions: `* Prepared notes and taught 40 elderlies for the 5-day advanced computer class`,
  },
  {
    workDuration: [
      {
        fromDate: { month: "JUL", year: 2007 },
        toDate: { month: "SEP", year: 2007 },
        mode: WorkMode.PartTime,
        title: "Website designer",
      },
    ],
    companyName: "WEB-DESIGNER. LTD",
    location: "Hong Kong",
    descriptions: `* **Maintained regular communication** with 7-8 clients, providing updates and gathering feedback to ensure satisfaction and alignment with project goals.
* **Designed and customised** logos and website layouts for 10+ clients, adapting each design to meet specific branding and functional requirements.
* **Uploaded and modified website content** per client specifications, ensuring timely updates and consistent visual quality across projects.`,
  },
];

export {
  basicInfo,
  education,
  skills,
  certification,
  awards,
  languages,
  myJobExp,
};
