<template>
    <main>
        <h1>{{blogPost.title}}</h1>
        <v-subheader>{{blogPost.date}} by Aaron Bronders</v-subheader>
        <p>{{blogPost.short}}</p>
        <template v-for="(blogpostparagraph, id) in blogPost.content">
            <h2 :key="id">{{blogpostparagraph.title}}</h2>
            <p :key="id">{{blogpostparagraph.content}}</p>
        </template>
    </main>
</template>

<script lang="ts">
    import Vue from "vue";
    import BlogPostService from "@/services/BlogPostService";
    import {BlogPost} from "@/types/BlogPost";

    export default Vue.extend({
        data() {
            return {
                blogPost: null as BlogPost | null
            }
        },
        created() {
            this.blogPost = BlogPostService.getBlogPost(parseInt(this.$route.params.id))
        }
    });
</script>

<style scoped>
</style>