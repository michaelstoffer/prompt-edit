<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const mobileOpen = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const nav = [
  { label: 'AI Tools', href: '#tools' },
  { label: 'Templates', href: '#templates' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
    :class="scrolled ? 'bg-[rgba(8,8,12,0.92)] backdrop-blur-[16px] border-b border-white/[0.06]' : ''"
  >
    <div class="wrap nav-inner">
      <!-- Logo -->
      <a href="/" aria-label="PromptEdit home" class="flex items-center gap-[10px] no-underline">
        <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="7" fill="#ff5c00"/>
          <path d="M9 19V13l5-4 5 4v6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="14" cy="10" r="2" fill="white"/>
        </svg>
        <span class="font-extrabold text-[17px] text-white tracking-[-0.03em]">PromptEdit</span>
      </a>

      <!-- Desktop nav -->
      <nav aria-label="Main navigation" class="desktop-nav">
        <a v-for="l in nav" :key="l.label" :href="l.href"
          class="text-[13px] font-semibold text-muted no-underline tracking-[0.01em] transition-colors duration-200 hover:text-white">
          {{ l.label }}
        </a>
      </nav>

      <!-- Desktop CTAs -->
      <div class="desktop-cta">
        <a href="#pricing" class="text-[13px] font-semibold text-faint no-underline">Sign in</a>
        <a href="#pricing" class="btn-primary py-[10px] px-[22px] text-[13px]">Get started free</a>
      </div>

      <!-- Mobile hamburger -->
      <button class="mobile-menu-btn" :aria-label="mobileOpen ? 'Close menu' : 'Open menu'" :aria-expanded="mobileOpen"
        @click="mobileOpen=!mobileOpen">
        <svg aria-hidden="true" width="22" height="22" fill="none" stroke="#888" stroke-width="2" viewBox="0 0 24 24">
          <path v-if="!mobileOpen" stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="bg-[#0d0d12] border-t border-white/[0.06] px-6 py-5 flex flex-col gap-4">
      <a v-for="l in nav" :key="l.label" :href="l.href"
        class="text-[15px] font-semibold text-[#aaa] no-underline" @click="mobileOpen=false">{{ l.label }}</a>
      <a href="#pricing" class="btn-primary mt-2 justify-center" @click="mobileOpen=false">Get started free</a>
    </div>
  </header>
</template>

<style scoped>
.nav-inner {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.desktop-cta {
  display: flex;
  align-items: center;
  gap: 16px;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

@media (max-width: 768px) {
  .desktop-nav,
  .desktop-cta {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }
}
</style>
