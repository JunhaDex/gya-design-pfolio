<template>
  <div class="carousel">
    <swiper>
      <swiper-slide>
        <div class="slide">
          <div class="gradient"></div>
          <div class="game-launcher-slide">
            <img src="@/assets/images/game-launcher-slide.webp" alt="launcher-image" />
            <h2>01 | Game Launcher UI/UX Project</h2>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <div class="calculator-slide">calculator</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
</script>
<style lang="scss">
.slide {
  position: relative;
  aspect-ratio: 16/9;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

.game-launcher-slide {
  position: absolute;
  top: 0;
  left: 0;
  h2 {
    font-weight: 400;
    font-size: 1.8rem;
    margin-top: 5%;
  }
}

.gradient {
  content: '';
  width: 65%;
  height: 80%;
  background: {
    image: radial-gradient(ellipse, transparent, $dark),
      url('@/assets/images/gradient-slide-1.webp');
    repeat: no-repeat;
    size: cover;
  }
}

.calculator-slide {
}
</style>
