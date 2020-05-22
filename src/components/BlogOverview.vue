<template>
  <section class="blogoverview">
    <h2>Blog</h2>
    <div v-for="(blogpost, id) in blogposts" :key="id">
      <router-link :to="'/blogpost/' + id">{{blogpost.title}}</router-link>
      <p>{{blogpost.short}}</p>
    </div>

  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import BlogPostService from "@/services/BlogPostService";
  import {BlogPost} from "@/types/BlogPost";
export default Vue.extend({
  data(){
    return {
      blogposts: [] as BlogPost[]
    }
  },
  created() {
    this.blogposts = BlogPostService.getAllBlogPosts();
  }
});
</script>

<style lang="scss" scoped>
</style>