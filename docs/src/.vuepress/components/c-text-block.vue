<template>
  <section class="component">
    <div v-html="item"/>
    <!-- <c-base-bodytext :class="$style.body" v-html="item" /> -->
  </section>
</template>

<script>
// import CBaseBodytext from "@/components/c-base-bodytext";

export default {
  // components: { CBaseBodytext },
  props: {
    item: {
      type: String,
      required: true,
      default: ""
    },
    type: {
      type: String,
      default: 'info'
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
  },

};
</script>

