<template>
  <section aria-labelledby="cta-heading" class="py-20 relative overflow-hidden">

    <!-- Dramatic orange glow center -->
    <div aria-hidden="true" class="cta-center-glow" />
    <div aria-hidden="true" class="cta-top-line" />
    <div aria-hidden="true" class="cta-bottom-line" />

    <div class="wrap reveal text-center relative z-[1]">

      <div aria-hidden="true" class="inline-flex items-center gap-2 py-2 px-[18px] rounded-full bg-brand/10 border border-brand/25 mb-9">
        <span class="w-[6px] h-[6px] rounded-full bg-brand inline-block shadow-[0_0_8px_#ff5c00]" />
        <span class="text-[12px] font-bold tracking-[0.1em] uppercase text-brand">Ready to create</span>
      </div>

      <h2 id="cta-heading" class="hero-headline text-white mb-7 max-w-[800px] mx-auto">
        Your best content is waiting to be made.
      </h2>

      <p class="text-[19px] leading-[1.8] text-muted max-w-[520px] mx-auto mb-12">
        Join thousands of creators who stopped juggling subscriptions and started making videos that actually get watched.
      </p>

      <div class="flex items-center justify-center gap-4 flex-wrap mb-8">
        <a href="#pricing" class="btn-primary glow-o text-[16px] py-[18px] px-10">
          Get started — it's free
          <svg aria-hidden="true" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
        <a href="#pricing" class="btn-outline text-[15px]">View pricing</a>
      </div>

      <ul class="flex items-center justify-center gap-6 flex-wrap list-none p-0 m-0">
        <li v-for="item in badges" :key="item" class="flex items-center gap-[6px] text-[13px] text-faint">
          <svg aria-hidden="true" width="14" height="14" fill="none" stroke="#ff5c00" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
          {{ item }}
        </li>
      </ul>

    </div>
  </section>
</template>

<script setup lang="ts">
const badges = ['30-day money-back guarantee', 'Cancel anytime', 'No credit card required to browse', 'Commercial license included']
</script>

<style scoped>
.cta-center-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(255,92,0,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.cta-top-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,92,0,0.4), transparent);
}
.cta-bottom-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
}
</style>
