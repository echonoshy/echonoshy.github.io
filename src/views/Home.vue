<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TypeWriter from '../components/TypeWriter.vue'
import PostCard from '../components/PostCard.vue'
import { fetchPostIndex, type PostMeta } from '../utils/markdown'

const posts = ref<PostMeta[]>([])

onMounted(async () => {
  const all = await fetchPostIndex()
  posts.value = all.slice(0, 5)
})
</script>

<template>
  <div class="container home">
    <section class="hero-section">
      <h1>Echo</h1>
      <TypeWriter text="writing code, thinking about things." :speed="60" />
    </section>

    <section v-if="posts.length" class="recent-section">
      <h2 class="section-title">Recent</h2>
      <div class="post-list">
        <PostCard
          v-for="post in posts"
          :key="post.id"
          v-bind="post"
        />
      </div>
      <router-link to="/posts" class="view-all">View all &rarr;</router-link>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding-top: var(--space-2xl);
}

.hero-section {
  margin-bottom: var(--space-2xl);
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: var(--space-sm);
  letter-spacing: -0.03em;
}

.section-title {
  font-size: 0.85rem;
  font-family: var(--font-sans);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
  margin-bottom: var(--space-lg);
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.view-all {
  display: inline-block;
  margin-top: var(--space-lg);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}
.view-all:hover {
  color: var(--color-accent);
}
</style>
