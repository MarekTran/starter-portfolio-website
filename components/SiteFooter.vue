<script setup>
const links = [
    {name: 'GitHub', href: 'https://github.com', icon: 'entypo-social:github-with-circle'},
    {name: 'LinkedIn', href: 'https://linkedin.com', icon: 'entypo-social:linkedin-with-circle'},
    {name: 'Twitter', href: 'https://twitter.com', icon: 'entypo-social:twitter-with-circle'}
]
</script>

<template>
    <footer class="bg-gray-800">
        <section class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-4 text-gray-300 flex flex-row">
            <p class="flex-1">&copy; Your Name 2023. All Rights Reserved</p>
            <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
                <a v-for="link in links" :key="link.name" :href="link.href" class="text-gray-300 hover:text-white">
                    <Icon :name="link.icon" size="1.5rem" class="text-gray-300"/>
                </a> 
                </div>
        </section>
    </footer>
</template>