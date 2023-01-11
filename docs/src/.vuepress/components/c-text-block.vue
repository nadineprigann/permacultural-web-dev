<template>
  <section class="component">
    <div v-html="labels.type" class="type"/>
    <div v-html="text" class="text"/>
    <!-- <c-base-bodytext :class="$style.body" v-html="item" /> -->
  </section>
</template>

<script>
// import CBaseBodytext from "@/components/c-base-bodytext";

export default {
  // components: { CBaseBodytext },
  props: {
    text: {
      type: String,
      required: true,
      default: ""
    },
    type: {
      type: String,
      default: 'info' // info, feature, resource, succession
    }
  },
  data() {
    return {
      labels: {
        type: 'succession'
      }
    };
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

<style scoped lang="css">
.component {
  --highlight-color: rgb(66, 185, 131);
  /* --bg: rgb(113, 168, 255); */
  background-color: rgb(45, 45, 45);
  border-left: solid 0.5rem var(--highlight-color);
  padding: 1em 1.2em;
  margin: 2em 0;
}

.type,
.text {
  font-size: 0.85em;
}

.type {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.25em;
  color: var(--highlight-color);
  font-weight: 600;
}
</style>