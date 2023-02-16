<script setup>
import { RouterLink,RouterView } from 'vue-router';


</script>

<template>
  <div class="div">
    <nav>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/test">Test</RouterLink></li>
    </nav>
    <div>
      <RouterView />
    </div>
  
  </div>
</template>

<style scoped>

</style>
