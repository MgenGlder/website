<template>
  <div>
    <header><h1>Kunle's Website!</h1></header>
    <nav><a href="#">Home</a>&nbsp;<a href="#">Other places</a>&nbsp;<router-link to="/testing">Testing Routes</router-link></nav>
    <article>
      <figure>
        <img></img>
        <figcaption>This is my face!</figcaption>
      </figure>
    </article>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
$gray: darkslategrey;
h1 {
  color: $gray;
  font-size: 2rem;
}
</style>
