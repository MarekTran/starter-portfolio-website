<script setup>
const props = defineProps(['project'])
</script>

<template>
  <div class="repo-card-wrapper my-4 p-8">
    <div class="relative z-10">
      <a :href="project.url" target="_blank">
        <h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">{{ project.name }}</h2>
      </a>
      <p>{{ project.description }}</p>
      <div class="mt-4">
        <Icon name="fontisto:star" size="1.1rem" class="text-indigo-700" /> Stars: {{ project.stargazers.totalCount }}
        <Icon name="system-uicons:branch" size="1.1rem" class="text-indigo-800" /> Forks: {{ project.forks.totalCount }}
        <Icon name="system-uicons:eye" size="1.1rem" class="text-indigo-700" /> Watchers: {{ project.watchers.totalCount }}
      </div>
    </div>
    <div class="repo-card-background">
    </div>
  </div>
</template>