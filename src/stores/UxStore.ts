import { ref } from 'vue';
import type { DisplayType } from '@/types/Ux';
import { defineStore } from 'pinia';

export const setupUx = () => {
  const displayType = ref<DisplayType>();

  function setDisplayType(display: DisplayType) {
    displayType.value = display;
  }

  return {
    displayType,
    setDisplayType
  };
};

export const useUxStore = defineStore('uxStore', setupUx);
