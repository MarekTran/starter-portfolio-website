<script setup>
const query = gql`
{
  viewer {
    repositories(first: 6, orderBy: { field: CREATED_AT, direction: DESC}) {
      totalCount
      nodes {
        id
        name
        createdAt
        description
        url
        forks {
          totalCount
        }
        watchers {
          totalCount
        }
        stargazers {
          totalCount
        }
        visibility
      }
    }
  }
}
`

const { data } = await useAsyncQuery(query);
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader />
    <div class="flex flex-col grow bg-repeat bg-[url('@/assets/backgrounds/windows95-tile.png')]">
      <main class="grow mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 items-start w-full bg-white/50 my-4 rounded-2xl py-4">
        <NuxtPage />
      </main>
    </div>
      <h1 class="text-3xl my-8">Projects</h1>
  <p class="text-lg mb-8">Here are some of my projects on GitHub.</p>
  <section class="grid grid-cols-2 gap-10">
    <div class="repo-card-wrapper my-4">
        <div class="repo-card-content p-8">
          <a href="google.com" target="_blank" class="cursor-pointer">
            <h2 class="mb-2 text-2xl font-semibold text-indigo-800 hover:underline">sample-project-yeah</h2>
          </a>
          <p>This is my sample project</p>
          <div class="mt-4"><Icon name="fontisto:star" size="1.1rem" class="text-indigo-700" /> Stars: 1239 <Icon name="system-uicons:branch" size="1.1rem" class="text-indigo-800" /> Forks: 90218 <Icon name="system-uicons:eye" size="1.1rem" class="text-indigo-700" /> Watchers: 4</div>
        </div>
      </div>
  </section>
    <SiteFooter />
  </div>
</template>