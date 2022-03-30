<template>
  <div class="container small-margin-top">
    <h1>Where I've worked:</h1>
    <ul class="company-list">
      <li><span value='elevatorAuditions' @click='setCompany'>Elevator Auditions</span></li>
      <li><span value='headstorm' @click='setCompany'>Headstorm</span></li>
      <li><span value='smu' @click='setCompany'>Southern Methodist University</span></li>
      <li><span value='hacksmu' @click='setCompany'>HackSMU</span></li>
      <li><span value='att' @click='setCompany'>AT&#38T</span></li>
      <li><span value='ani' @click='setCompany'>ANI Networks</span></li>
      <li><span value='nv5' @click='setCompany'>NV5</span></li>
    </ul>
    <div>
      <h2 class="no-margin-top no-margin-bottom">{{ company.role }} <span>@ {{ company.name }}</span></h2>
      <h3 class="no-margin-top">{{ company.timespan }}</h3>
      <ul class="descriptive-list">
        <li v-for='description in company.roleDescriptions'><span>{{ description }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
const Company = class {
  constructor(name, role, timespan, roleDescriptions) {
    this.name = name,
    this.role = role,
    this.timespan = timespan,
    this.roleDescriptions = roleDescriptions
  }
}
const companies = {
  elevatorAuditions: new Company(
    'Elevator Auditions',
    'Software Engineer',
    'May 2021 - Present',
    [
      'Lead the design and development for Elevator Auditions, a mobile social media application',
      'Developed the application using React Native, Swift, Kotlin, and Google Cloud',
      'Developed features such as user posts, instant messaging, and in-app advertisements'
    ] 
  ),
  headstorm: new Company(
    'Headstorm',
    'Consultant Intern',
    'May 2021 - August 2021',
    [
      'Created application to convert handwritten paper forms to digital forms using Azure AI Platform',
      'Contributor to FoundryUI, a React and ReactNative UI library',
      'Automated web tasks using Python Selenium'
    ]
  ),
  smu: new Company(
    'SMU',
    'Teaching Assistant',
    'January 2020 - Present',
    [
      'Mentored 60+ students in Arduino programming, mechanical design, and project management',
      'Maintain Arduino libraries and documentation used by students to control robot movements and sensors'
    ]
  ),
  hacksmu: new Company (
    'HackSMU',
    'Director',
    'August 2019 - Present',
    [
      'Lead organizer for SMU’s annual hackathon, attracting 100+ students',
      'Hosted weekly meetings with a team of six organizers to plan hackathon budget, logistics, and promotion',
      'Managed $8,000 club budget for hackathon and club events',
      'Created python scripts to clean and analyze hackathon participant demographic data'
    ]
  ),
  att: new Company(
    'AT&T',
    'Software Engineering Intern',
    'June 2020 - August 2020',
    [
      'Created interfaces and APIs using React and Java Spring Boot for internal project management tools',
      'Collaborated with 5 interns to create TurnUp, a web-application to assess the probability of employees contracting COVID-19 and track employee presence to prevent overcrowding of buildings',
      'Full-stack developer and designer for TurnUp, using MongoDB, Express, Node, and React'
    ]
  ),
  ani: new Company(
    'ANI Networks',
    'Software Engineering Intern',
    'May 2019 - August 2019',
    [
      'Developed a web-app to manage employee purchase orders using ASP.NET',
      'Designed database schemas for storing employee purchasing data in Microsoft SQL Server',
      'Used C# and SQL to create automatic email notifications and find data anomalies'
    ]
  ),
  nv5: new Company(
    'NV5',
    'Mechanical Engineering Intern',
    'May 2017 - August 2017',
    [
      'Assisted mechanical engineers in the designing and planning of HVAC systems and structures of commercial buildings in the Las Vegas Area and surrounding regions'
    ]
  )
}
export default {
  data() {
    return {
      company: companies['elevatorAuditions']
    }
  },
  methods: {
    setCompany(event) {
      const company = event.target.attributes[0].value
      this.company = companies[company]
    }
  }
}
</script>

<style scoped>
  .container {
    padding-left: 8%;
    padding-right: 10%;
    text-align: left;
    display: grid;
    grid-template-columns: 5fr 8fr;
  }
  h1 {
    color: var(--darksalmon);
    font-size: 2.8rem;
    grid-column: 1/13;
  } 
  h2,h3 {
    font-family: 'Lexend Deca';
    color: white;
    font-weight: 100;
  }
  h2 {
    font-size: 2rem;
  }
  h2 span {
    color: var(--paleorange)
  }
  .company-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-top: 2rem;
  }
  .company-list li, .descriptive-list li {
    margin-bottom: 1.5rem;
  }
  .company-list li span {
    color: var(--paleorange);
    font-size: 1.7rem;
    font-weight: 100;
    text-decoration: underline .1em rgba(254,238,205,0);
    transition: text-decoration-color .3s; 
  }
  .company-list li span:hover {
    cursor: pointer;
    text-decoration-color: rgba(254,238,205,1)
  }
  .descriptive-list {
    padding: 0;
    font-size: 1.5rem;
  }
  .descriptive-list li p {
    font-family: 'Lexend Deca';
  }

</style>