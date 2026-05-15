<script setup lang="ts">
const steps = [
  {
    num: '01',
    title: 'Get credits',
    body: 'One-time pack or monthly — starting at $39/mo. Credits work across every tool and every template in the library.',
  },
  {
    num: '02',
    title: 'Pick your tool',
    body: 'AI video, image, audio, or the template library. All under one dashboard — or use our Resolve and Premiere plugins.',
  },
  {
    num: '03',
    title: 'Create and export',
    body: 'Generate, customize, and export with full commercial rights. What used to take days now takes minutes.',
  },
]
</script>

<template>
  <section class="py-32 px-8 hairline">
    <div class="max-w-7xl mx-auto">

      <div class="label-accent mb-12 flex items-center gap-2 reveal">
        <span class="inline-block w-4 h-px bg-accent" />
        How It Works
      </div>

      <h2 class="display-md text-white mb-20 reveal">Three steps.</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
        <div v-for="(step, i) in steps" :key="step.num"
          :class="['bg-[#050505] p-10 reveal', `reveal-delay-${i + 1}`]">
          <div class="feature-num mb-8">{{ step.num }}</div>
          <h3 class="text-2xl font-bold text-white tracking-tight mb-4">{{ step.title }}</h3>
          <p class="text-[#777] text-sm leading-relaxed">{{ step.body }}</p>
        </div>
      </div>

    </div>
  </section>
</template>
