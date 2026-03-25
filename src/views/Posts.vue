<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import PostCard from '../components/PostCard.vue'
import TagFilter from '../components/TagFilter.vue'
import { fetchPostIndex, type PostMeta } from '../utils/markdown'

const posts = ref<PostMeta[]>([])
const activeTag = ref('')

onMounted(async () => {
  posts.value = await fetchPostIndex()
})

const allTags = computed(() => {
  const set = new Set<string>()
  posts.value.forEach(p => p.tags.forEach(t => set.add(t)))
  return Array.from(set)
})

const filtered = computed(() => {
  if (!activeTag.value) return posts.value
  return posts.value.filter(p => p.tags.includes(activeTag.value))
})
</script>

<template>
  <div class="container">
    <h1 class="page-title">Posts</h1>
    <TagFilter
      v-if="allTags.length"
      :tags="allTags"
      :active="activeTag"
      @select="activeTag = $event"
    />
    <div class="post-list">
      <PostCard
        v-for="post in filtered"
        :key="post.id"
        v-bind="post"
      />
    </div>
    <p v-if="!filtered.length && posts.length" class="empty">
      No posts with this tag yet.
    </p>
  </div>
</template>

<style scoped>
.page-title {
  margin-bottom: var(--space-xl);
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.empty {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  padding: var(--space-xl) 0;
}
</style>
