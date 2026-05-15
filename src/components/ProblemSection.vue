<script setup lang="ts">
const subs = [
  { name: 'AI Video Tool #1',   cost: '$50/mo', icon: '🎬' },
  { name: 'AI Image Generator',  cost: '$30/mo', icon: '🎨' },
  { name: 'AI Voice Tool',       cost: '$22/mo', icon: '🎙️' },
  { name: 'Stock Music Platform', cost: '$20/mo', icon: '🎵' },
  { name: 'Template Marketplace', cost: '$25/mo', icon: '📦' },
  { name: 'AI Editing Tool',     cost: '$20/mo', icon: '✂️' },
]

const stats = [
  { val: '$167', label: 'Average monthly spend on scattered AI subscriptions' },
  { val: '8+',   label: 'Platforms creators log into every week just to create' },
  { val: '40%',  label: 'Of that spend goes to tools that get used less than once a month' },
]
</script>

<template>
  <section aria-labelledby="problem-heading" class="py-20 relative">

    <div class="wrap">

      <!-- Label -->
      <div class="reveal flex items-center gap-[10px] mb-5">
        <span aria-hidden="true" class="w-8 h-[2px] bg-brand rounded-[1px] inline-block" />
        <span class="overline">The problem with the status quo</span>
      </div>

      <!-- Headline + body -->
      <div class="problem-grid reveal mb-16">
        <div>
          <h2 id="problem-heading" class="section-headline text-white mb-0">
            You're paying<br />for 8 tools.<br />
            <span class="text-[#555]">You need one.</span>
          </h2>
        </div>
        <div class="reveal d1 pt-2">
          <p class="text-[18px] leading-[1.8] text-dim mb-8">
            Every month, video creators bleed money across a dozen disconnected platforms —
            each with their own login, their own dashboard, and their own pricing scheme.
            Meanwhile your actual content just sits waiting.
          </p>

          <!-- Subscriptions list -->
          <div class="flex flex-col gap-[6px]">
            <div v-for="sub in subs" :key="sub.name"
              class="flex items-center justify-between py-3 px-4 bg-sidebar rounded-lg border border-white/[0.06]">
              <div class="flex items-center gap-[10px]">
                <span class="text-[16px]">{{ sub.icon }}</span>
                <span class="text-[13px] text-dim">{{ sub.name }}</span>
              </div>
              <span class="text-[12px] font-bold text-faint font-mono">{{ sub.cost }}</span>
            </div>

            <!-- Total row — highlighted -->
            <div class="flex items-center justify-between py-[14px] px-4 bg-brand/[0.07] rounded-lg border border-brand/25 mt-1">
              <span class="text-[14px] font-bold text-white">Total per month</span>
              <span class="text-[16px] font-black text-brand font-mono">$167/mo</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats row -->
      <div class="reveal d2 stats-grid bg-white/[0.06] rounded-xl overflow-hidden">
        <div v-for="s in stats" :key="s.val"
          class="bg-surface py-9 px-8">
          <div class="stats-val font-black tracking-[-0.04em] text-white mb-[10px]">{{ s.val }}</div>
          <div class="text-[14px] leading-[1.6] text-muted max-w-[220px]">{{ s.label }}</div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.problem-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
}

.stats-val {
  font-size: clamp(36px, 4vw, 56px);
}

@media (max-width: 768px) {
  .problem-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1px;
  }
}
</style>
