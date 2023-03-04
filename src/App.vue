<template>
  <NavBar />
  <RouterView />
</template>
<script lang="ts" setup>
import NavBar from '@/components/surfaces/NavBar.vue';
import { watch } from 'vue';
import { useUxStore } from '@/stores';

const uxStore = useUxStore();
watch(
  () => uxStore.displayType,
  (display) => {
    if (display === 'calcApp') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }
);
</script>
