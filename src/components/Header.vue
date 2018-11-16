<template lang='pug'>
  nav.navbar(role='navigation' aria-label='main navigation')
    p A Vue App
      small  - By 
        a(href="https://twitter.com/boccinfusoT" target="_blank" title="Creator of the App") {{ creator }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private creator!: string;
}
</script>
