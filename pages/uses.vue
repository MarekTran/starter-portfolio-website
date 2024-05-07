<template>
  <h1 class="text-3xl font-bold my-8">Welcome to my uses page.</h1>
  <p class="text-lg">
    You can find more uses pages at
    <a href="https://uses.tech/" aria-label="uses.tech" class="text-blue-500">uses.tech</a>.
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
      is my current editor and I use it for pretty much everything.
    </li>
    <li class="ml-8 py-1">
      The theme I am currently using is
      <a href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme"
        aria-label="GitHub Dark" class="text-blue-500">GitHub Dark</a>.
    </li>
    <li class="ml-8 py-1">
      Font is
      <a href="https://dtinth.github.io/comic-mono-font/" aria-label="Comic Sans Mono" class="text-blue-500">Comic Mono</a>
    </li>
    <li class="ml-8 py-1"><a href="https://apps.microsoft.com/detail/9n8g5rfz9xk3?hl=en-US&gl=US" aria-label="Terminal Preview" class="text-blue-500">Windows Terminal Preview</a> is my
      terminal.
    </li>
  </ul>
  <h2 class="text-2xl font-bold mt-8 mb-2">Operating System</h2>
  <img src="~assets/images/tuxvswin-small.jpg" alt="Tux penguin, Windows logo" class="mt-8 mb-20 rounded-lg shadow-lg" />
  <ul class="list-disc">
    <li class="ml-8 py-1">I use Windows 10 on my main machine.</li>
    <li class="ml-8 py-1">Ubuntu 22.04 is on my home server.</li>
    <li class="ml-8 py-1">My VMs run on Proxmox</li>
  </ul>
</template>

<style scoped>
  h1, h2, p, div {
    font-family: 'Comic Neue', cursive;
  }
</style>