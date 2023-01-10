<template>
  <a :href="url" target="_blank" rel="noopener">
    {{ label }}
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return {
        component: [this.$style.component]
      };
    }
  }
};
</script>
<style scoped lang="scss">
</style>
