<template>
  <Layout>
    <h1>Products</h1>
    <div v-for="edge in $page.allContentfulProduct.edges" :key="edge.node.id">
      <h2 style="margin-bottom: 0.25em;">{{ edge.node.name }}</h2>
      <span>${{ edge.node.price }}</span>
      <q-image :src="edge.node.image.file.url" style="width: 100%; height: 300px; object-fit: contain;" :alt="edge.node.image.title" />
      <p>{{ edge.node.description }}</p>
    </div>
  </Layout>
</template>

<page-query>
{
  allContentfulProduct {
    edges {
      node {
        id
        
        name
        price
        description
        image {
          title
          file {
            url
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