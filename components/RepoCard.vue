<script setup>
const props = defineProps(['project'])
</script>

<template>
  <div class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50">
    <a :href="project.url" target="_blank">
      <h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">{{ project.name }}</h2>
    </a>
    <p>{{ project.description }}</p>
    <div class="mt-4">
      <Icon name="fontisto:star" size="1.1rem" class="text-indigo-700" /> Stars: {{ project.stargazers.totalCount }}
      <Icon name="system-uicons:branch" size="1.1rem" class="text-indigo-800" /> Forks: {{ project.forks.totalCount }}
      <Icon name="system-uicons:eye" size="1.1rem" class="text-indigo-700" /> Watchers: {{
        project.watchers.totalCount }}
    </div>
  </div>
</template>