<template>
  <main>
    <h1>Typescript tutorial</h1>
    <div class="indent-10">
      <h2>Getting started</h2>
      <p>
        To get started with Typescript you will have to install a few things first.
        If you don’t have it already, you’ll have to install Node.js first to get npm.
        <br />Download at:
        <a
          href="https://nodejs.org/en/download/"
          target="blank"
        >https://nodejs.org/en/download/</a>
      </p>
      <p>
        When this is done, you’ll want to open a command prompt and enter the following command to install the typescript compiler globally:
        <span
          class="code"
        >npm install &#8209;&#8209;global typescript</span>
      </p>

      <h2>Now you’re ready to make your first 'HelloWorld' application in Typescript</h2>
      <p>
        Make a new folder to place your project in and create a file 'main.ts'.
        My editor of choice is
        <a href="https://code.visualstudio.com/" target="blank">Visual Studio Code</a> but there’s many which support Typescript.
        You’ll want the content of the file to look something like this.
      </p>
      <img src="/img/content/TSHello.jpg" alt="Image of Typescript code" />
      <p>
        When you’ve done this you’ll want to open your command prompt in the location of the file and type
        <span class="code">tsc main</span>. This will compile your
        typescript file to a javascript file. Now you can execute your code with the command
        <span class="code">node main</span>. If you want your typescript file to be
        recompiled every time you make changes to it you can use the tsc command with the option "&#8209;w" or "&#8209;&#8209;watch" e.g.
        <span
          class="code"
        >tsc &#8209;w main</span>
      </p>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped lang="scss">
main {
  .indent-10 {
    margin-left: 10px;
  }
  p,
  img,
  h2 {
    margin-top: 10px;
  }
  span.code {
    background-color: #202020;
    color: rgb(236, 236, 236);
  }
  h1 {
    margin-bottom: 25px;
  }
  img {
    border-radius: 5px;
  }
}
</style>