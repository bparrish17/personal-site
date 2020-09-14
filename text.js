const GENERIC_DESCRIPTION = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis';

const EMPLOYMENT_HISTORY = [
  {
    link: 'http://icims.com',
    image: 'img/icims_logo.png',
    companyName: 'iCIMS',
    jobTitle: 'software engineer ii',
    description: GENERIC_DESCRIPTION
  },
  {
    link: 'http://go.allclear.app',
    image: 'img/allclear_logo.png',
    companyName: 'AllClear',
    jobTitle: 'volunteer - engineering',
    description: GENERIC_DESCRIPTION
  },
  {
    link: 'http://jibe.com',
    image: 'img/jibe_logo.png',
    companyName: 'Jibe',
    jobTitle: 'associate software engineer',
    description: GENERIC_DESCRIPTION
  }
]

const EDUCATION_HISTORY = [
  {
  link: 'http://fullstackacademy.com',
  image: 'img/fsa_logo.png',
  companyName: 'Fullstack Academy',
  jobTitle: 'software engineering immersive bootcamp',
  description: GENERIC_DESCRIPTION
},
{
  link: 'http://sc.edu',
  image: 'img/uschc_logo.png',
  companyName: 'University of South Carolina',
  jobTitle: 'darla moore school of business',
  description: GENERIC_DESCRIPTION
}]

module.exports = {
  GENERIC_DESCRIPTION,
  EMPLOYMENT_HISTORY,
  EDUCATION_HISTORY
}