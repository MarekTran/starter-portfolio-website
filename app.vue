<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader />
    <div class="flex flex-col grow bg-repeat bg-[url('@/assets/backgrounds/windows95-tile.png')]">
      <main class="grow mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full bg-white/50">
        <NuxtPage />
      </main>
    </div>
    <SiteFooter />
  </div>
</template>