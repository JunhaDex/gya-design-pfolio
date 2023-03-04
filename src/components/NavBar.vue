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
          <router-link to="/about">about</router-link>
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
  .header-contents {
    height: 210px;
    padding: 0 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-menu {
      list-style: none;

      li {
        cursor: pointer;
      }

      li > a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
}
</style>
