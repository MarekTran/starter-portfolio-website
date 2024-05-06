<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader />
    <div class="flex flex-col grow bg-repeat bg-[url('@/assets/backgrounds/windows95-tile320x240.jpg')]">
      <main class="grow mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 items-start w-full bg-slate-200/75 my-4 rounded-2xl py-4">
        <NuxtPage />
      </main>
    </div>
    <SiteFooter />
  </div>
</template>