<template>
  <header
    class="flex"
    :class="headerClasses"
  >
    <slot name="logo" />
    <slot name="menu" />
    <slot name="contacts" />
    <slot name="burger" />
  </header>
</template>

<script setup lang="ts">
defineProps({
  headerClasses: {
    type: String,
    default: "",
    required: false
  }
});
</script>
