<template>
  <h1 class="text-3xl font-bold my-8">Uses</h1>
  <p class="text-lg">
    Hi, welcome to my uses page. This is inspired by the website uses.tech.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-2">This Website</h2>
  <ul class="list-disc">
    <li class="ml-8 py-1"><a href="https://vuejs.org/" class="text-blue-500">Vue 3</a></li>
    <li class="ml-8 py-1"><a href="https://nuxt.com/" class="text-blue-500">Nuxt 3</a></li>
    <li class="ml-8 py-1"><a href="https://tailwindcss.com/" class="text-blue-500">Tailwind CSS</a></li>
  </ul>

  <h2 class="text-2xl font-bold mt-8 mb-2">Editor and Terminal</h2>
  <ul class="list-disc">
    <li class="ml-8 py-1"><a href="https://code.visualstudio.com/" aria-label="Visual Studio Code" class="text-blue-500">Visual Studio Code</a>
      is my current
      editor and I use it for pretty much everything with devcontainers.
    </li>
    <li class="ml-8 py-1">
      Font is
      <a href="https://dtinth.github.io/comic-mono-font/" aria-label="Comic Sans Mono Font" class="text-blue-500">Comic Mono</a>
    </li>
    <li class="ml-8 py-1"><a href="https://apps.microsoft.com/detail/9n8g5rfz9xk3?hl=en-US&gl=US" aria-label="iTerm" class="text-blue-500">Windows Terminal Preview</a> is my
      Terminal
    </li>
  </ul>
  <h2 class="text-2xl font-bold mt-8 mb-2">OS</h2>
  <ul class="list-disc">
    <li class="ml-8 py-1">I use <a href="https://www.microsoft.com/en-us/windows" aria-label="Windows 10" class="text-blue-500">Windows 10</a> as my main OS.</li>
    <li class="ml-8 py-1">My VM server runs <a href="https://www.proxmox.com/en/" aria-label="Proxmox" class="text-blue-500">Proxmox</a> with Ubuntu VMs.</li>
    <li class="ml-8 py-1">My main server runs <a href="https://www.ubuntu.com/" aria-label="Ubuntu" class="text-blue-500">Ubuntu server</a> with Docker.</li>
  </ul>
  <img src="~/assets/images/tuxvswin-small.jpg" alt="Linux Penguin fighting Microsoft Windows" class="mt-8 mb-20 shadow-lg rounded-lg overflow-hidden" />
</template>

<style scoped>
  h1, h2, p, div, li {
    font-family: 'Comic Neue', cursive;
    font-weight: 500;

  }
</style>