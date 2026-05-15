<script setup lang="ts">
import { ref, onMounted } from 'vue'
const ready = ref(false)
onMounted(() => setTimeout(() => (ready.value = true), 60))

const cards = [
  {
    label: 'Cinematic Film',
    tag: 'AI Video · Veo',
    gradient: 'linear-gradient(135deg,#1a0a00 0%,#3d1400 60%,#ff5c0022 100%)',
    accent: '#ff5c00',
    icon: '🎬',
    size: 'tall',
  },
  {
    label: 'YouTube Thumbnail',
    tag: 'AI Image · DALL·E 3',
    gradient: 'linear-gradient(135deg,#00081a 0%,#001d4a 60%,#0050cc22 100%)',
    accent: '#4d8fff',
    icon: '🖼️',
    size: 'normal',
  },
  {
    label: 'Voice Clone',
    tag: 'AI Audio · ElevenLabs',
    gradient: 'linear-gradient(135deg,#000a08 0%,#00261c 60%,#00cc6622 100%)',
    accent: '#00cc66',
    icon: '🎙️',
    size: 'normal',
  },
  {
    label: 'Brand Ad Reel',
    tag: 'AI Video · KlingAI',
    gradient: 'linear-gradient(135deg,#0d0014 0%,#230038 60%,#8800ff22 100%)',
    accent: '#9933ff',
    icon: '📱',
    size: 'normal',
  },
  {
    label: 'Sound Effect Pack',
    tag: 'AI Audio · Suno',
    gradient: 'linear-gradient(135deg,#080014 0%,#1a003a 60%,#ff00aa22 100%)',
    accent: '#ff44bb',
    icon: '🎵',
    size: 'normal',
  },
]

const avatarColors = ['#ff5c00', '#4d8fff', '#9933ff', '#00cc66']
const wavebarHeights = [60,80,40,90,55,75,85,50,70,60,80,45]
</script>

<template>
  <section aria-labelledby="hero-heading" class="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">

    <!-- Grid background -->
    <div aria-hidden="true" class="grid-bg absolute inset-0 pointer-events-none opacity-60" />

    <!-- Radial orange glow, bottom left -->
    <div aria-hidden="true" class="hero-glow-orange" />

    <!-- Top right subtle glow -->
    <div aria-hidden="true" class="hero-glow-blue" />

    <div class="wrap relative z-[1]">
      <div class="hero-grid">

        <!-- ── LEFT: copy ── -->
        <div>
          <!-- Overline -->
          <div class="enter enter-d1 flex items-center gap-[10px] mb-7">
            <span class="inline-block w-8 h-[2px] bg-brand rounded-[1px]" />
            <span class="overline">The AI creative platform for video creators</span>
          </div>

          <!-- Headline -->
          <h1 id="hero-heading" class="hero-headline enter enter-d2 mb-6 text-white">
            Think of PromptEdit like a <span class="grad-text">grocery store</span> for AI.
          </h1>

          <!-- Body -->
          <p class="enter enter-d3 text-[18px] leading-[1.7] text-dim max-w-[440px] mb-9">
            Instead of paying $20 here, $30 there, and $50 somewhere else —
            access <strong class="text-[#ccc]">every major AI tool</strong> and
            <strong class="text-[#ccc]">100,000+ pro templates</strong> from one platform,
            on simple pay-as-you-go credits.
          </p>

          <!-- CTAs -->
          <div class="enter enter-d4 flex items-center gap-4 flex-wrap mb-11">
            <a href="#pricing" class="btn-primary glow-o text-[15px] py-4 px-[34px]">
              Get started — it's free
              <svg aria-hidden="true" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="#tools" class="btn-outline">See all AI tools</a>
          </div>

          <!-- Social proof -->
          <div class="enter enter-d5 flex items-center gap-5 flex-wrap">
            <div class="flex items-center gap-[10px]">
              <div class="flex">
                <div v-for="(c, i) in avatarColors" :key="i"
                  class="w-[30px] h-[30px] rounded-full border-2 border-[#08080c] relative"
                  :style="`background:${c};margin-left:${i>0?'-8px':'0'};z-index:${4-i};`" />
              </div>
              <div>
                <div class="text-[13px] font-bold text-white">10,000+ creators</div>
                <div class="text-[11px] text-muted">already creating</div>
              </div>
            </div>
            <div class="w-px h-8 bg-white/[0.08]" />
            <div>
              <div class="flex gap-[2px] mb-[2px]">
                <span v-for="_ in 5" :key="_" class="star">★</span>
              </div>
              <div class="text-[11px] text-muted">Loved by creators worldwide</div>
            </div>
          </div>
        </div>

        <!-- ── RIGHT: AI content grid ── -->
        <div class="enter enter-d3 hero-cards">

          <!-- Tall card: Cinematic Film (spans 2 rows) -->
          <div class="card float row-span-2 overflow-hidden min-h-[280px] relative cursor-pointer"
            :style="`background:${cards[0].gradient};`">
            <div class="absolute inset-0 p-4 flex flex-col justify-between">
              <div class="flex justify-between items-start">
                <span class="text-[24px]">{{ cards[0].icon }}</span>
                <div class="flex items-center gap-1 py-[3px] px-2 bg-black/50 rounded">
                  <div class="w-[6px] h-[6px] rounded-full" :style="`background:${cards[0].accent};`" />
                  <span class="text-[9px] font-bold text-[#aaa] tracking-[0.08em]">REC</span>
                </div>
              </div>
              <div class="flex items-end gap-[2px] h-8 px-1">
                <div v-for="(h, i) in wavebarHeights" :key="i"
                  class="w-[3px] rounded-[2px] opacity-60"
                  :style="`height:${h}%;background:${cards[0].accent};`" />
              </div>
              <div>
                <div class="text-[13px] font-bold text-white">{{ cards[0].label }}</div>
                <div class="text-[10px] text-muted mt-[2px]">{{ cards[0].tag }}</div>
              </div>
            </div>
          </div>

          <!-- Normal cards -->
          <div v-for="card in cards.slice(1)" :key="card.label"
            class="card overflow-hidden relative cursor-pointer p-[14px] flex flex-col justify-between min-h-[118px]"
            :style="`background:${card.gradient};`">
            <div class="flex justify-between">
              <span class="text-[18px]">{{ card.icon }}</span>
              <div class="w-2 h-2 rounded-full" :style="`background:${card.accent};box-shadow:0 0 8px ${card.accent};`" />
            </div>
            <div>
              <div class="text-[12px] font-bold text-white">{{ card.label }}</div>
              <div class="text-[10px] text-muted mt-[2px]">{{ card.tag }}</div>
            </div>
          </div>

          <!-- Credits widget -->
          <div class="card float-slow col-span-2 p-[14px] px-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-brand/15 border border-brand/30 flex items-center justify-center text-[18px]">⚡</div>
              <div>
                <div class="text-[13px] font-bold text-white">Credit Balance</div>
                <div class="text-[11px] text-muted">All tools, one wallet</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-o text-[22px] font-black tracking-[-0.03em]">$110</div>
              <div class="text-[10px] text-muted">of credits</div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <!-- Scroll hint -->
    <div aria-hidden="true" class="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[6px] opacity-35">
      <span class="text-[10px] font-semibold tracking-[0.12em] uppercase text-muted">Scroll</span>
      <div class="scroll-line" />
    </div>

  </section>
</template>

<style scoped>
.hero-glow-orange {
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,92,0,0.12) 0%, transparent 70%);
  pointer-events: none;
}

.hero-glow-blue {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(77,143,255,0.08) 0%, transparent 70%);
  pointer-events: none;
}

.scroll-line {
  width: 1px;
  height: 36px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  padding: 60px 0 80px;
}

.hero-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 10px;
}

@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 0 60px;
  }

  .hero-cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .hero-cards {
    grid-template-columns: 1fr;
  }

  .hero-cards .card:first-child {
    grid-row: span 1;
    min-height: 160px !important;
  }

  .hero-cards > div:last-child {
    grid-column: span 1;
  }
}
</style>
