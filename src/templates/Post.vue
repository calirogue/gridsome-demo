<template>
  <Layout>
    <div v-html="$page.post.content"></div>
    <vue-disqus shortname="frontend-phantoms" :identifier="$page.post.id"></vue-disqus>
  </Layout>
</template>

<page-query>
query($path: String! ) {
	post(path: $path) {
    id
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