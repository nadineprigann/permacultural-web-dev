<template>
  <!-- TODO: make dynamic class names work. it is not possible with pure CSS but preprocessors can be installed. 
    did not work properly as of 02/23. workaround is using these defined scoped styles as class names within parent -->
  <section class="block">
    <div v-html="label" class="type" />
    <div v-html="text" class="text" />
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
      type: String
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
  }
};
</script>

<style scoped lang="css">
.block {
  /* --bg: rgb(113, 168, 255); */
  background-color: #ebebebff;
  border-left: solid 0.5rem var(--highlight-color);
  padding: 1em 1.2em;
  margin: 2em 0;

  &.label-succession {
    --highlight-color: #2c855d;
  }

  &.label-resource {
    --highlight-color: #d36e00;
  }

  &.label-feature {
    --highlight-color: #9a01ff;
  }
  &.label-info {
    --highlight-color: #0c5cb8;
  }
}

.type,
.text {
  font-family: "IBM Plex Mono";
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
