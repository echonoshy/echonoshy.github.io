<script setup lang="ts">
defineProps<{
  tags: string[]
  active: string
}>()

defineEmits<{
  select: [tag: string]
}>()
</script>

<template>
  <div class="tag-filter">
    <button
      class="filter-btn"
      :class="{ active: active === '' }"
      @click="$emit('select', '')"
    >
      All
    </button>
    <button
      v-for="tag in tags"
      :key="tag"
      class="filter-btn"
      :class="{ active: active === tag }"
      @click="$emit('select', tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<style scoped>
.tag-filter {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

.filter-btn {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  padding: 4px 14px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.filter-btn.active {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: white;
}
</style>
