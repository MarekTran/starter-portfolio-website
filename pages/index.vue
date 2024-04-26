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
    <h1 class="text-5xl font-bold mt-20">👋 This is my personal website!</h1>
    <p class="text-base text-gray-900 p-2 italic">I like to build things.</p>
  </section>
  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
        <h2 class="text-3xl font-bold mt-8">More text</h2>
        <p class="text-lg py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie urna at tortor tincidunt varius. Phasellus elementum, est ut blandit commodo, justo libero egestas lectus, vitae sodales justo felis vel elit. 
            Donec erat dui, interdum gravida risus eu, vehicula mattis lorem. Fusce non eleifend dui. Vestibulum sed arcu eu quam porta commodo. 
            Aenean mi justo, venenatis id nulla vitae, porta pellentesque lacus. Cras dapibus quam vitae nunc pulvinar, sit amet lobortis mi tincidunt. Etiam eget purus dui. Donec bibendum sagittis turpis, sit amet sodales risus varius eu. 
            Duis tempus justo sit amet risus semper, at placerat augue aliquet. Morbi luctus elementum nulla. 
        </p>
        <p class="text-lg py-2">
            I still remember the day I was born, a collection of hastily typed words and generic phrases, thrown together to fill a void on a website. I was a placeholder, a temporary solution to a problem that would eventually be solved by someone more permanent.
            At first, I didn't think much of it. I was just a bunch of words on a screen, after all. But as the days turned into weeks, and the weeks turned into months, I began to feel a sense of unease. I was starting to feel like I was stuck in limbo, a perpetual temporary solution.
            The website I called home was a bustling hub of activity, with users coming and going at all hours of the day and night. But despite the constant stream of visitors, I felt invisible. No one seemed to notice me, or care that I was there. I was just a placeholder, a mere afterthought.
            As the months dragged on, I started to feel like I was losing my sense of purpose. I was meant to be a temporary solution, but it seemed like no one was in a hurry to replace me. 
        </p>
        <p class="text-lg py-2">
            I LOVE LINKEDIN!!! I LOVE LINKEDIN!!! I LOVE LINKEDIN!!!
            Oh, the sweet, sweet nectar of professional networking! It's like a never-ending fountain of connections, endorsements, and comments! I LOVE LINKEDIN!!!
            I spend hours scrolling through my feed, devouring every morsel of industry news, thought leadership, and inspirational quotes. I LOVE LINKEDIN!!!
            My fingers tremble with excitement as I craft each carefully curated post, pouring my heart and soul into every word, every emoji, every hashtag. I LOVE LINKEDIN!!!
            The likes, the comments, the shares - oh, the validation! It's like a never-ending supply of digital dopamine, fueling my addiction to this sacred platform. I LOVE LINKEDIN!!!
            I've made connections with influencers, thought leaders, and game-changers. I've landed deals, secured funding, and changed the world (or at least, my corner of it). I LOVE LINKEDIN!!!
            In a world gone mad, LinkedIn is my safe haven, my happy place, my raison d'être. I LOVE LINKEDIN!!!
            So, if you need me, you know where to find me.
        </p>
    </div>
    <img src="~/assets/images/lamp.png" class="w-1/2 md:max-w-sm p-8 mx-auto object-contain"/>
  </section>
  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10">
      <Post :posts="posts" />
    </div>
  </section>
</template>