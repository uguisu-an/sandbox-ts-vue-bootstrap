<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      message: "Hello World"
    };
  }
});
</script>

<template>
  <div class="app">
    {{message}}
  </div>
</template>
