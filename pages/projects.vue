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
  <h1 class="text-3xl my-8">Projects</h1>
  <p class="text-lg mb-8">Here are some of my projects on GitHub.</p>
  <section class="grid grid-cols-2 gap-10 px-6">
    <RepoCard v-for="project in data?.viewer.repositories.nodes" :key="project.id" :project="project"/>
  </section>
</template>

<style scoped>
  h1, h2, p, div {
    font-family: 'Comic Neue', cursive;
  }
</style>