<script setup lang="ts">
const features = [
  { num: '01', title: 'Pay-as-you-go credits', body: 'Buy $110 in credits for $98. Use them across every AI tool and every template. No expiry. No waste.' },
  { num: '02', title: 'Every AI model, one login', body: 'Veo, KlingAI, Nano Banana, ElevenLabs — all under one dashboard. Stop switching tabs.' },
  { num: '03', title: 'Commercial license, always', body: 'Every generation, every template. Use anything for client work, YouTube, ads. No fine print.' },
  { num: '04', title: 'Inside your editor', body: 'Our plugins for DaVinci Resolve and Adobe Premiere let you generate and import without leaving your timeline.' },
]
</script>

<template>
  <section class="py-32 px-8">
    <div class="max-w-7xl mx-auto">

      <div class="label-accent mb-12 flex items-center gap-2 reveal">
        <span class="inline-block w-4 h-px bg-accent" />
        The Solution
      </div>

      <!-- Headline -->
      <div class="mb-20 reveal">
        <h2 class="display-md text-white">
          One platform.<br />
          <span class="text-accent">Every tool you need.</span>
        </h2>
      </div>

      <!-- Feature list — editorial style, no cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
        <div v-for="(f, i) in features" :key="f.num"
          :class="['bg-[#050505] p-10 group hover:bg-[#0a0a0a] transition-colors reveal', `reveal-delay-${i % 2 + 1}`]">
          <div class="feature-num mb-6">{{ f.num }}</div>
          <h3 class="text-xl font-bold text-white mb-3 tracking-tight">{{ f.title }}</h3>
          <p class="text-[#777] text-sm leading-relaxed">{{ f.body }}</p>
        </div>
      </div>

      <!-- VS statement -->
      <div class="mt-px bg-white/[0.06]">
        <div class="bg-[#050505] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 reveal">
          <div>
            <div class="label text-[#777] mb-2">The math is simple</div>
            <p class="text-white text-lg font-semibold">
              $39/month replaces <span class="line-through text-[#444]">$152+ in subscriptions</span>
            </p>
          </div>
          <a href="#pricing" class="btn btn-orange shrink-0">
            See pricing
            <svg aria-hidden="true" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>
