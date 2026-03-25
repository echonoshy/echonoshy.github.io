<template>
  <footer class="footer">
    <div class="container">
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
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding: var(--space-lg) 0;
}

.footer .container {
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
