<script setup>
const { data: posts } = await useAsyncData('posts', () => 
    queryContent('/blog').find()
) 
</script>

<template>
    <h1 class="text-3xl my-8">Blog Posts</h1>
        I love writing blogs about topics that interest me or sharing my thoughts on various subjects. It's a great way for me to express my ideas and connect with others who share similar interests.
        Whether it's technology, science, or any other fascinating topic, I enjoy diving deep into the subject matter and providing valuable insights to my readers.
        Through my blog posts, I aim to engage and inspire my audience, sparking meaningful discussions and encouraging them to think critically about the topics I cover.
        So, stay tuned for my latest blog posts where I'll be sharing my thoughts, experiences, and knowledge on a wide range of subjects!
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