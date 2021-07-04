<template>
  <Navbar/>
  <Home/>
</template>

<script setup>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'

</script>

<style>
/*
  Font Families:
  Major Mono Display
  Sirin Stencil
  Capriola
  Josefin Sans
  Lexend Deca
*/
@import url('https://fonts.googleapis.com/css2?family=Capriola&family=Josefin+Sans&family=Lexend+Deca&family=Major+Mono+Display&family=Sirin+Stencil&display=swap');
body {
  font-family: 'Capriola, Josefin Sans', 'Lexend Deca', 'Major Mono Display', 'Sirin Stencil';
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2e3d50;
  
}
button {
    font-family: 'Capriola';
    font-size: 36px;
    color: #d7b692;
    border-color: #d7b692;
    background-color: transparent;
    border-style: solid;
    width: 367px;
    height: 77px;
}
</style>
