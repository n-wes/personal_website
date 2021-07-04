<template>
<div class="container">
  <a href="#" id="logo">NW</a>
  <nav>
    <ul class="navlinks">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">experience</a></li>
      <li><a href="#">contact</a></li>
    </ul>
  </nav>
  </div>
</template>

<script>
</script>

<style scoped>
li, a {
  font-family: 'Major Mono Display';
  font-weight: 100;
  font-size: 1rem;
  color: var(--paleorange);
  text-decoration: none;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4% 0 3%;
}
.navlinks {
  list-style: none;
}
.navlinks li {
  display: inline-block;
  padding: 0 2rem;
}
.navlinks li a {
  text-decoration: underline .1em rgba(254,238,205,0);
  transition: text-decoration-color .3s;
}
.navlinks li a:hover {
  text-decoration-color: rgba(254,238,205,1);
}
#logo {
  font-size: 4.5rem;
}
</style>