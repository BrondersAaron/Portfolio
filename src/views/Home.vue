<template>
  <div class="home">
    <Introduction :img="avatarImage">
      <h1 class>Hey there!</h1>
      <h2 class="subheading">I'd like to introduce myself.</h2>
      <p>
        My name is Aaron Bronders. I was born in Ostend, Belgium, on the 14th of march 1996.<br/>
        I'm a software engineer whose goal in life is to be a language agnostic full-stack developer.
      </p>
      <a href="#experience">Below you can see some more information about me</a>
    </Introduction>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Introduction from "@/components/Introduction.vue";
import Vue from "vue";
import { Image } from "@/interfaces/image";
export default Vue.extend({
  name: "Home",
  components: {
    // HelloWorld
    Introduction
  },
  data() {
    return {
      avatarImage: {
        href:
          "https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg",
        alt: "Image of Aaron Bronders."
      } as Image
    };
  }
});
</script>
