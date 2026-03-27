<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav class="navbar" :class="{ scrolled }">
    <div class="navbar-inner container">
      <router-link to="/" class="nav-logo">Echo</router-link>
      <div class="nav-links">
        <router-link to="/posts">Posts</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  z-index: 100;
  background: transparent;
  transition: background var(--transition-normal), box-shadow var(--transition-normal);
}

.navbar.scrolled {
  background: rgba(245, 243, 235, 0.85);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--color-border);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav-logo {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: -0.02em;
  transition: color var(--transition-fast), letter-spacing var(--transition-normal);
}
.nav-logo:hover {
  color: var(--color-accent);
  letter-spacing: 0.06em;
}

.nav-links {
  display: flex;
  gap: var(--space-lg);
}

.nav-links a {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  transition: color var(--transition-fast);
  position: relative;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--color-text);
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 1.5px;
  background: var(--color-accent);
  border-radius: 1px;
}
</style>
