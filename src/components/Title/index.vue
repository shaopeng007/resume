<template>
  <div class="text-xl font-bold flex items-center	">
    <IconFont :icon="icon"/>
    <span class="ml-2">{{ title }}</span>
  </div>
  <div class="relative" style="
    border-bottom: 1px solid transparent;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    border-image: linear-gradient(to right, rgb(71, 215, 255), #3b82f6) 4;
  ">
    <div 
      class="w-0 h-0 absolute top-px right-0" 
      style="
        border-top: 4px solid #3b82f6;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;"
    >
    </div>
  </div>
</template>

<script>

import { defineComponent, toRefs } from 'vue';
export default defineComponent({
  name: 'Title'
})

</script>

<script setup>
const props = defineProps({
  title: {
    typeof: String,
    default: ''
  },
  icon: {
    typeof: String,
    default: ''
  }
})

const {
  title,
  icon
} = toRefs(props)
</script>
