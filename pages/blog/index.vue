<script setup>
const { data: posts } = await useAsyncData('posts', () => 
    queryContent('/blog').find()
) 
</script>

<template>
    <h1 class="text-3xl my-8">Blog Posts</h1>
        <p>I make blog posts. (sometimes)</p>
    <ul>
        <li v-for="post in posts" :key="post._id" class="my-8 py-4 border-b-2">
            <nuxt-link :to="post._path" class="text-blue-500 text-2xl">{{ post.title }}</nuxt-link>
            <p class="text-gray-500">{{ post.description }}</p>
        </li>
    </ul>
    <section class="grid md:grid-cols-3 mt-8 gap-10 mb-2">
        <Post :posts="posts" />
    </section>
</template>

<style scoped>
  h1, h2, p, div {
    font-family: 'Comic Neue', cursive;
  }
</style>