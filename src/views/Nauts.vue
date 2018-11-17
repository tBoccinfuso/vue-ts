<template lang='pug'>
  .about
    h1 This is a page that get's data from
      span  - {{ api }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class Nauts extends Vue {
  private api = process.env.VUE_APP_URL;
}

</script>

