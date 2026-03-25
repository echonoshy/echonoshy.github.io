<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchPost, fetchPostIndex, renderMarkdown, type PostMeta } from '../utils/markdown'

const route = useRoute()
const router = useRouter()
const meta = ref<PostMeta | null>(null)
const html = ref('')

async function load(id: string) {
  const index = await fetchPostIndex()
  const found = index.find(p => p.id === id)
  if (!found) {
    router.replace('/posts')
    return
  }
  meta.value = found
  const raw = await fetchPost(id)
  html.value = renderMarkdown(raw)
}

onMounted(() => load(route.params.id as string))
watch(() => route.params.id, (id) => { if (id) load(id as string) })
</script>

<template>
  <article v-if="meta" class="container post-detail">
    <header class="post-header">
      <div class="post-meta">
        <time>{{ meta.date }}</time>
        <span v-for="tag in meta.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <h1>{{ meta.title }}</h1>
    </header>
    <div class="markdown-body" v-html="html"></div>
    <div class="back-link">
      <router-link to="/posts">&larr; Back</router-link>
    </div>
  </article>
</template>

<style scoped>
.post-header {
  margin-bottom: var(--space-xl);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
}

.post-meta time {
  font-size: 0.85rem;
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

.post-detail h1 {
  font-size: 2rem;
  letter-spacing: -0.02em;
}

.back-link {
  margin-top: var(--space-2xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
}
.back-link a {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}
.back-link a:hover {
  color: var(--color-accent);
}
</style>
