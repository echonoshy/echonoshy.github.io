<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  text: string
  speed?: number
}>()

const displayed = ref('')
const showCursor = ref(true)

onMounted(() => {
  let i = 0
  const interval = setInterval(() => {
    if (i < props.text.length) {
      displayed.value += props.text[i]
      i++
    } else {
      clearInterval(interval)
      setTimeout(() => { showCursor.value = false }, 1500)
    }
  }, props.speed ?? 80)
})
</script>

<template>
  <span class="typewriter">
    {{ displayed }}<span v-if="showCursor" class="cursor">|</span>
  </span>
</template>

<style scoped>
.typewriter {
  font-family: var(--font-mono);
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.cursor {
  animation: blink 0.8s step-end infinite;
  color: var(--color-accent);
  margin-left: 1px;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>
