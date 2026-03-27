<script setup lang="ts">
const skills = [
  'Python', 'AI / LLM', 'TTS / ASR', 'RAG',
  'Agent', 'Multi-Modal', 'TypeScript', 'Vue',
]

const timeline = [
  { year: 'Now', text: 'AI Algorithm Engineer, exploring embodied intelligence & speech LLMs' },
  { year: 'Certs', text: 'Senior Software Engineer · Chartered Global FinTech Professional · PMP' },
  { year: 'Create', text: 'Tech content creator on Bilibili / YouTube' },
]

const contacts = [
  { name: 'GitHub', url: 'https://github.com/echonoshy', icon: 'github' },
  { name: 'Feishu', url: 'https://www.feishu.cn/invitation/page/add_contact/?token=7c0pc01a-60b9-4c7e-bcc4-ed5a2cab4625&unique_id=OQdBliNF4nT10nKMpk4g8g==', icon: 'feishu' },
  { name: 'Email', url: 'mailto:echonoshy@gmail.com', icon: 'email' },
  { name: 'Bilibili', url: 'https://space.bilibili.com/65742859', icon: 'bilibili' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCZAq9xDn_IxlW9iCZpV6fqA', icon: 'youtube' },
]
</script>

<template>
  <div class="container about">
    <section class="about-hero">
      <h1>About</h1>
      <div class="about-intro">
        <p class="greeting">Hi, I'm <strong>Lake</strong>.</p>
        <p>
          I write code and occasionally think about things.
          This is where I keep notes — some about tech, some about life.
        </p>
      </div>
    </section>

    <!-- Skills -->
    <section class="about-section">
      <h2 class="section-label">Skills & Interests</h2>
      <div class="skill-tags">
        <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
      </div>
    </section>

    <!-- Timeline -->
    <section class="about-section">
      <h2 class="section-label">Journey</h2>
      <div class="timeline">
        <div v-for="item in timeline" :key="item.year" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-year">{{ item.year }}</span>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="about-section">
      <h2 class="section-label">Find me</h2>
      <div class="contact-links">
        <a
          v-for="contact in contacts"
          :key="contact.name"
          :href="contact.url"
          target="_blank"
          rel="noopener"
          class="contact-item"
        >
          <!-- GitHub -->
          <svg v-if="contact.icon === 'github'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          <!-- Email -->
          <svg v-else-if="contact.icon === 'email'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <!-- Bilibili -->
          <svg v-else-if="contact.icon === 'bilibili'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 01-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 01.16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/>
          </svg>
          <!-- YouTube -->
          <svg v-else-if="contact.icon === 'youtube'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <!-- Feishu -->
          <svg v-else-if="contact.icon === 'feishu'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.9 8.8c0-.2.1-.3.2-.4L12.6 1c.1-.1.3 0 .3.2L10 11.3c0 .1-.1.2-.2.2L2.9 9.1c-.1 0-.1-.1 0-.3zm.4 2.1l6.2 2c.2.1.3.2.3.4l1.5 9.2c0 .2-.1.3-.3.2L3.1 11.3c-.1-.1-.1-.2.2-.4zm9 1.7c-.1-.2 0-.4.2-.4l8.6-3c.2-.1.3 0 .3.2l-1.2 12.8c0 .2-.2.3-.3.2l-7.6-9.8z"/>
          </svg>
          <span>{{ contact.name }}</span>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  padding-top: var(--space-2xl);
}

.about h1 {
  margin-bottom: var(--space-xl);
}

/* ---- Intro ---- */
.about-intro {
  max-width: 560px;
}

.about-intro .greeting {
  font-size: 1.15rem;
  color: var(--color-text);
  margin-bottom: var(--space-md);
}

.about-intro .greeting strong {
  color: var(--color-accent);
}

.about-intro p {
  margin-bottom: var(--space-md);
  color: var(--color-text-secondary);
  line-height: 1.8;
}

/* ---- Section ---- */
.about-section {
  margin-top: var(--space-2xl);
}

.section-label {
  font-size: 0.85rem;
  font-family: var(--font-sans);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
  margin-bottom: var(--space-lg);
}

/* ---- Skills ---- */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.skill-tag {
  font-size: 0.82rem;
  padding: 6px 14px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
}

.skill-tag:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  transform: translateY(-1px);
}

/* ---- Timeline ---- */
.timeline {
  position: relative;
  padding-left: 24px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 8px;
  bottom: 8px;
  width: 1.5px;
  background: var(--color-border);
}

.timeline-item {
  position: relative;
  margin-bottom: var(--space-lg);
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -24px;
  top: 8px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--color-bg);
  border: 2px solid var(--color-accent);
}

.timeline-item:first-child .timeline-dot {
  background: var(--color-accent);
}

.timeline-year {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-accent);
  display: block;
  margin-bottom: 2px;
}

.timeline-content p {
  font-size: 0.92rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* ---- Contact Links ---- */
.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  color: var(--color-text-secondary);
  font-size: 0.88rem;
  transition: all var(--transition-fast);
}

.contact-item:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.contact-item svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* ---- Responsive ---- */
@media (max-width: 640px) {
  .contact-links {
    gap: var(--space-sm);
  }
  .contact-item {
    padding: 8px 14px;
    font-size: 0.82rem;
  }
}
</style>
