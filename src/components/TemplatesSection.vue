<script setup lang="ts">
const categories = [
  { num: '4,000+', label: 'Cinematic LUTs', desc: 'Hollywood color grades', color: '#ff5c00', visual: 'luts' },
  { num: '60,000+', label: 'Sound Effects', desc: 'Every genre & mood', color: '#4d8fff', visual: 'sfx' },
  { num: '3,000+', label: 'Text Animations', desc: 'Titles, lower thirds, captions', color: '#9933ff', visual: 'text' },
  { num: '2,000+', label: 'Overlays', desc: 'Film grain, light leaks, transitions', color: '#00cc66', visual: 'overlays' },
  { num: '5,000+', label: 'Backgrounds', desc: 'Abstract, cinematic, realistic', color: '#ff44bb', visual: 'bg' },
  { num: '26,000+', label: 'Video Templates', desc: 'Fully editable, instant download', color: '#ffaa00', visual: 'video' },
]

const waveHeights = [40, 70, 55, 90, 35, 75, 60, 85, 45, 65, 80, 50, 70, 40, 90, 55]
</script>

<template>
  <section id="templates" aria-labelledby="templates-heading" class="py-20 relative overflow-hidden">

    <!-- Background glow -->
    <div aria-hidden="true" class="templates-glow" />

    <div class="wrap">

      <div class="reveal flex items-center gap-[10px] mb-5">
        <span aria-hidden="true" class="w-8 h-[2px] bg-brand rounded-[1px] inline-block" />
        <span class="overline">Content Creator Templates Library</span>
      </div>

      <!-- Headline + CTA row -->
      <div class="templates-header reveal mb-16">
        <div>
          <div id="templates-heading" class="templates-hero-num font-black tracking-[-0.05em] leading-[0.88] text-white mb-4">
            100K<span class="text-o">+</span>
          </div>
          <div class="text-[20px] text-dim font-medium">professionally designed editing assets.</div>
          <div class="text-[20px] text-dim font-medium">Unlimited downloads. Always commercial.</div>
        </div>
        <div class="reveal d2">
          <p class="text-[16px] leading-[1.8] text-dim mb-7">
            One subscription gives you access to the complete library — every LUT, every sound effect,
            every template. No per-asset fees. Works with every editing software.
          </p>
          <a href="#pricing" class="btn-outline">Explore the library →</a>
        </div>
      </div>

      <!-- Category grid -->
      <div class="cat-grid gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
        <div v-for="(cat, i) in categories" :key="cat.label"
          :class="['reveal', `d${(i%3)+1}`]"
          class="cat-cell bg-surface p-9 px-8 cursor-pointer transition-colors duration-200 hover:bg-[#111116]">
          <!-- Visual preview -->
          <div aria-hidden="true" class="h-10 mb-4 flex items-end overflow-hidden">
            <!-- LUT gradient strip -->
            <div v-if="cat.visual === 'luts'" class="lut-strip" />
            <!-- SFX waveform -->
            <div v-else-if="cat.visual === 'sfx'" class="flex items-end gap-[2px] h-full w-full">
              <div v-for="(h, j) in waveHeights" :key="j"
                class="flex-1 rounded-[1px] bg-blue"
                :style="`height:${h}%;opacity:${0.3 + (h/100)*0.7};`" />
            </div>
            <!-- Text animation preview -->
            <div v-else-if="cat.visual === 'text'" class="w-full flex items-center gap-2">
              <span class="text-[22px] font-black tracking-[-0.04em]" :style="`color:${cat.color};`">Aa</span>
              <div class="flex-1 flex flex-col gap-1">
                <div class="h-[3px] bg-purple rounded-[2px] w-[80%] opacity-70" />
                <div class="h-[3px] bg-purple rounded-[2px] w-[55%] opacity-40" />
                <div class="h-[3px] bg-purple rounded-[2px] w-[65%] opacity-25" />
              </div>
            </div>
            <!-- Overlay layers -->
            <div v-else-if="cat.visual === 'overlays'" class="relative w-full h-8">
              <div class="absolute inset-0 rounded overlay-bg1" />
              <div class="absolute inset-1 inset-x-2 rounded-[3px] overlay-bg2 border border-green/20" />
              <div class="absolute inset-2 inset-x-4 rounded-[2px] overlay-bg3 border border-green/[0.15]" />
            </div>
            <!-- Background gradient swatches -->
            <div v-else-if="cat.visual === 'bg'" class="flex gap-1 w-full h-7">
              <div v-for="g in ['linear-gradient(135deg,#0a0050,#ff44bb)','linear-gradient(135deg,#001a00,#00cc66)','linear-gradient(135deg,#1a0a00,#ff5c00)','linear-gradient(135deg,#00001a,#4d8fff)']" :key="g"
                class="flex-1 rounded-[3px] opacity-90"
                :style="`background:${g};`" />
            </div>
            <!-- Video template frame -->
            <div v-else-if="cat.visual === 'video'" class="w-full h-7 rounded video-frame flex items-center justify-center gap-[6px]">
              <div class="w-[14px] h-[14px] rounded-[2px] video-thumb" />
              <div class="flex-1 flex flex-col gap-[3px] pr-2">
                <div class="h-[2px] video-line1 rounded-[1px]" />
                <div class="h-[2px] video-line2 rounded-[1px] w-[70%]" />
              </div>
            </div>
          </div>

          <div class="text-[32px] font-black tracking-[-0.04em] mb-[10px]" :style="`color:${cat.color};`">{{ cat.num }}</div>
          <div class="text-[15px] font-bold text-white mb-1">{{ cat.label }}</div>
          <div class="text-[12px] text-faint">{{ cat.desc }}</div>
        </div>
      </div>

      <!-- Bottom note -->
      <div class="reveal mt-6 py-[18px] px-6 bg-brand/[0.05] border border-brand/[0.15] rounded-[10px] flex items-center justify-between flex-wrap gap-4">
        <div class="flex items-center gap-3">
          <svg aria-hidden="true" width="18" height="18" fill="none" stroke="#ff5c00" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          <span class="text-[14px] text-muted">100% commercial use rights. Works with DaVinci Resolve, Adobe Premiere, Final Cut, and any NLE.</span>
        </div>
        <span class="text-[13px] font-bold text-brand">Included with every plan →</span>
      </div>

    </div>
  </section>
</template>

<style scoped>
.templates-glow {
  position: absolute;
  top: -200px;
  right: -200px;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(77,143,255,0.06) 0%, transparent 70%);
  pointer-events: none;
}

.templates-hero-num {
  font-size: clamp(64px, 12vw, 148px);
}

.templates-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}

.templates-header > div:last-child {
  max-width: 340px;
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.lut-strip {
  width: 100%;
  height: 28px;
  border-radius: 4px;
  background: linear-gradient(90deg, #0a0a2e, #1a1060, #8b2fc9, #e8553a, #f5a623, #f9e84d);
  opacity: 0.85;
}

.overlay-bg1 {
  background: linear-gradient(135deg, rgba(0,204,102,0.2), rgba(0,204,102,0.05));
}
.overlay-bg2 {
  background: rgba(0,204,102,0.12);
}
.overlay-bg3 {
  background: rgba(0,204,102,0.08);
}

.video-frame {
  background: #1a1a22;
  border: 1px solid rgba(255,170,0,0.3);
}
.video-thumb {
  background: rgba(255,170,0,0.2);
  border: 1px solid rgba(255,170,0,0.4);
}
.video-line1 {
  background: rgba(255,170,0,0.5);
}
.video-line2 {
  background: rgba(255,170,0,0.3);
}

@media (max-width: 768px) {
  .templates-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .templates-header > div:last-child {
    max-width: 100%;
  }

  .cat-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .cat-grid {
    grid-template-columns: 1fr;
  }
}
</style>
