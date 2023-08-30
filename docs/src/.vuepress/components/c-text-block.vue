<template>
  <!-- TODO: make dynamic class names work. it is not possible with pure CSS but preprocessors can be installed. 
    did not work properly as of 02/23. workaround is using these defined scoped styles as class names within parent -->
  <section class="component">
    <div v-html="label" class="type"/>
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
    label: {
      type: String,
      // default: 'info' // info, feature, resource, succession
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
  },

};
</script>

<style scoped lang="css">
.component {
  /* --bg: rgb(113, 168, 255); */
  background-color: rgb(45, 45, 45);
  border-left: solid 0.5rem var(--highlight-color);
  padding: 1em 1.2em;
  margin: 2em 0;

  &.label-succession {
    --highlight-color: rgb(66, 185, 131);
  }

  &.label-resource {
    --highlight-color: rgb(252, 185, 108);
  }

  &.label-feature {
    --highlight-color: rgb(228, 164, 255);
  }
  &.label-info {
    --highlight-color: rgb(141, 221, 255);
  }
}

.type,
.text {
  font-family: 'IBM Plex Mono';
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