<template>
  <div id="app">
    <router-view></router-view>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import bottomNav from './components/common/bottom_nav'
export default {
  name: 'app',
  methods: {
  },
  components: {bottomNav}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
/*   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
