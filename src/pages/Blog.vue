<template>
  <Layout>
    <h1>Blog</h1>
    <article v-for="edge in $static.allPost.edges" :key="edge.node.id">
      <div v-html="edge.node.content"></div>
    </article>
  </Layout>
</template>

<static-query>
{
  allPost {
    edges {
      node {
        id
        content
      }
    }
  }
}
</static-query>

<script>
export default {

}
</script>

<style>

</style>