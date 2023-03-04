<template>
  <main>
    <Carousel />
    <div class="section-header">
      <div class="logo">
        <img src="@/assets/images/charabros-logo.webp" alt="charabros-logo" />
      </div>
    </div>
  </main>
</template>
<script lang="ts" setup>
import Carousel from '@/components/display/Carousel.vue';
</script>
<style lang="scss" scoped>
.section-header {
  position: relative;
  height: 534px;
  background: {
    color: #15151e;
    image: url('@/assets/images/gl-sec-header-1.webp');
    repeat: no-repeat;
    size: contain;
  }

  .logo {
    position: absolute;
    bottom: 68px;
    right: 68px;
  }
}
</style>
