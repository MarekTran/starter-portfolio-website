<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent()
    .where({ _path: path})
    .findOne()
})

// Function to format the date
const formatDate = (date) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString('en-US', {
    month: 'short', // 'May'
    day: 'numeric', // '7'
    year: 'numeric' // '2024'
  });
}
</script>

<template>
  <section class="prose prose-headings:mb-2 my-10 mx-auto max-w-prose text-lg">
    <h1> {{ data.title }} </h1>
    <p class="not-prose text-slate-600"> {{ data.description }}</p>
    <div class="not-prose text-sm text-gray-500 w-full border-t-1 border-slate-600/50">Published <time :datetime="data.date"> {{ formatDate(data.date) }}</time></div>
  </section>
  <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-prose text-lg" />
  <div class="my-8 mx-auto">
    <a v-for="tag in  data.tags " :key="tag" :href="`/blog/tags/${tag}`"
      class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase last:mr-0 mr-4">
      <Icon name="pajamas:label" size="1.5rem" class="text-gray-100 mr-2" /> {{ tag }}
    </a>
  </div>
</template>
