<script setup lang="ts">
import {computed} from "@vue/reactivity";
import createCamera from "./canvas/createCamera"
interface Props {
    id?: string
}
const props = defineProps<Props>()
const id = computed(() => props.id)

// Описываем стандартные элементы для холста в 3D
if (typeof window !=="undefined") {
  const camera = createCamera()
  console.log(camera)
}

</script>

<template>
  <div class="w-full h-full">
    <client-only>
      <canvas class="w-full h-full absolute" :ref="'canvas' + id" />
    </client-only>
    <div class="index">

    </div>
  </div>
</template>