<template>
  <div class="grid-container">
    <div class="grid-item">
      <header><h1>Kunle's Website!</h1></header>
    </div>
    <div class="grid-item">
      <nav><a href="#">Home</a>&nbsp;<a href="#">Other places</a>&nbsp;<router-link to="/testing">Testing Routes</router-link></nav>
    </div>
    <div class="grid-item">
      <article class="bio">
        <figure>
          <img 
              class="bio__hero" 
              src="/static/hero.jpg" />
          <figcaption>This is my face!</figcaption>
        </figure>
      </article>
    </div>
    <div class="grid-item">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
$gray: darkslategrey;
h1 {
  color: $gray;
  font-size: 2rem;
}

.bio {

}

.bio__hero {
  width: 200px;
}

</style>
