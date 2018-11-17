<template lang='pug'>
  .hello
    h1 {{ msg }}
    p
      | For a guide and recipes on how to configure / customize this project,
      br
      |       check out the 
      a(href='https://cli.vuejs.org', target='_blank', rel='noopener') vue-cli documentation
      | .
    h3 Installed CLI Plugins
    ul
      li(v-for='link in links')
        a(:href='link.generateLink()' target='_blank') {{ link.printText() }}

        
    h3 Essential Links
    ul
      li
        a(href='https://vuejs.org', target='_blank', rel='noopener') Core Docs
      li
        a(href='https://forum.vuejs.org', target='_blank', rel='noopener') Forum
      li
        a(href='https://chat.vuejs.org', target='_blank', rel='noopener') Community Chat
      li
        a(href='https://twitter.com/vuejs', target='_blank', rel='noopener') Twitter
      li
        a(href='https://news.vuejs.org', target='_blank', rel='noopener') News
    h3 Ecosystem
    ul
      li
        a(href='https://router.vuejs.org', target='_blank', rel='noopener') vue-router
      li
        a(href='https://vuex.vuejs.org', target='_blank', rel='noopener') vuex
      li
        a(href='https://github.com/vuejs/vue-devtools#vue-devtools', target='_blank', rel='noopener') vue-devtools
      li
        a(href='https://vue-loader.vuejs.org', target='_blank', rel='noopener') vue-loader
      li
        a(href='https://github.com/vuejs/awesome-vue', target='_blank', rel='noopener') awesome-vue
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HelloworldLink from '@/classes/HelloworldLink';

@Component
export default class HelloWorld extends Vue {
  
  private babelItem = new HelloworldLink('https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel', 'babel');
  private tsItem = new HelloworldLink('https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript', 'typescript');
  private pwaItem = new HelloworldLink('https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa', 'pwa');
  private pugItem = new HelloworldLink('https://pugjs.org/api/getting-started.html', 'pug');
  private links: HelloworldLink[] = [];

  @Prop() private msg!: string;

  private mounted() {
    this.links.push(this.babelItem, this.tsItem, this.pwaItem, this.pugItem);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
