<template>
  <div class="container small-margin-top">
    <h1 class="item-1">Where i've worked:</h1>
    <ul class="company-list">
      <li><span>Headstorm</span></li>
      <li><span>Southern Methodist University</span></li>
      <li><span>HackSMU</span></li>
      <li><span>AT&#38T</span></li>
      <li><span>ANI Networks</span></li>
      <li><span>NV5</span></li>
    </ul>
    <div>
      <h2 class="no-margin-top no-margin-bottom">Job Role <span>@ Company</span></h2>
      <h3 class="no-margin-top">Month 20XX - Month 20XX</h3>
      <ul class="descriptive-list">
        <li><p>Job description. I did this and this and this and this and this and this and this and this and this and this and that and that and this too.</p></li>
        <li><p>Job description. I did this and this and this and this and this and this and this and this and this and this and that and that and this too.</p></li>
        <li><p>Job description. I did this and this and this and this and this and this and this and this and this and this and that and that and this too.</p></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .container {
    padding-left: 8%;
    padding-right: 10%;
    text-align: left;
    display: grid;
    grid-template-columns: 6fr 7fr;
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
  .company-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-top: 2rem;
  }
  .company-list li {
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