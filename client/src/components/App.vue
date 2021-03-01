<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/test">test</router-link>
      <router-link to="/contacts">Contacts</router-link>
      <router-link to="/!@#$%">404 page</router-link>
    </nav> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>