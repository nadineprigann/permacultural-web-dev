<template>
  <!-- <img :src="src" :sizes="sizes" :loading="loading" :alt="alt" class="image" /> -->
  <img :src="src" :loading="loading" :alt="alt" class="image" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    loading: {
      type: String,
      default: "lazy"
    },
    alt: {
      type: String,
      required: true
    }
  },
  computed: {
    // classes() {
    //   return {
    //     component: [this.$style.component,
    //     this.$style['label-' + this.label]
    //     ]
    //   };
    // }
    // sizes() {
    // return "(min-width: 90em) 50vw, (min-width: 48em) 35vw, (min-width: 30em) 35vw, 100vw";
    // }
  }
};
</script>

<style scoped lang="css">
.image {
  max-width: 100%;
  height: auto;
}
</style>
