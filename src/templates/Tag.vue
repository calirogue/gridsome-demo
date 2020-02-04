<template>
  <Layout>
    <h1># {{ $page.tag.title }}</h1>
    <article v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" style="margin-bottom: 5em">
      <g-image :src="edge.node.cover_image" style="width: 100%" />
      <h2>{{ edge.node.title }}</h2>
      <p>{{ edge.node.excerpt }}</p>
      <p>Posted: {{ edge.node.date }} | {{ edge.node.timeToRead }} min read</p>
      <div>
        <g-link style="padding-right: .45em" v-for="tag in edge.node.tags" :to="tag.path" :key="tag.id">#{{ tag.id }}</g-link>
      </div>
      <g-link :to="edge.node.path">Read Post</g-link>
      <!-- <div v-html="edge.node.content"></div> -->
    </article>
  </Layout>
</template>

<page-query>
query($id: String! ) {
	tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
            id
            title
            cover_image
            excerpt
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {

}
</script>

<style>

</style>