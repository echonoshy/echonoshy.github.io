<script setup lang="ts">
defineProps<{
  id: string
  title: string
  date: string
  tags: string[]
  summary: string
}>()
</script>

<template>
  <router-link :to="`/posts/${id}`" class="post-card">
    <div class="card-meta">
      <time>{{ date }}</time>
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-summary">{{ summary }}</p>
  </router-link>
</template>

<style scoped>
.post-card {
  display: block;
  padding: var(--space-lg);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: var(--color-surface);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
  color: inherit;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.card-meta {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
}

.card-meta time {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
}

.tag {
  font-size: 0.7rem;
  padding: 2px 8px;
  background: var(--color-bg-alt);
  border-radius: 12px;
  color: var(--color-text-secondary);
}

.card-title {
  font-size: 1.15rem;
  margin-bottom: var(--space-xs);
}

.card-summary {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
