<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueCarousel } from '@/entry.esm';

export default defineComponent({
  name: "ServeDev",
  // components: {
  //  VueCarousel,
  // }
});
</script>

<template>
  <div id="app" style="width: 800px; margin: 0 auto">
    <v-carousel>
      <img src="../src/assets/demo01.jpg" />
      <a><img src="../src/assets/demo02.jpg" /></a>
    </v-carousel>
  </div>
</template>
