<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Capriola&family=Josefin+Sans&family=Lexend+Deca&family=Major+Mono+Display&family=Sirin+Stencil&display=swap');

html {
  font-size: 1vw;
  --darkblue: #2e3d50;
  --gray: #8894a1;
  --paleorange: #feeecd;
  --darksalmon: #d7b692;
  --orange: #c4762a;
}
body {
  font-family: 'Capriola, Josefin Sans', 'Lexend Deca', 'Major Mono Display', 'Sirin Stencil';
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--darkblue);
}
h1 {
  font-family: 'Sirin Stencil';
  font-size: 6rem;
  font-weight: 100;
}
h2 {
  font-family: 'Capriola';
  font-size: 3rem;
  font-weight: 100;
}
p {
  font-family: 'Josefin Sans';
  font-size: 1.5rem;
}
button {
    font-family: 'Capriola';
    font-size: 1.7rem;
    color: var(--darksalmon);
    border-color: var(--darksalmon);
    background-color: transparent;
    border-style: solid;
    padding: 1rem 2rem 1rem 2rem;
    transition: background-color .5s;
}
button:hover {
  background-color: var(--paleorange);
  cursor: pointer;
}
.no-margin-top {
  margin-top: 0;
}
.no-margin-bottom {
  margin-bottom: 0;
}
.small-margin-bottom {
  margin-bottom: 3rem;
}
.small-margin-top {
  margin-top: 3rem;
}
.descriptive-list {
  list-style-type: '> ';
  color: var(--gray);
}
</style>
