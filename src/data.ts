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
  github: "ayuyydev",
  linkedin: "ada-yu-20979865",
  location: "North Greenwich, London, UK",
  visaForUK: false,
};

const education: Education[] = [
  {
    title: "BSc (Hons) Computing with First Class Honor",
    institute: "The Hong Kong Polytechnic University",
  },
];

const skills: Skills = {
  Frontend: [
    "React.js",
    "Nextjs",
    "Single-Spa",
    "Redux",
    "Material-UI",
    "Bootstrap",
    "JQuery",
  ],
  Backend: [
    "Typescript",
    "Javascript",
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
  "Database/Cache": [
    "PostgreSQL",
    "Redis",
    "SQL Server",
    "MySQL",
    "Mongodb",
    "Oracle",
  ],
  "Cloud Computng": ["AWS", "Docker", "Terraform", "Serverless"],
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
        fromDate: { month: "MAY", year: 2019 },
        toDate: { month: "MAR", year: 2023 },
        mode: WorkMode.FullTime,
        title: "Senior Solutions Developer",
      },
    ],
    companyName: "OTTO INTERNATIONAL LTD",
    companyUrl: "https://ottoint.com/",
    location: "Hong Kong",
    descriptions: `* designed, developed and led a completely new project called **Virtual Product Platform** using NodeJS/Javascript, ReactJs, Redis hosted on AWS ECS and AWS Cloudfront with auto-scaling which serves around 80 global users daily, providing user a platform to review and manage their 3D development assets and products
* designed, developed and led for the replacement project called **Access Control Management System (ACM)** using NodeJS/Javascript, ReactJs, Material-UI, Redis hosted on AWS ECS and AWS Cloudfront with auto-scaling, which helps users manage their permissions and roles in different systems. It serves around 200-300 internal users daily
* designed, developed and led for the replacement project called **Data Maintenance System (DM)** using NodeJS/Javascript, ReactJs, Material-UI, Redis hosted on AWS ECS and AWS Cloudfront with auto-scaling which serves around 50 internal users daily. It is used by internal users to maintain data dynamically used in 3-4 of our existing systems
* designed, developed and led a completely new project called **Idea Collection** using Java, SpringBoot, AWS API Gateway, AWS ECS, ReactJs serving around 10 users daily, which allows users to review, comment and manage their ideas for product development in the platform
* suggested, designed and developed a **Customer Help Support System** using NodeJS/Javascript, ReactJs which allows internal user to dynamically update the format of the help forms which facilitates collecting user feedback in a formatted way and creating ticket in our Jira System automatically, serving more than 50 users daily
* designed and developed **Email sending microservice** using NodeJS / Typescript, AWS Lambda, AWS SQS and AWS SES which serves more than 300 users daily for sending emails with large attachments (more than 100MB)
* designed and developed **Thumbnail generation microservice** using NodeJS, AWS Lambda with AWS S3 which handles more than 150 images daily
* designed and developed **Browzwear plugins** using Python and ReactJs which could integrate with the Virtual Product Platform, serving more than 30 customers
* maintained and developed features on **Product Life Management System** using Redis, Grails/Groovy, GSP and Bootstrap and jQuery, which serves in total 500 users globally, allowing users to manage their product development cycle in the platform including sourcing the materials and how the products are shipped
* designed and developed POCs using Single-SPA framework to facilitate integration of the Product Life Management with 2-3 customer portals
* setup CI/CD for deployment on AWS cloud with terraform, Jenkins and Github action for microservices, Node.js backend and ReactJs frontend
* helped on transitioning 2-3 existing old projects to AWS Cloud using Docker and Terraform
* analysed requirements from 2-3 Product Managers, written guidelines and distributed tasks to 3-4 colleagues, and follow up with their career development
* performed regular code review and provide suggestions/improvements to 8-10 colleagues
* managed and maintained the Github repositories including writing documentations, assigning permissions for the whole team (around 20 developers), and assigning the corresponding code reviewers to the projects`,
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
    descriptions: `* analysed, written guidelines and distributed tasks to 2-3 colleagues, and follow up with their progress
* implemented automated build and deploy script using batch script for deploying monolithic Java application which is used in production
* developed and maintained **Hospital Management System** and **Clinic Management System** in Grails/Groovy, SQL, HTML, CSS, Javascript, Ajax and GSP for 5-10 clinic and hospitals which has around 200 users on each instance daily, allowing the hospital/clinic to manage their bookings and patient health records online
* designed and written schedule jobs for batch tasks including sending notifications to users with email and SMS, and also report generation for 5-10 clinics and hospitals
* designed, documented and execute test cases manually for each project
* implemented data migration and check script for each deployment
* written requirement specification, design specification and work progress reports
* searched, filtered and exported log records, analysed and written reports concerning the log records
* communicated with customers to solve customer enquiries`,
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
    descriptions: `* developed and maintained **Assessment Management System** in Java, HTML, CSS, Javascript, JSP, jquery, Ajax and XSL which helps users manage their assessments for their students in more than 50 educational  institutions globally
* communicated with 10-12 customers to solve customer enquiries in the Jira system which provide users first level system support and solve their issues as promptly as possible`,
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
    descriptions: `* assisted in teaching 100 students in programming in C++ and invigilated in mid-term test involving 100 students`,
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
    descriptions: `* contacted 300 parents concerning information about 6 summer camps related to robotic programming
* wrote notes and sample programs for 6 summer camps using Robolab and i*CATch toolbox software
* arranged schedule of 25 student helpers and summarised survey data of 13 summer camps`,
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
    descriptions: `* prepared notes and taught 40 elderlies for the 5-day advanced computer class`,
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
    descriptions: `* contacted with 7-8 customers as regular follow up
* designed logos and websites, uploaded and modified websites according to the needs of more than 10 customers`,
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
