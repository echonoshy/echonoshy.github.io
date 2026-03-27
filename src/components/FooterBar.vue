<script setup lang="ts">
import { ref, onMounted } from 'vue'

const quotes = [
  '"The only way to do great work is to love what you do." — Steve Jobs',
  '"Simplicity is the ultimate sophistication." — Leonardo da Vinci',
  '"Talk is cheap. Show me the code." — Linus Torvalds',
  '"Stay hungry, stay foolish." — Stewart Brand',
  '"First, solve the problem. Then, write the code." — John Johnson',
  '"不闻不若闻之，闻之不若见之，见之不若知之，知之不若行之。" — 荀子',
  '"The best time to plant a tree was 20 years ago. The second best time is now."',
  '"We are what we repeatedly do. Excellence is not an act, but a habit." — Aristotle',
]

const quote = ref('')

onMounted(() => {
  quote.value = quotes[Math.floor(Math.random() * quotes.length)]
})
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <span class="footer-quote">{{ quote }}</span>
      </div>
      <div class="footer-bottom">
        <span class="footer-text">
          &copy; {{ new Date().getFullYear() }} Echo
        </span>
        <a
          href="https://github.com/echonoshy"
          target="_blank"
          rel="noopener"
          class="footer-link"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding: var(--space-lg) 0;
}

.footer-top {
  margin-bottom: var(--space-md);
}

.footer-quote {
  font-size: 0.78rem;
  font-style: italic;
  color: var(--color-text-muted);
  line-height: 1.6;
  display: block;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-text {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.footer-link {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
.footer-link:hover {
  color: var(--color-accent);
}
</style>
