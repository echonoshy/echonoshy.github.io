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
      <!-- Decorative floating shapes -->
      <div class="hero-shapes" aria-hidden="true">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      <h1>Echo</h1>
      <TypeWriter text="writing code, thinking about things." :speed="60" />
    </section>

    <section class="intro-section">
      <div class="intro-divider"></div>
      <p class="intro-text">Code / AI / Thinking / Life</p>
    </section>

    <section v-if="posts.length" class="recent-section">
      <h2 class="section-title">Recent</h2>
      <div class="post-list">
        <PostCard
          v-for="(post, index) in posts"
          :key="post.id"
          v-bind="post"
          :style="{ animationDelay: `${index * 0.1}s` }"
          class="post-card-animated"
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

/* ---- Hero Section ---- */
.hero-section {
  margin-bottom: var(--space-xl);
  position: relative;
  overflow: visible;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: var(--space-sm);
  letter-spacing: -0.03em;
  position: relative;
  z-index: 1;
}

/* Decorative floating shapes */
.hero-shapes {
  position: absolute;
  top: -40px;
  left: -60px;
  right: -60px;
  bottom: -40px;
  pointer-events: none;
  z-index: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.12;
}

.shape-1 {
  width: 180px;
  height: 180px;
  background: var(--color-accent);
  top: -30px;
  right: -20px;
  animation: float-1 8s ease-in-out infinite;
}

.shape-2 {
  width: 120px;
  height: 120px;
  background: var(--color-accent);
  bottom: -10px;
  left: -30px;
  border-radius: 40% 60% 55% 45%;
  animation: float-2 10s ease-in-out infinite;
}

.shape-3 {
  width: 80px;
  height: 80px;
  background: var(--color-accent-hover);
  top: 20px;
  left: 40%;
  border-radius: 50% 40% 60% 50%;
  animation: float-3 12s ease-in-out infinite;
}

@keyframes float-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-12px, 15px) scale(1.05); }
}
@keyframes float-2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(10px, -12px) rotate(15deg); }
}
@keyframes float-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(8px, 10px) scale(0.95); }
  66% { transform: translate(-6px, -8px) scale(1.08); }
}

/* ---- Intro Section ---- */
.intro-section {
  margin-bottom: var(--space-2xl);
  text-align: center;
}

.intro-divider {
  width: 40px;
  height: 2px;
  background: var(--color-accent);
  margin: 0 auto var(--space-md);
  border-radius: 1px;
}

.intro-text {
  font-size: 0.85rem;
  font-family: var(--font-mono);
  color: var(--color-text-muted);
  letter-spacing: 0.15em;
}

/* ---- Recent Section ---- */
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

/* Card staggered entrance animation */
.post-card-animated {
  opacity: 0;
  animation: card-enter 0.5s ease forwards;
}

@keyframes card-enter {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

/* ---- Responsive ---- */
@media (max-width: 640px) {
  .shape-1 { width: 120px; height: 120px; }
  .shape-2 { width: 80px; height: 80px; }
  .shape-3 { width: 50px; height: 50px; }
}
</style>
