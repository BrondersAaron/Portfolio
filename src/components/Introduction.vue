<template>
  <section class="indtroduction mt-5">
    <v-row align="center" justify="center" class="introduction">
      <v-col cols="12" md="2" class="text-center">
        <v-avatar size="15vh" class="elevation-5">
          <img :src="img.href" :alt="img.alt" :title="img.title || img.alt" />
        </v-avatar>
      </v-col>
      <v-col cols="12" md="6">
        <slot></slot>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { Image } from "@/interfaces/image";
import Vue from "vue";
export default Vue.extend({
  props: {
    img: Object as () => Image
  }
});
</script>

<style lang="scss" scoped>
.v-col {
  margin: 0 10px;
}
</style>