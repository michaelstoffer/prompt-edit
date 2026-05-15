<script setup lang="ts">
import { ref } from 'vue'

const active = ref('video')

const categories = [
  { id: 'video', label: 'AI Video', emoji: '🎬' },
  { id: 'image', label: 'AI Image', emoji: '🖼️' },
  { id: 'audio', label: 'AI Audio', emoji: '🎙️' },
  { id: 'plugins', label: 'Plugins', emoji: '🔌' },
  { id: 'templates', label: 'Templates', emoji: '📦' },
]

const data: Record<string, { headline: string; sub: string; tools: string[]; models: {name:string;note:string;color:string}[] }> = {
  video: {
    headline: 'AI video generation that would have taken a Hollywood crew',
    sub: 'Clone yourself. Create cinematic films. Generate ads and reels. Access every top-tier video AI — without paying for each one separately.',
    tools: ['Clone Videos', 'Visual Effects', 'Cinematic Films', 'Video Ads', 'Reels & TikToks', 'YouTube Videos'],
    models: [
      { name: 'Veo', note: 'Google · Cinematic video', color: '#ff5c00' },
      { name: 'KlingAI 2.0', note: 'Fast · High quality', color: '#4d8fff' },
      { name: 'Nano Banana', note: 'Creative effects', color: '#9933ff' },
    ],
  },
  image: {
    headline: 'AI images from thumbnails to full campaigns',
    sub: 'Generate YouTube thumbnails, AI clones, social posts, and ad creatives — instantly, with full commercial rights.',
    tools: ['AI Clones', 'YouTube Thumbnails', 'Social Media Posts', 'Graphic Design', 'Online Ads', 'Image Editing'],
    models: [
      { name: 'DALL·E 3', note: 'OpenAI · Photorealistic', color: '#4d8fff' },
      { name: 'Flux', note: 'Ultra high-res', color: '#00cc66' },
      { name: 'Stable Diffusion', note: 'Open source · Fast', color: '#ff44bb' },
    ],
  },
  audio: {
    headline: 'Studio-quality AI audio. No studio required.',
    sub: 'AI voiceovers, voice clones, music generation, and 60,000+ sound effects — all with commercial licensing built in.',
    tools: ['AI Voiceovers', 'AI Voice Clones', 'Voice Swaps', 'AI Sound Effects', 'AI Music Generation', 'Podcast Audio'],
    models: [
      { name: 'ElevenLabs', note: 'Voice cloning · Natural', color: '#ff5c00' },
      { name: 'Suno', note: 'Full song generation', color: '#9933ff' },
      { name: 'Bark', note: 'Expressive audio', color: '#00cc66' },
    ],
  },
  plugins: {
    headline: 'AI tools that live inside your editing software',
    sub: 'Use PromptEdit without leaving DaVinci Resolve or Adobe Premiere Pro. Browse, generate, and import — all from inside your timeline.',
    tools: ['DaVinci Resolve Extension', 'Adobe Premiere Plugin', 'Direct Asset Import', 'In-App AI Generation', 'One-Click Apply', 'Instant Credit Sync'],
    models: [
      { name: 'DaVinci Resolve', note: 'Full plugin · All features', color: '#ff5c00' },
      { name: 'Adobe Premiere', note: 'CEP Extension', color: '#4d8fff' },
      { name: 'More editors', note: 'Final Cut · Coming soon', color: '#777' },
    ],
  },
  templates: {
    headline: 'The most complete creator template library on earth',
    sub: 'Over 100,000 professionally designed editing assets — LUTs, SFX, text animations, overlays, and more. Unlimited downloads, all included.',
    tools: ['4,000+ Cinematic LUTs', '60,000+ Sound Effects', '3,000+ Text Animations', '2,000+ Overlays', '5,000+ Backgrounds', '26,000+ Video Templates'],
    models: [
      { name: 'Unlimited downloads', note: 'No per-asset fees', color: '#ff5c00' },
      { name: '100% commercial use', note: 'Client work, YouTube, ads', color: '#00cc66' },
      { name: 'All software', note: 'Resolve · Premiere · All NLEs', color: '#4d8fff' },
    ],
  },
}
</script>

<template>
  <section id="tools" aria-labelledby="tools-heading" class="py-20 bg-surface-alt border-t border-white/[0.05]">
    <div class="wrap">

      <div class="reveal flex items-center gap-[10px] mb-5">
        <span aria-hidden="true" class="w-8 h-[2px] bg-brand rounded-[1px] inline-block" />
        <span class="overline">Everything in one place</span>
      </div>

      <h2 id="tools-heading" class="section-headline reveal text-white mb-14">
        Every AI tool you need.<br /><span class="text-[#555]">Not a single one missing.</span>
      </h2>

      <!-- Category tabs -->
      <div role="tablist" aria-label="AI tool categories" class="reveal flex gap-2 flex-wrap mb-12">
        <button
          v-for="cat in categories" :key="cat.id"
          role="tab"
          :id="`tools-tab-${cat.id}`"
          :aria-selected="active === cat.id"
          :aria-controls="`tools-panel-${cat.id}`"
          @click="active = cat.id"
          class="inline-flex items-center gap-2 px-5 py-[10px] rounded-lg text-[13px] font-bold cursor-pointer border-none transition-all duration-200"
          :class="active === cat.id
            ? 'bg-brand text-white'
            : 'bg-sidebar text-muted border border-white/[0.07]'"
        >
          <span aria-hidden="true">{{ cat.emoji }}</span> {{ cat.label }}
        </button>
      </div>

      <!-- Tab content -->
      <template v-for="(c, key) in data" :key="key">
        <div v-if="active === key"
          role="tabpanel"
          :id="`tools-panel-${key}`"
          :aria-labelledby="`tools-tab-${key}`"
          class="tools-content">

          <!-- Left: copy -->
          <div>
            <h3 class="tools-headline font-extrabold text-white tracking-[-0.03em] leading-[1.15] mb-5">
              {{ c.headline }}
            </h3>
            <p class="text-[16px] leading-[1.8] text-dim mb-8">{{ c.sub }}</p>

            <!-- Tool list -->
            <div class="tools-checklist mb-9">
              <div v-for="tool in c.tools" :key="tool"
                class="flex items-center gap-2 text-[13px] text-muted">
                <svg aria-hidden="true" width="12" height="12" fill="none" stroke="#ff5c00" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                {{ tool }}
              </div>
            </div>

            <a href="#pricing" class="btn-primary">Try it free →</a>
          </div>

          <!-- Right: model cards -->
          <div class="flex flex-col gap-3">
            <div v-for="m in c.models" :key="m.name"
              class="card p-5 px-6 flex items-center justify-between">
              <div class="flex items-center gap-[14px]">
                <div class="w-[10px] h-[10px] rounded-full shrink-0" :style="`background:${m.color};box-shadow:0 0 10px ${m.color};`" />
                <div>
                  <div class="text-[15px] font-bold text-white">{{ m.name }}</div>
                  <div class="text-[12px] text-muted mt-[2px]">{{ m.note }}</div>
                </div>
              </div>
              <svg aria-hidden="true" width="16" height="16" fill="none" stroke="#555" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </div>

            <!-- Callout -->
            <div class="p-5 px-6 bg-brand/[0.06] border border-brand/20 rounded-xl">
              <div class="text-[13px] font-bold text-brand mb-1">✦ All under one credit balance</div>
              <div class="text-[13px] text-muted">No separate accounts. No switching between platforms. One login, everything works.</div>
            </div>
          </div>

        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.tools-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.tools-checklist {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 20px;
}

.tools-headline {
  font-size: clamp(22px, 3vw, 36px);
}

@media (max-width: 768px) {
  .tools-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .tools-checklist {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .tools-checklist {
    grid-template-columns: 1fr;
  }
}
</style>
