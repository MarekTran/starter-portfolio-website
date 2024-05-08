<script setup>
const props = defineProps({
  imgname: {
    type: String,
    default: 'fig-not-found.jpg'
  },
})
</script>

<template>
  <figure>
    <img :src="`/images/blog/${props.imgname}`" alt="Figure Image" class="w-full h-auto rounded-lg shadow-md">
    <figcaption class="text-center text-sm text-gray-500"><ContentSlot :use="$slots.default" unwrap="p" /></figcaption>
  </figure>
</template>