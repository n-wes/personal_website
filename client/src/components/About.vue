<template>
<div class="container small-margin-top">
  <div class="item">
    <p class="bio">
      Hello! My name is Nathan, and I enjoy creating things that live on the web, on your phone, as well as in the world of robotics. My interest in creating things started when I aspired to create fun games when I was younger.
      <br/>
      <br/>
      Fast forward to today, I’ve had the pleasure of working at a telecom company, a huge corporation, a startup, and a student-led hackathon organization. My main focus these days is building interesting projects and improving my design, development, and management skills.
      <br/>
      <br/>
      Here are a few technologies I’ve been working with recently:  
    </p>
     <ul class="skills-list">
      <li><span>JavaScript</span></li>
      <li><span>React</span></li>
      <li><span>SQL</span></li>
      <li><span>Express</span></li>
      <li><span>React Native</span></li>
      <li><span>Figma</span></li>
      <li><span>Node.js</span></li>
      <li><span>Vue</span></li>
      <li><span>Python</span></li>
    </ul> 
  </div>
  <div class="item">
    <img src="../assets/me.jpg" alt="Nathan Wesley">
  </div>

</div>

</template>

<style scoped>
.container {
  text-align: left;
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-gap: 3em;
  padding: 0 4%;
}
.bio {
  color: var(--darksalmon);
}
img {
  max-width: 35rem;
  max-height: 35rem;
}
.skills-list {
  list-style-type: '> ';
  color: var(--gray);
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding-left: 10%;
  margin-top: 10%;
}
</style>