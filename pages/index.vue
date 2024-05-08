<script setup>
const { data: posts } = await useAsyncData('latest-posts', () =>
  queryContent('/blog')
    .sort({ data: 1 })
    .limit(3)
    .find()
)
</script>

<template>
    <section>
      <h1 class="text-5xl font-bold mt-20">👋 Hi, I am Marek.</h1>
      <p class="text-base text-gray-900 p-2 italic">I like to build things.</p>
    </section>
    <section class="flex flex-col md:flex-row gap-3">
      <div class="md:w-3/4">
          <h2 class="text-3xl font-bold mt-8">About Me</h2>
          <p class="text-lg py-2">
              I am a student at TU Delft studying Computer Science and Engineering. I am passionate about computer hardware, self-hosting and IoT.
              This website is a place to document my projects and share my journey. 
          </p>
          <p class="text-lg py-2">
              Currently, I am working to finish my Bachelor's degree. I am working on self-hosted media service project and developing my home DevOps, GitOps setup which I will share with you soon!
          </p>
          <p class="text-lg py-2">
              My other interests are cooking, playing video games and breakdance. Oh, I also have a cat named Axiom.  
          </p>
      </div>
      <div class="relative w-1/2 md:max-w-sm mx-auto rounded-lg overflow-hidden">
        <div class="absolute bottom-0 w-full min-h-4 px-2 py-2 bg-gray-700/50 text-white">
          <p class="text-justify"> 
            Axiom in IKEA KALLAX box. (He is very handsome.) 
          </p>
        </div>
        <img src="~/assets/images/axi-box-cc.png" class="w-full object-contain"/>
      </div>
      </section>
    <section>
      <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
      <div class="grid md:grid-cols-3 pt-8 gap-10 mb-2">
        <Post :posts="posts" />
      </div>
    </section>
</template>

<style scoped>
  h1, h2, p, div {
    font-family: 'Comic Neue', cursive;
  }
</style>