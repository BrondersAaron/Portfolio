<template>
  <div class="home">
    <Introduction :img="avatarImage">
      <h1 class>Hey there!</h1>
      <h2 class="subheading">I'd like to introduce myself.</h2>
      <p>
        My name is Aaron Bronders. I was born in Ostend, Belgium, on the 14th of march 1996.
        <br />I'm a software engineer whose goal in life is to be a language agnostic full-stack developer.
      </p>
    </Introduction>

    <blog-overview></blog-overview>

    <h2>Socials</h2>
      <v-icon x-large color="blue">mdi-linkedin
      </v-icon>
      <v-icon x-large color="dark-gray">mdi-github
      </v-icon>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Introduction from "@/components/Introduction.vue";
import BlogOverview from "@/components/BlogOverview.vue";
import Vue from "vue";
import { Image } from "@/types/image";
export default Vue.extend({
  name: "Home",
  components: {
    // HelloWorld
    Introduction,
    BlogOverview
  },
  data() {
    return {
      avatarImage: {
        href: "/img/content/avatar.jpg",
        alt: "Image of Aaron Bronders."
      } as Image
    };
  }
});
</script>
