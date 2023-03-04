<template>
  <header>
    <div class="header-contents">
      <a class="logo" href="/">
        <img
          v-if="displayType === 'gameLauncher'"
          src="@/assets/icons/site-logo.svg"
          alt="site-logo"
        />
        <img v-else src="@/assets/icons/site-logo-light.svg" alt="site-logo" />
      </a>
      <ul class="nav-menu">
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useUxStore } from '@/stores';

const uxStore = useUxStore();
const displayType = computed(() => uxStore.displayType);
</script>
<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  .header-contents {
    height: 210px;
    padding: 0 55px;
    display: flex;
    justify-content: space-between;
    max-width: 1450px;
    margin: 0 auto;
    align-items: center;

    .nav-menu {
      list-style: none;

      li {
        cursor: pointer;
        font-size: 1.3rem;
      }

      li > a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
}
</style>
