const GENERIC_DESCRIPTION = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis';

const EMPLOYMENT_HISTORY = [
  {
    link: 'http://icims.com',
    image: 'img/icims_logo.png',
    companyName: 'iCIMS',
    positions: [
      { jobTitle: 'senior software engineer', dates: 'February 2021 - Present' },
      { jobTitle: 'software engineer', dates: 'July 2019 – February 2021' }
    ],
    description: 'Improved unit test coverage, internationalization, accessibility, and documentation of Angular web app',
    actionItems: [
      'Interviewed, mentored, and reviewed pull requests for interns, contractors, and other incoming team members',
      'Integrated app with external and internal APIs, including AWS, Google Cloud, Azure, and client SSO services',
      'Automated unit test creation by building API for saving and synchronously fetching mock HTTP responses'
    ]
  },
  {
    link: 'http://go.allclear.app',
    image: 'img/allclear_logo.png',
    companyName: 'AllClear',
    positions: [
      { jobTitle: 'volunteer - engineering', dates: 'January 2019 - June 2019' }
    ],
    description: 'Collaborated with fellow industry professionals to build React web app for finding COVID-19 testing services',
    actionItems: [
      'Developed Google Maps, search filtering, analytics, and authentication features in agile team framework',
      'Wrote onboarding documentation for new volunteers to set up their React Native development environment'
    ],
  },
  {
    link: 'http://jibe.com',
    image: 'img/jibe_logo.png',
    companyName: 'Jibe',
    positions: [
      { jobTitle: 'associate software engineer', dates: 'January 2019 - June 2019' },
      { jobTitle: 'software engineer intern', dates: 'January 2018 - December 2018' }
    ],
    description: 'Developed new features and improved existing software across the stack for the Javascript development team',
    actionItems: [
      'Architected view and component structure that would become long-standing framework for application',
      'Refactored legacy AngularJS application into scaleable, feature-rich Angular app for enterprise product suite',
      'Developed mobile-responsive, accessible, and robust landing pages based on client design specifications'
    ]
  }
]

const EDUCATION_HISTORY = [
  {
    link: 'http://fullstackacademy.com',
    image: 'img/fsa_logo.png',
    schoolName: 'Fullstack Academy',
    subtitle: 'software engineering immersive bootcamp',
    dates: 'July 2017 - October 2017',
    description: `
      After graduating university, I participated in Fullstack Academy's 17 week software engineering bootcamp. At Fullstack I feel 
      that I built a strong foundation of coding knowledge through the studying and application of Javascript, HTML, CSS, React, 
      and Node fundamentals. I also gained an applied understanding of how web applications were built and how to translate my 
      coding knowledge to new concepts. 
    `,
  },
  {
    link: 'http://sc.edu',
    image: 'img/uschc_logo.png',
    schoolName: 'University of South Carolina Honors College',
    subtitle: 'darla moore school of business',
    dates: 'May 2017',
    additionalInfoLines: [
      { key: 'Majors: ', value: 'International Business & Finance' },
      { key: 'Minor: ', value: 'Spanish' },
      { key: 'Academic Recognitions: ', value: 'Magna Cum Laude', italicized: true }
    ]
  }
]

const PROFESSIONAL_SKILLS = [
  {
    name: 'Typescript',
    image: 'icons/typescript_logo.png'
  },
  {
    name: 'Javascript',
    image: 'icons/javascript_logo.png'
  },
  {
    name: 'Angular',
    image: 'icons/angular_logo.png'
  },
  {
    name: 'NodeJS',
    image: 'icons/node_logo.png'
  },
  {
    name: 'HTML5',
    image: 'icons/html5_logo.png'
  },
  {
    name: 'CSS3',
    image: 'icons/css_logo.png'
  },
  {
    name: 'SCSS',
    image: 'icons/scss_logo.png'
  },
  {
    name: 'Jasmine',
    image: 'icons/jasmine_logo.png'
  },
  {
    name: 'Karma',
    image: 'icons/karma_logo.png'
  },
  {
    name: 'ReactJS',
    image: 'icons/react_logo.png'
  },
  {
    name: 'RxJS',
    image: 'icons/rxjs_logo.png'
  },
]

const PROFESSIONAL_TECH = [
  {
    name: 'AWS',
    image: 'icons/aws_logo.png'
  },
  // {
  //   name: 'RxJS',
  //   image: 'icons/rxjs_logo.png'
  // },
  {
    name: 'Jenkins',
    image: 'icons/jenkins_logo.png'
  },
  {
    name: 'Python',
    image: 'icons/python_logo.png'
  },
  // {
  //   name: 'SCSS',
  //   image: 'icons/scss_logo.png'
  // },
]

module.exports = {
  GENERIC_DESCRIPTION,
  EMPLOYMENT_HISTORY,
  EDUCATION_HISTORY,
  PROFESSIONAL_SKILLS,
  PROFESSIONAL_TECH
}