<template>
  <Layout>
    <div v-html="$page.post.content"></div>
  </Layout>
</template>

<page-query>
query($path: String! ) {
	post(path: $path) {
    content
  }
}
</page-query>

<script>
export default {

}
</script>

<style>

</style>