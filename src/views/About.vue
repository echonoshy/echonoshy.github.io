<template>
  <div class="container about">
    <h1>About</h1>
    <div class="about-content">
      <p>Hi, I'm Lake.</p>
      <p>
        I write code and occasionally think about things.
        This is where I keep notes — some about tech, some about life.
      </p>
      <p>
        Find me on
        <a href="https://github.com/echonoshy" target="_blank" rel="noopener">GitHub</a>.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about h1 {
  margin-bottom: var(--space-xl);
}

.about-content {
  max-width: 560px;
}

.about-content p {
  margin-bottom: var(--space-md);
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.about-content p:first-child {
  font-size: 1.1rem;
  color: var(--color-text);
}
</style>
