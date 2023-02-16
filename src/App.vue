<script setup>
import { RouterLink,RouterView } from 'vue-router';


</script>

<template>
  <div>
    <header>
        <RouterLink to="/" class="logo"><img src="@/assets/images/logo.png" alt="logo">
          <span class="text-logo">Joe</span>
        </RouterLink>
        <div class="bx bx-menu-alt-right" id="menu-icon"></div>
        <ul class="nav-links">
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/skills">Skills</RouterLink></li>
            <li><RouterLink to="/projects">Projects</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
            <button class="btn-sm-purple">Download CV</button>
        </ul>
    </header>   
    <RouterView/>
  </div>
</template>

<style>
  @import "@/assets/styles/global/global.css";
</style>
