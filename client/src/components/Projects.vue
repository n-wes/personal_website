<template>
  <div class="container small-margin-top">
    <h1>My Projects</h1>
    <ul class="project-list">
        <li v-for="project in projects" :key="project.title">
            <div class="card-container">
            <a :href="project.link" class="card-link">
                <div class="card">
                    <div class="thumbnail-container">
                        <img class="card-thumbnail" :src="project.thumbnail"/>
                    </div>
                        <h2 class="card-title"><span>{{ project.title }} </span></h2>
                        <h3><span>{{ project.summary }} </span></h3>
                </div>
            </a>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import mosaic from '../assets/mosaic.png'
import nwesley from '../assets/nwesley.png'

export default {
  data() {
    return {
        projects: [
            {
                title: 'Mosaic',
                link: 'https://wordle-mosaic.herokuapp.com/',
                thumbnail: mosaic,
                summary: 'A wordle-inspired app that will transform images into Wordle Tiles.'
            },
            {
                title: 'Personal Site',
                link: 'https://nwesley.com',
                thumbnail: nwesley,
                summary: 'My own personal website, made with Vue JS, Docker, and Google Cloud.'
            }
        ]
    }
  },
  methods: {
      getImgUrl(img) {
          return require('../assets/' + img)
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
    margin: 0;
  }
  h2 {
    font-size: 2rem;
  }
  h2 span,
  h3 span{
    color: var(--darkblue);
  }
  .card-container {
      margin-right: 4rem;
  }
  .card {
      background: white;
      max-width: 20rem;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      padding: 1rem;
  }
  .card-link {
      text-decoration: none;
  }
  .card-title {
      margin-bottom: 1rem;
  }
  .thumbnail-container {
      display: flex;
      align-content: center;
      justify-content: center;
      height: 10rem;
      width: 20rem;
      margin-bottom: 1rem;
  }
  .card-thumbnail {
      max-height: 100%;
      max-width: 100%;
  }
  .project-list {
      padding-left: 0;
      list-style: none;
      display: flex;
      flex-direction: row;
  }
</style>