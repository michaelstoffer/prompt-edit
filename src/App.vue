<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import LogoStrip from './components/LogoStrip.vue'
import ProblemSection from './components/ProblemSection.vue'
import ToolsSection from './components/ToolsSection.vue'
import TemplatesSection from './components/TemplatesSection.vue'
import PricingSection from './components/PricingSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import FaqSection from './components/FaqSection.vue'
import FinalCta from './components/FinalCta.vue'
import DashboardMockup from './components/DashboardMockup.vue'
import FooterSection from './components/FooterSection.vue'

onMounted(() => {
  if (!window.IntersectionObserver) return
  setTimeout(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
  }, 100)
})
</script>

<template>
  <div style="background:#08080c; color:#fff; overflow-x:hidden;">
    <NavBar />
    <main id="main-content">
      <HeroSection />
      <LogoStrip />
      <DashboardMockup />
      <ProblemSection />
      <ToolsSection />
      <TemplatesSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </main>
    <FooterSection />
  </div>
</template>
