<script setup lang="ts">
import { ref } from 'vue'

const active = ref('video')

const tabs = [
  { id: 'video', label: 'AI Video' },
  { id: 'image', label: 'AI Image' },
  { id: 'audio', label: 'AI Audio' },
  { id: 'plugin', label: 'Plugins' },
]

const content: Record<string, {
  eyebrow: string
  headline: string
  body: string
  tools: string[]
  models: { name: string; note: string }[]
}> = {
  video: {
    eyebrow: 'Generate video in seconds',
    headline: 'Cinematic AI\nvideo tools',
    body: 'Access Veo, KlingAI, Nano Banana and more from one unified interface. No accounts to juggle. No credits to track separately.',
    tools: ['Clone Videos', 'Cinematic Films', 'Visual Effects', 'Reels & TikToks', 'Video Ads', 'YouTube Videos'],
    models: [
      { name: 'Veo', note: 'Google · Cinematic' },
      { name: 'KlingAI 2.0', note: 'Fast generation' },
      { name: 'Nano Banana', note: 'Creative FX' },
    ],
  },
  image: {
    eyebrow: 'Visuals that convert',
    headline: 'AI image\ntools',
    body: 'Thumbnails, AI clones, social posts, ad creatives — generated in seconds, ready for commercial use.',
    tools: ['AI Clones', 'YouTube Thumbnails', 'Social Posts', 'Graphic Design', 'Online Ads', 'Image Editing'],
    models: [
      { name: 'DALL·E 3', note: 'OpenAI · Precise' },
      { name: 'Flux', note: 'Ultra realistic' },
      { name: 'Stable Diffusion', note: 'Open source' },
    ],
  },
  audio: {
    eyebrow: 'Sound without the studio',
    headline: 'AI audio\ntools',
    body: 'Voiceovers, voice clones, music generation, and 60,000+ sound effects — all instantly downloadable with commercial rights.',
    tools: ['AI Voiceovers', 'Voice Clones', 'Voice Swaps', 'Sound Effects', 'Music Generation', 'Podcast Audio'],
    models: [
      { name: 'ElevenLabs', note: 'Voice clone' },
      { name: 'Suno', note: 'Music gen' },
      { name: 'Bark', note: 'Open source' },
    ],
  },
  plugin: {
    eyebrow: 'Stay in your editor',
    headline: 'Native editor\nplugins',
    body: 'Browse the full library and generate AI content without leaving DaVinci Resolve or Adobe Premiere Pro. One click to apply.',
    tools: ['DaVinci Resolve Extension', 'Adobe Premiere Plugin', 'Direct Asset Import', 'AI Generation In-App', 'One-Click Apply', 'Credit Sync'],
    models: [
      { name: 'DaVinci Resolve', note: 'Full extension' },
      { name: 'Adobe Premiere', note: 'Plugin' },
      { name: 'More coming', note: 'Final Cut, etc.' },
    ],
  },
}
</script>

<template>
  <section id="tools" class="py-32 px-8 hairline">
    <div class="max-w-7xl mx-auto">

      <div class="label-accent mb-12 flex items-center gap-2 reveal">
        <span class="inline-block w-4 h-px bg-accent" />
        AI Tools
      </div>

      <!-- Tab strip -->
      <div role="tablist" aria-label="AI tool categories" class="flex gap-0 mb-16 border-b border-white/[0.07] reveal">
        <button
          v-for="tab in tabs" :key="tab.id"
          role="tab"
          :id="`aitab-${tab.id}`"
          :aria-selected="active === tab.id"
          :aria-controls="`aitabpanel-${tab.id}`"
          :class="[
            'px-6 py-4 text-sm font-semibold transition-all border-b-2 -mb-px',
            active === tab.id
              ? 'border-accent text-white'
              : 'border-transparent text-[#777] hover:text-[#aaa]'
          ]"
          @click="active = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab content -->
      <template v-for="(c, key) in content" :key="key">
        <div v-if="active === key"
          role="tabpanel"
          :id="`aitabpanel-${key}`"
          :aria-labelledby="`aitab-${key}`"
          class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <!-- Left -->
          <div>
            <div class="label text-[#444] mb-4">{{ c.eyebrow }}</div>
            <h3 class="display-md text-white mb-6" style="white-space: pre-line;">{{ c.headline }}</h3>
            <p class="text-[#888] text-base leading-relaxed mb-10">{{ c.body }}</p>

            <!-- Tool list — minimal -->
            <div class="grid grid-cols-2 gap-x-8 gap-y-3 mb-10">
              <div v-for="tool in c.tools" :key="tool" class="flex items-center gap-2 text-sm text-[#777]">
                <span class="w-1 h-1 rounded-full bg-accent shrink-0" />
                {{ tool }}
              </div>
            </div>

            <a href="#pricing" class="btn btn-orange">
              Try it free
              <svg aria-hidden="true" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          <!-- Right: model cards — stark -->
          <div class="space-y-px">
            <div v-for="(model, i) in c.models" :key="model.name"
              class="group flex items-center justify-between px-6 py-5 tool-card hover:bg-[#0f0f0f] cursor-pointer">
              <div class="flex items-center gap-4">
                <div class="feature-num">0{{ i + 1 }}</div>
                <div class="font-bold text-white text-sm">{{ model.name }}</div>
              </div>
              <div class="label text-[#777]">{{ model.note }}</div>
            </div>
          </div>

        </div>
      </template>

    </div>
  </section>
</template>
