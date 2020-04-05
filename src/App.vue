<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary class="hidden-md-and-up pa-5">
      <v-list dense>
        <v-list-item
          v-for="route in $router.options.routes"
          :key="route.path"
          :to="route.path"
          router
        >
          <v-list-item-content>
            <v-list-item-title>{{route.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title @click="$router.push('/')">Aaron Bronders</v-toolbar-title>
      <div class="d-flex align-center"></div>
      <v-tabs right class="hidden-sm-and-down">
        <v-tab
          v-for="route in $router.options.routes"
          :key="route.path"
          :to="route.path"
        >{{ route.name }}</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {},
  data: () => ({
    drawer: false
  })
});
</script>

<style lang="scss">
main {
  width: 2/3 * 100%;
  margin: 15px auto;
}
.indent-10 {
  margin-left: 10px;
}
div.v-toolbar__content > div.v-toolbar__title {
  overflow: visible;
  cursor: pointer;
}

html {
  scroll-behavior: smooth;
}

header.v-toolbar {
  height: 64px;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.v-alert {
  margin-top: 64px;
}

@media only screen and (max-width: 960px) {
  main {
    width: 90%;
    margin: 15px auto;
  }
}
</style>
